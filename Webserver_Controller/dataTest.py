import time
loopCount = 0
f=open("data.txt",'r')
if f.mode == 'r':
	contents = f.readlines()
	name = contents[0]
	email = contents[1]
	light = contents[2]
	#JSONPayload = '{"state":{"desired":{"property":' + '"' + light + '"}}}'
	JSONPayload = '{"state":{"desired":{"Name":' + '"' + name + '", "Email":' + '"' + email + '", "Light":' + '"' + light + '" }}}'
	loopCount += 1
	print(JSONPayload + ". Time = " + str(time.clock()))
