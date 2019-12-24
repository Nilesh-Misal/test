import numpy as np
import numpy.matlib as M
import sys


file12=''' 
        x = [7.1, 3.4, 7.2, 28/4, 3.6, 17, 9.4, 8.9];
length(x)      % length of x vector
y = rand(3, 4, 5, 2);
ndims(y)       % no of dimensions in array y
s = ['Zara', 'Nuha', 'Shamim', 'Riz', 'Shadab'];
numel(s)       % no of elements in s
    '''
print(file12)

from numpy.matlib import rand,zeros,ones,empty,eye
def hermitian(file12):
    return np.transpose(A,file12).conj()
# Make some shortcuts for transpose,hermitian:
#    np.transpose(A) --> T(A)
#    hermitian(A) --> H(A)

T = np.transpose
H = hermitian
print(H)
print(T)

