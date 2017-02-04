---
title: Clipboard data search with chrome using python
---

use keyboard shortcut to run this code

## both python2 and python3

### dependency validators
If data is valid url then it open that website instead of search

## python2 
```
pip install validators
```
## python3
```
apt install python3-pip
pip3 install validators
```

### Final Code
```python

import pyperclip, os, validators

output=pyperclip.paste()
x=validators.url(output)
if(x):
  os.system('google-chrome '+output)
else:
  os.system('google-chrome "www.google.com/search?q='+output+'"')
```
