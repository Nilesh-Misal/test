import pdfkit 
import sys
import os 
# print('python')

file12=sys.argv[1]
# print(file12)
# b=str(file12)
# print(b)
print('python')

f=open("file1.html","w")
f.writelines(file12)
print('hello')
print(f)
f.close()

# config_path=r'C:\Program Files\wkhtmltopdf\bin\wkhtmltopdf.exe'
config = pdfkit.configuration(wkhtmltopdf='C:\\Program Files\\wkhtmltopdf\\bin\\wkhtmltopdf.exe')

# pdfkit.from_string("D:\\generator-ak-2\\file1.html", 'out1.pdf') 
pdfkit.from_file('D:\\generator-ak-2\\file1.html', 'out-test.pdf', configuration=config)


os.remove('D:\\generator-ak-2\\file1.html')