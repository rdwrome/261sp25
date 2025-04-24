import csv
csv_file = open("People.csv", "w")
# Create a csv writer
csv_writer = csv.writer(csv_file)
# Write the first row (header)
csv_writer.writerow(["Name", "Street", "Number"])
# Add people
csv_writer.writerow(["James", "1st Street", 98])
csv_writer.writerow(["Mary", "10th Street", 271])
csv_file.close()