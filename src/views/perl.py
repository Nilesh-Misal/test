import subprocess
import sys


var = "/C:/Users/Sjain/Desktop/python"
pipe = subprocess.Popen(["perl", "./addition.pl", var], stdin=subprocess.PIPE)
pipe.stdin.write(var)
pipe.stdin.close()
