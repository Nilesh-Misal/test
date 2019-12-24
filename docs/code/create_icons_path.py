import sys
import os

args = sys.argv

if len(args) <= 1:
	print("Please specify the path for images")
else:
	path = args[1]
	file_name = args[2]

	contents = os.listdir(path)

	with open("..\\..\\src\\views\\" + file_name + ".html", "w") as f:
		f.write("<!-- Dynamically generated code using Python 3 -->\n")
		
		for content in contents:
			print(content)

			if os.path.isfile(path + "\\" + content):
				s = "<img alt='%s' src='../assets/images/svg/%s'>"
				name, e = content.split(".")
				print(f.write(s%(name, content) +  "\n"))
