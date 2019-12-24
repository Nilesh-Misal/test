import sys
import subprocess
import os
import comtypes.client

wdFormatPDF = 17

in_file= '''
It must be built on a good freeBSD word processor. I heard from Shreyansh that
such free libraries for word processing exist. The word processor should suppor'''
out_file='outout4.pdf' 

word = comtypes.client.CreateObject('Word.Application')
doc = word.Documents.Open(in_file)
doc.SaveAs(out_file, FileFormat=wdFormatPDF)
doc.Close()
word.Quit()






# import sys

# print('python')
# file12=sys.argv[1]
# # file14=sys.argv[2]
# # print(file12)
# # file12=''' \documentclass{article}
# # \begin{document}
# # \begin{table}
# # \caption{}
# # \begin{center}
# # \begin{tabular}{lll}
# #  20&44 
# # \end{tabular}
# # \end{center}
# # \end{table}
# # \end{document}'''



# f=open("file1.docx","w")
# f.writelines(file12)
# # f.writelines(file14)
# print('hello')
# f.close()
# # print(f.readlines())


# # print('file write')
# # # file12 = open(r"file.tex","w") 
# # # print('after write')
# # # file12.readlines()

# file1=open('file1.docx','r') 
# data=file1.readlines()
# # print(data ,'hiiiiiiiiiiiiii')
# # #     # tex_file.read(file1)
# # data=file1.readlines()
# # # # print (data)
 
# # # # with open("file.tex", "w") as tex_file:
# # # #     tex_file.write(file1)

# subprocess.call(["pdfword", "file1.docx"])
# # print('file1.tex')