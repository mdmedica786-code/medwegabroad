import base64
import os

def get_b64(path, mime_type):
    with open(path, "rb") as f:
        return f"data:{mime_type};base64," + base64.b64encode(f.read()).decode("utf-8")

# Paths
bg_path = r"C:\Users\ILYAS\.gemini\antigravity\brain\a3caf3dd-e8bd-43b8-bba4-3802d19a7c94\billboard_bg_final_master_1782523335287.jpg"
logo_path = r"D:\med veg\logo.png"
qr_path = r"D:\med veg\qr_code.png"

# Encode
bg_b64 = get_b64(bg_path, "image/jpeg")
logo_b64 = get_b64(logo_path, "image/png")
qr_b64 = get_b64(qr_path, "image/png")

html_content = f"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>MEDWEG Billboard Final</title>
    <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&family=Montserrat:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
    <style>
        * {{ box-sizing: border-box; margin: 0; padding: 0; }}
        body {{
            background-color: #222;
            color: white;
            font-family: 'Montserrat', sans-serif;
            display: flex;
            flex-direction: column;
            align-items: center;
            min-height: 100vh;
            padding: 20px;
            overflow-x: hidden;
        }}

        .toolbar {{
            background: #333;
            padding: 15px 30px;
            border-radius: 8px;
            margin-bottom: 20px;
            display: flex;
            gap: 15px;
            align-items: center;
            box-shadow: 0 4px 10px rgba(0,0,0,0.5);
            z-index: 100;
        }}
        .toolbar button {{
            border: none; padding: 12px 20px; border-radius: 5px;
            font-weight: bold; cursor: pointer; color: white; font-family: 'Montserrat'; font-size: 16px;
        }}
        .toolbar button:hover {{ filter: brightness(1.1); }}
        .instructions {{ font-size: 16px; color: #fff; margin-right: 20px; }}

        .billboard-container {{
            position: relative;
            transform-origin: top center;
            transform: scale(0.45);
            margin-bottom: 200px;
        }}

        .billboard {{
            width: 2400px;
            height: 1200px;
            background-color: #2b659c; 
            background-image: url('{bg_b64}');
            background-size: cover;
            background-position: center;
            position: relative;
            border: 4px solid #fff;
            box-shadow: 0 20px 50px rgba(0,0,0,0.8);
            overflow: hidden;
        }}

        .gradient-overlay {{
            position: absolute; top: 0; left: 0; width: 60%; height: 100%; 
            background: linear-gradient(90deg, rgba(15, 50, 100, 0.85) 0%, rgba(30, 90, 160, 0.6) 65%, rgba(255, 255, 255, 0) 100%);
            z-index: 1;
        }}

        .component {{ position: absolute; z-index: 10; }}

        /* Extracted Hardcoded Positions */
        #item-logo {{ top: 70px; left: 80px; width: 320px; filter: drop-shadow(0 4px 6px rgba(0,0,0,0.3)); z-index: 20; }}
        #item-nmc {{
            top: 310px; left: 160px; width: 160px; height: 160px; background: #fffdf5; border-radius: 50%;
            border: 6px solid #d4af37; box-shadow: inset 0 0 0 4px white, 0 8px 20px rgba(0,0,0,0.4);
            display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center;
        }}
        #item-nmc .star {{ color: #d4af37; font-size: 24px; margin-bottom: 2px; }}
        #item-nmc .text {{ color: #0D1B3E; font-weight: 800; font-size: 16px; line-height: 1.2; }}

        #item-qr {{
            top: 60px; right: 80px; background: white; padding: 20px; border-radius: 20px;
            box-shadow: 0 12px 25px rgba(0,0,0,0.4); border: 4px solid #d4af37; display: flex; flex-direction: column; align-items: center;
        }}
        #item-qr img {{ width: 180px; height: 180px; margin-bottom: 15px; }}
        #item-qr .qr-text {{ color: #d4af37; font-weight: 800; font-size: 26px; text-transform: uppercase; }}

        #item-script {{ top: 220px; left: 520px; font-family: 'Caveat', cursive; color: #FFD700; font-size: 75px; font-weight: 700; font-style: italic; text-shadow: 2px 2px 5px rgba(0,0,0,0.6); white-space: nowrap; }}
        #item-category {{ top: 320px; left: 630px; color: #FFD700; font-size: 65px; font-weight: 900; letter-spacing: 5px; text-transform: uppercase; text-shadow: 3px 3px 6px rgba(0,0,0,0.6); white-space: nowrap; }}
        #item-hero {{ top: 450px; left: 350px; color: #ffffff; font-size: 110px; font-weight: 900; letter-spacing: -2px; text-shadow: 4px 4px 8px rgba(0,0,0,0.6); white-space: nowrap; }}
        #item-countries {{ top: 610px; left: 450px; color: #ffffff; font-size: 34px; font-weight: 600; text-shadow: 2px 2px 4px rgba(0,0,0,0.6); white-space: nowrap; }}
        #item-countries span {{ color: #FFD700; font-weight: 900; margin: 0 15px; }}

        #item-price {{
            top: 710px; left: 420px; background: linear-gradient(180deg, #e3ba4b 0%, #c49525 100%); padding: 22px 70px;
            border-radius: 60px; box-shadow: 0 12px 25px rgba(0,0,0,0.5), inset 0 2px 6px rgba(255,255,255,0.6); border: 3px solid #ecd078;
            color: #0D1B3E; font-size: 42px; font-weight: 900; text-shadow: 1px 1px 0px rgba(255,255,255,0.3); white-space: nowrap;
        }}

        .check-circle {{ width: 34px; height: 34px; border: 4px solid #FFD700; border-radius: 50%; display: flex; justify-content: center; align-items: center; color: #FFD700; font-size: 18px; font-weight: bold; background-color: rgba(0,0,0,0.2); }}
        .bullet-text {{ font-size: 26px; font-weight: 700; color: #ffffff; text-shadow: 2px 2px 4px rgba(0,0,0,0.6); white-space: nowrap; }}
        
        #item-bullet1 {{ top: 860px; left: 400px; display: flex; align-items: center; gap: 12px; }}
        #item-bullet2 {{ top: 860px; left: 750px; display: flex; align-items: center; gap: 12px; }}
        #item-bullet3 {{ top: 860px; left: 1200px; display: flex; align-items: center; gap: 12px; }}

        #item-footer-bg {{ top: 1030px; left: 0px; width: 2400px; height: 170px; background-color: #0a142e; border-top: 6px solid #d4af37; z-index: 2; }}

        #item-phone {{ top: 1070px; left: 80px; display: flex; align-items: center; gap: 20px; z-index: 20; }}
        #item-phone svg {{ color: #d4af37; font-size: 55px; width: 1em; height: 1em; fill: currentColor; }}
        #item-phone .num {{ color: #d4af37; font-size: 75px; font-weight: 900; letter-spacing: -1px; }}

        #item-email {{ top: 1055px; left: 950px; display: flex; align-items: center; gap: 15px; z-index: 20; }}
        #item-email svg {{ color: #87CEEB; font-size: 32px; width: 40px; text-align: center; fill: currentColor; }}
        #item-email .txt {{ color: white; font-size: 28px; font-weight: 500; }}

        #item-address {{ top: 1115px; left: 950px; display: flex; align-items: center; gap: 15px; z-index: 20; }}
        #item-address svg {{ color: #87CEEB; font-size: 32px; width: 40px; text-align: center; fill: currentColor; }}
        #item-address .txt {{ color: white; font-size: 28px; font-weight: 500; }}

        #item-apply {{
            top: 1060px; left: 1950px; background: linear-gradient(180deg, #e3ba4b 0%, #c49525 100%); color: #0D1B3E; padding: 22px 65px;
            border-radius: 50px; font-size: 40px; font-weight: 900; text-transform: uppercase; box-shadow: 0 8px 15px rgba(0,0,0,0.3);
            border: 2px solid #ecd078; z-index: 20;
        }}

    </style>
</head>
<body>

    <div class="toolbar">
        <div class="instructions">Final Layout Locked. Click to Download High Quality Export:</div>
        <button onclick="exportImage('png')" style="background: #4caf50;">Download PNG</button>
        <button onclick="exportImage('jpeg')" style="background: #2196f3;">Download JPG</button>
        <button onclick="exportPDF()" style="background: #f44336;">Download PDF</button>
    </div>

    <div class="billboard-container">
        <div class="billboard" id="billboard">
            
            <div class="gradient-overlay"></div>

            <div class="component" id="item-footer-bg"></div>

            <img src="{logo_b64}" alt="MEDWEG Logo" class="component" id="item-logo">

            <div class="component" id="item-nmc">
                <div class="star">★</div>
                <div class="text">NMC<br>Approved<br>& WHO<br>Recognized</div>
            </div>

            <div class="component" id="item-qr">
                <img src="{qr_b64}" alt="QR Code">
                <div class="qr-text">SCAN ME</div>
            </div>

            <div class="component" id="item-script">From Dream to Destination</div>
            <div class="component" id="item-category">MBBS ABROAD</div>
            <div class="component" id="item-hero">Admissions Open 2026</div>
            
            <div class="component" id="item-countries">
                Uzbekistan <span>•</span> Kazakhstan <span>•</span> Kyrgyzstan <span>•</span> Russia <span>•</span> Georgia
            </div>

            <div class="component" id="item-price">Tuition Starting from Just ₹15 Lakhs</div>

            <div class="component" id="item-bullet1">
                <div class="check-circle">✓</div><div class="bullet-text">Trusted Guidance</div>
            </div>
            <div class="component" id="item-bullet2">
                <div class="check-circle">✓</div><div class="bullet-text">Hassle-Free Admission</div>
            </div>
            <div class="component" id="item-bullet3">
                <div class="check-circle">✓</div><div class="bullet-text">Higher FMGE Success Rate</div>
            </div>

            <div class="component" id="item-phone">
                <svg viewBox="0 0 24 24"><path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.03 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/></svg>
                <div class="num">+91-87969 42407</div>
            </div>

            <div class="component" id="item-email">
                <svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                <div class="txt">medwegaabroad@gmail.com</div>
            </div>

            <div class="component" id="item-address">
                <svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                <div class="txt">Khori Jamalpur, Dhauj, Faridabad – 121004</div>
            </div>

            <div class="component" id="item-apply">APPLY NOW</div>
        </div>
    </div>

    <script>
        const container = document.querySelector('.billboard-container');
        let canvasScale = 0.45;

        async function prepareForExport() {{
            const oldScale = container.style.transform;
            // Temporarily reset to 1.0 for high resolution rendering
            container.style.transform = 'scale(1)';
            await new Promise(r => setTimeout(r, 150));
            return oldScale;
        }}

        function restoreAfterExport(oldScale) {{
            container.style.transform = oldScale;
        }}

        async function exportImage(format) {{
            try {{
                const oldScale = await prepareForExport();
                const canvas = await html2canvas(document.getElementById('billboard'), {{
                    scale: 1, 
                    useCORS: true,
                    allowTaint: true,
                    backgroundColor: '#0D1B3E' // Fallback
                }});
                restoreAfterExport(oldScale);

                const link = document.createElement('a');
                link.download = `medweg_billboard_final.${{format}}`;
                link.href = canvas.toDataURL(`image/${{format}}`, 1.0);
                link.click();
            }} catch (err) {{
                console.error(err);
                alert("Export failed.");
                restoreAfterExport(`scale(${{canvasScale}})`);
            }}
        }}

        async function exportPDF() {{
            try {{
                const oldScale = await prepareForExport();
                const canvas = await html2canvas(document.getElementById('billboard'), {{
                    scale: 1, 
                    useCORS: true,
                    allowTaint: true
                }});
                restoreAfterExport(oldScale);

                const imgData = canvas.toDataURL('image/jpeg', 1.0);
                const {{ jsPDF }} = window.jspdf;
                
                const pdf = new jsPDF({{
                    orientation: 'landscape',
                    unit: 'px',
                    format: [2400, 1200]
                }});
                
                pdf.addImage(imgData, 'JPEG', 0, 0, 2400, 1200);
                pdf.save('medweg_billboard_final.pdf');
            }} catch (err) {{
                console.error(err);
                alert("Export failed.");
                restoreAfterExport(`scale(${{canvasScale}})`);
            }}
        }}
    </script>
</body>
</html>"""

with open(r"D:\med veg\design_and_tools\billboard_final_static.html", "w", encoding="utf-8") as f:
    f.write(html_content)

print("Generated billboard_final_static.html with base64 images embedded.")
