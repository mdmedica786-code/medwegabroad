import { useState, useEffect } from 'react'
import { LogOut, PenTool, Trash2 } from 'lucide-react'
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { ref, onValue, push, set, remove } from 'firebase/database'
import { auth, db } from '../lib/firebase'

export default function AdminPage() {
  const [user, setUser] = useState(null)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [blogs, setBlogs] = useState([])
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [imageUrl, setImageUrl] = useState("")
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    try {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser)
        if (currentUser) {
          fetchBlogs()
        }
      })
      return () => unsubscribe()
    } catch {
      console.log("Firebase not configured properly yet.")
    }
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
      })
    } catch (err) {
      console.error("Error fetching blogs", err)
    }
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    setError("")
    if (!email || !password) {
      setError("Please enter both email and password.")
      return
    }
    try {
      await signInWithEmailAndPassword(auth, email, password)
    } catch (err) {
      if (err.code === "auth/invalid-api-key") {
        setError("Firebase API Key is missing. Please update src/lib/firebase.ts")
      } else {
        setError("Invalid email or password. Please try again.")
      }
    }
  }

  const handleLogout = () => {
    signOut(auth)
  }

  const handleAddBlog = async (e) => {
    e.preventDefault()
    if (!title || !content) return
    setLoading(true)
    try {
      const blogsRef = ref(db, "blogs")
      const newBlogRef = push(blogsRef)
      await set(newBlogRef, {
        title,
        content,
        imageUrl,
        createdAt: Date.now()
      })
      setTitle("")
      setContent("")
      setImageUrl("")
    } catch (err) {
      alert("Error adding blog: " + err.message)
    }
    setLoading(false)
  }

  const handleDeleteBlog = async (id) => {
    if (window.confirm("Are you sure you want to delete this blog post?")) {
      try {
        await remove(ref(db, `blogs/${id}`))
      } catch (err) {
        alert("Error deleting blog: " + err.message)
      }
    }
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-5">
        <div className="bg-white rounded-3xl p-10 w-full max-w-md shadow-xl border border-gray-100">
          <div className="text-center mb-8">
            <h1 className="font-montserrat text-3xl font-extrabold text-brand-blue mb-2">Admin Login</h1>
            <p className="text-gray-500 text-sm">Sign in to manage blog posts</p>
          </div>
          {error && <div className="bg-red-50 text-red-600 p-4 rounded-xl text-sm font-semibold mb-6 border border-red-100">{error}</div>}
          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email Address</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-3.5 border-1.5 border-[#dde2ea] rounded-xl text-sm bg-white" placeholder="admin@medweg.com" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Password</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-3.5 border-1.5 border-[#dde2ea] rounded-xl text-sm bg-white" placeholder="••••••••" />
            </div>
            <button type="submit" className="w-full bg-gradient-to-br from-brand-orange to-brand-orange-light text-white font-montserrat text-sm font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 mt-2">
              Sign In to Dashboard
            </button>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="max-w-[1000px] mx-auto px-5 sm:px-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-montserrat text-3xl font-extrabold text-brand-blue">Admin Dashboard</h1>
            <p className="text-gray-500 text-sm mt-1">Manage your website content</p>
          </div>
          <button onClick={handleLogout} className="flex items-center gap-2 text-sm font-semibold text-red-500 hover:text-red-600 bg-red-50 px-4 py-2 rounded-lg">
            <LogOut size={16} /> Logout
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h2 className="font-montserrat text-lg font-bold text-brand-blue mb-4 flex items-center gap-2">
                <PenTool size={20} className="text-brand-orange" /> Write New Post
              </h2>
              <form onSubmit={handleAddBlog} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Blog Title</label>
                  <input type="text" required value={title} onChange={e => setTitle(e.target.value)} className="w-full p-3 border border-[#dde2ea] rounded-xl text-sm" placeholder="Enter blog title" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Image URL (Optional)</label>
                  <input type="url" value={imageUrl} onChange={e => setImageUrl(e.target.value)} className="w-full p-3 border border-[#dde2ea] rounded-xl text-sm" placeholder="https://example.com/image.jpg" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Content (HTML supported)</label>
                  <textarea required value={content} onChange={e => setContent(e.target.value)} rows={10} className="w-full p-3 border border-[#dde2ea] rounded-xl text-sm resize-y font-mono" placeholder="<p>Write your blog content here...</p>" />
                </div>
                <button type="submit" disabled={loading} className="bg-brand-blue text-white font-montserrat text-sm font-bold py-3 px-6 rounded-xl hover:bg-brand-light-blue transition-colors disabled:opacity-50">
                  {loading ? "Publishing..." : "Publish Post"}
                </button>
              </form>
            </div>
          </div>
          <div>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h2 className="font-montserrat text-lg font-bold text-brand-blue mb-4">Recent Posts</h2>
              {blogs.length === 0 ? (
                <p className="text-sm text-gray-500">No blog posts found.</p>
              ) : (
                <div className="space-y-4">
                  {blogs.map(blog => (
                    <div key={blog.id} className="p-4 border border-gray-100 rounded-xl hover:border-gray-200 transition-colors">
                      <h3 className="font-montserrat font-bold text-sm text-brand-blue line-clamp-2 mb-1">{blog.title}</h3>
                      <div className="text-xs text-gray-400 mb-3">
                        {new Date(blog.createdAt).toLocaleDateString()}
                      </div>
                      <button onClick={() => handleDeleteBlog(blog.id)} className="flex items-center gap-1.5 text-xs font-semibold text-red-500 hover:text-red-600 transition-colors">
                        <Trash2 size={14} /> Delete Post
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
