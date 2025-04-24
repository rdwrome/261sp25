import soundfile
# Read sound file
data, sample_rate = soundfile.read("sine.wav")
gain = 10
for t in range(len(data)):
  data[t] *= gain
  # Hard clip the audio signal
  if data[t] > 1.0:
    data[t] = 1.0
  if data[t] < -1.0:
    data[t] = -1.0
soundfile.write("distorted.wav", data, sample_rate)