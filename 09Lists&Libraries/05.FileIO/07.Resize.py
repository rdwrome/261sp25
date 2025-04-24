from PIL import Image
in_file = input("Name of an image file: ")
in_image = Image.open(in_file)
width, height = in_image.size
# n is the resize factor
n = 0.5
out_image = in_image.resize((int(width * n), int(height * n)))
out_image.save("Resized_" + in_file)
