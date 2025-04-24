from PIL import Image, ImageDraw
from random import randrange
# Specify width, height, and circle size
width, height, radius = 1920, 1080, 20
# Create new image with all white pixels
image = Image.new("RGB", (width,height), (255,255,255))
draw = ImageDraw.Draw(image)
# Draw circles  at random points and colors
for i in range(width*height//100):
  x, y = randrange(width), randrange(height)
  color = (randrange(255), randrange(255), randrange(255))
  draw.ellipse([x-radius, y-radius, x+radius, y+radius], color)

image.save("Random.png")