import csv
csv_file = open("People.csv", "r")
# Create a csv writer
csv_reader = csv.reader(csv_file)
# Read and print each data row one by one
for row in csv_reader:
  print(row)
csv_file.close()