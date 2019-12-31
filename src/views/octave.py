import numpy as np
from oct2py import Oct2Py
import matplotlib.pyplot as plt
import subprocess
import pprint
import os
import sys

file12=sys.argv[1]

# file12 = 'B = rand (3, 2)'
# print(file12)
oc = Oct2Py()
# oc.addpath("C:\Users\Sjain\Desktop\python")
f=open("temp.m","w")
f.writelines(file12)
# print('hello')
f.close()

file1=open('temp.m','r') 
data=file1.readlines()
oc.eval(data)
 

 # basic commands

# x= np.linspace(0, 10, 100)

# subprocess.call(["octave", file12])


# Plot the data
# plt.plot(x, x, label='linear')

# Add a legend
# plt.legend()

# Show the plot
# plt.show()
# print(oc.abs(-1))
# oc(file12)
# print(oc.upper('xyz'))

 # plotting
# oc.plot([1,2,3],'-o', 'linewidth', 2)
# oc.close()
# xx = np.arange(-2*np.pi, 2*np.pi, 0.2)
# oc.surf(np.subtract.outer(np.sin(xx), np.cos(xx)))