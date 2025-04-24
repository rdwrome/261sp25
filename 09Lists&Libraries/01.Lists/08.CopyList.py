old_instruments = ['Drum', 'Guitar', 'Bass']
new_instruments = [] + old_instruments

new_instruments[0] = 'Percussion'

# Copy is successful and IDs are different
print(old_instruments)
print('ID of old instrument:', id(old_instruments))
print(old_instruments)
print('ID of new instrument:', id(new_instruments))