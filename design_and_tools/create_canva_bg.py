from PIL import Image, ImageDraw

# Open the original image
img_path = r"C:\Users\ILYAS\.gemini\antigravity\brain\a3caf3dd-e8bd-43b8-bba4-3802d19a7c94\billboard_bg_final_master_1782523335287.jpg"
img = Image.open(img_path).convert("RGBA")

width, height = img.size

# Create an empty overlay image with the same size
overlay = Image.new("RGBA", (width, height), (0, 0, 0, 0))
draw = ImageDraw.Draw(overlay)

# The gradient in CSS: 
# 0%   -> rgba(15, 60, 115, 0.9)  -> alpha 230
# 60%  -> rgba(30, 100, 170, 0.75) -> alpha 191
# 100% -> rgba(255, 255, 255, 0)   -> alpha 0

# Convert CSS gradient stops to pixel positions
# 60% of width = width * 0.6
for x in range(width):
    if x <= width * 0.6:
        # Interpolate between 0% and 60%
        ratio = x / (width * 0.6)
        r = int(15 + (30 - 15) * ratio)
        g = int(60 + (100 - 60) * ratio)
        b = int(115 + (170 - 115) * ratio)
        a = int(230 + (191 - 230) * ratio)
    else:
        # Interpolate between 60% and 100%
        ratio = (x - width * 0.6) / (width * 0.4)
        r = int(30 + (255 - 30) * ratio)
        g = int(100 + (255 - 100) * ratio)
        b = int(170 + (255 - 170) * ratio)
        a = int(191 + (0 - 191) * ratio)
    
    # Draw vertical line
    draw.line([(x, 0), (x, height)], fill=(r, g, b, a))

# Composite the overlay onto the image
final_img = Image.alpha_composite(img, overlay)
final_img = final_img.convert("RGB")

output_path = r"D:\med veg\canva_background.jpg"
final_img.save(output_path, quality=95)
print("Saved Canva background successfully.")
