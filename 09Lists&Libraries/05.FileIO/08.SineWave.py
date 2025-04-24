import soundfile
import math
# frequency and sampling rate
hz, sample_rate = 440, 44100
data = []
for t in range(sample_rate):
  data.append(math.sin(2*math.pi*t*(hz/sample_rate)))
soundfile.write("sine.wav", data, sample_rate)

