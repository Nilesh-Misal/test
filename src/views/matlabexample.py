# from oct2py import Oct2Py
# oc = Oct2Py()


# script = "function y = myScript(x)\n" \
#          "    y = x-5" \
#          "end"

# with open("myScript.m","w+") as f:
#     f.write(script)

# oc.myScript(7)

from pymatbridge import Matlab
mlab = Matlab()


mlab = Matlab(executable='/Applications/MATLAB_R2011a.app/bin/matlab')


mlab.start()

results = mlab.run_code('a=1')


{u'content': {u'code': u'a=1',
 u'datadir': u'/private/tmp/MatlabData/',
 u'figures': [],
 u'stdout': u'\na =\n\n     1\n\n'},
 u'success': u'true'}
