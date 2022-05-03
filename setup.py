from setuptools import setup



setup(name='cbpi4-settime',
      version='0.0.1',
      description='CraftBeerPi4 Set Time Plugin',
      author='Tom',
      author_email='tkuehnem@gmail.com',
      url='https://github.com/tkuehnem/cbpi4-settime',
      license='GPLv3',
      include_package_data=True,
      package_data={
        # If any package contains *.txt or *.rst files, include them:
      '': ['*.txt', '*.rst', '*.yaml'],
      'cbpi4-settime': ['*','*.txt', '*.rst', '*.yaml']},
      packages=['cbpi4-settime'],
	    install_requires=[
            'cbpi>=4.0.0.33',
      ]
     )