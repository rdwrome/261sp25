old_instruments = ['Drum', 'Guitar', 'Bass']
new_instruments = old_instruments

# Both prints out ['Drum', 'Guitar', 'Bass']
print(old_instruments)
print(new_instruments)

new_instruments[0] = 'Percussion'

# Both prints out ['Percussion', 'Guitar', 'Bass']
print(old_instruments)
print(new_instruments)