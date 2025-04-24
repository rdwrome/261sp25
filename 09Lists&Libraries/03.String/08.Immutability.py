string = 'I love you'
string[0] = 'Y' # Can't do this (TypeError)

# Create a new string instead
string = 'Y' + string[1:]
print(string)

