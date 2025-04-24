menu = ['Drum', 'Guitar', 'Bass']
print(menu)
# Append new element to the list
menu.append('Piccolo')
print(menu)
# Insert a new element into the list
# 2 is an index where we insert the new element
menu.insert(2, 'pie') 
print(menu)
# Remove an element from the list
menu.remove('Bass')
print(menu)
# Get the length of list
print('The length of list is:', len(menu))