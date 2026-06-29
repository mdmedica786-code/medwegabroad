import { useState, useEffect } from 'react'
import { Calendar, ArrowRight, X, FileText } from 'lucide-react'
import { ref, onValue } from 'firebase/database'
import { db } from '../lib/firebase'

export default function BlogPage() {
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedBlog, setSelectedBlog] = useState(null)

  useEffect(() => {
    fetchBlogs()
  }, [])

  const fetchBlogs = () => {
    try {
      const blogsRef = ref(db, "blogs")
      onValue(blogsRef, (snapshot) => {
        const data = snapshot.val()
        if (data) {
          const blogList = Object.keys(data).map(id => ({
            id,
            ...data[id]
          }))
          blogList.sort((a, b) => b.createdAt - a.createdAt)
          setBlogs(blogList)
        } else {
          setBlogs([])
        }
        setLoading(false)
      })
    } catch (error) {
      console.error("Error fetching blogs or Firebase not initialized", error)
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-[140px] pb-20">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-12">
        <div className="text-center mb-16">
          <div className="font-montserrat text-[11px] font-bold text-brand-orange tracking-[4px] uppercase mb-3">Latest News</div>
          <h1 className="font-montserrat text-4xl md:text-5xl font-black text-brand-blue mb-4">
            MEDWEG <span className="font-playfair italic text-brand-orange">Blog</span>
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Stay updated with the latest news, admission updates, and student stories from top medical universities abroad.
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="w-10 h-10 border-4 border-brand-gold border-t-transparent rounded-full animate-spin" />
          </div>
        ) : blogs.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl border border-gray-100 shadow-sm">
            <FileText size={48} className="mx-auto text-gray-300 mb-4" />
            <h3 className="font-montserrat text-xl font-bold text-brand-blue mb-2">No Articles Yet</h3>
            <p className="text-gray-500 text-sm">Check back soon for new updates and insights.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map(blog => (
              <article key={blog.id} className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all group flex flex-col h-full">
                {blog.imageUrl && (
                  <div className="h-48 overflow-hidden bg-gray-100">
                    <img src={blog.imageUrl} alt={blog.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                )}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-brand-orange uppercase tracking-wide mb-3">
                    <Calendar size={14} />
                    {new Date(blog.createdAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                  </div>
                  <h2 className="font-montserrat text-xl font-bold text-brand-blue mb-3 line-clamp-2 group-hover:text-brand-orange transition-colors">
                    {blog.title}
                  </h2>
                  <p className="text-sm text-gray-500 line-clamp-3 mb-6 flex-grow">
                    {blog.content.replace(/<[^>]*>?/gm, "")}
                  </p>
                  <button onClick={() => setSelectedBlog(blog)} className="flex items-center gap-1.5 text-sm font-bold text-brand-blue mt-auto group-hover:gap-2.5 transition-all">
                    Read Article <ArrowRight size={16} className="text-brand-orange" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}

        {selectedBlog && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm z-[100]">
            <div className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl animate-fade-in" onClick={e => e.stopPropagation()}>
              <div className="flex justify-between items-center p-5 border-b border-gray-100 bg-white">
                <h3 className="font-montserrat font-bold text-brand-blue text-lg pr-4 truncate">{selectedBlog.title}</h3>
                <button onClick={() => setSelectedBlog(null)} className="p-2 bg-gray-50 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors shrink-0">
                  <X size={20} />
                </button>
              </div>
              <div className="overflow-y-auto p-6 sm:p-10 custom-scrollbar">
                {selectedBlog.imageUrl && (
                  <div className="mb-8 rounded-xl overflow-hidden bg-gray-50 border border-gray-100">
                    <img src={selectedBlog.imageUrl} alt={selectedBlog.title} className="w-full max-h-[400px] object-cover" />
                  </div>
                )}
                <div className="flex items-center gap-2 text-sm font-semibold text-brand-orange uppercase tracking-wide mb-4">
                  <Calendar size={16} />
                  {new Date(selectedBlog.createdAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                </div>
                <h1 className="font-montserrat text-3xl md:text-4xl font-bold text-brand-blue mb-8 leading-tight">
                  {selectedBlog.title}
                </h1>
                <div 
                  className="prose prose-lg prose-blue max-w-none prose-headings:font-montserrat prose-headings:font-bold prose-headings:text-brand-blue prose-a:text-brand-orange hover:prose-a:text-brand-blue prose-a:transition-colors prose-img:rounded-xl prose-img:shadow-sm" 
                  dangerouslySetInnerHTML={{ __html: selectedBlog.content }} 
                />
              </div>
            </div>
            <div className="absolute inset-0 -z-10" onClick={() => setSelectedBlog(null)} />
          </div>
        )}
      </div>
    </div>
  )
}
