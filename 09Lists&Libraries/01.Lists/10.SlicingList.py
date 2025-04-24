menu = ['Drum', 'Guitar', 'Bass']
# Slice indices 1 and 2
print(menu[1:3]) # ['Guitar', 'Bass']
# Slice from index 1 to the end
print(menu[1:]) # ['Guitar', 'Bass']
# Slice index 1
print(menu[1:2]) # ['Guitar']
# Slice nothing
print(menu[1:1]) # []
# Slice indices 0 and 2
print(menu[0:3:2]) # ['Drum', 'Bass']