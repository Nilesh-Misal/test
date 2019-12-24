import subprocess
import sys
import os

print('hello')
script_choice = sys.argv[1]
print('hello')
print(script_choice)
# function_choice = sys.argv[2]

call_script = 'D:\generator-ak-2\demo.R' + script_choice + '.R'
cmd = ['Rscript', call_script]
result = subprocess.check_output(cmd, universal_newlines=True)

print(result)
print('result')
sys.stdout.flush()
