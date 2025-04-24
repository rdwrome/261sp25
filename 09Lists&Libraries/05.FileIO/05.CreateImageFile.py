# Import pillow
from PIL import Image
image = Image.new("RGB", (1920, 1080), (0, 0, 255))
image.save("blue.png")