f=open("data.txt",'r')
if f.mode == 'r':
	contents = f.readlines()
	name = contents[0]
	email = contents[1]
	light = contents[2]
	print("Name: " + name)
	print("Email: " + email)
	print("Status of light: " + light)
