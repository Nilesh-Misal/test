import subprocess
import sys

# print('python')
file12=sys.argv[1]
# print(file12)
# file12=''' \documentclass{article}
# \begin{document}
# \begin{table}
# \caption{}
# \begin{center}
# \begin{tabular}{lll}
#  20&44 
# \end{tabular}
# \end{center}
# \end{table}
# \end{document}'''



f=open("file1.tex","w")
f.writelines(file12)
# print('hello')
f.close()
# print(f.readlines())


# print('file write')
# # file12 = open(r"file.tex","w") 
# # print('after write')
# # file12.readlines()

file1=open('file1.tex','r') 
data=file1.readlines()
# print(data ,'hiiiiiiiiiiiiii')
# #     # tex_file.read(file1)
# data=file1.readlines()
# # # print (data)
 
# # # with open("file.tex", "w") as tex_file:
# # #     tex_file.write(file1)

subprocess.call(["pdflatex", "file1.tex"])
# print('file1.tex')    s