---
title: Linux grub2 password protect
---



## redhat and ubuntu

## grub2 password hash
```
grub2-mkpasswd-pbkdf2
Password: 123
Reenter password: 123
PBKDF2 hash of your password is grub.pbkdf2.sha512.10000.F60BB636B5D1D75D61F9491D899E6087EFFDA35EF7BB4D020FF84253EFDBDD4BC8E56BB3
6A688D851F64FF823F962B79261B17E07B6D02FDBB04C8746A2474EC.ECE6F136F7183505C97F3D30FF4D6AA27EE567D80E1F36E105105472CB2E9ED37A0B5CDD
C608CBD661F015B5ADDDD9E3225690086A24391313C072CC102C9DB4
```
Paste the encrypted long string into the file /etc/grub.d/40_custom together with the set superusers command. Remember to keep the commented lines at the beginning:
```
set superusers="root"
password_pbkdf2 root grub.pbkdf2.sha512.10000.F60BB636B5D1D75D61F9491D899E6087EFFDA35EF7BB4D020FF84253EFDBDD4BC8E56BB3
6A688D851F64FF823F962B79261B17E07B6D02FDBB04C8746A2474EC.ECE6F136F7183505C97F3D30FF4D6AA27EE567D80E1F36E105105472CB2E9ED37A0B5CDD
C608CBD661F015B5ADDDD9E3225690086A24391313C072CC102C9DB4
```

### Update grub
```
grub2-mkconfig -o /boot/grub2/grub.cfg
```

### Redhat extra change
```
grub2-mkconfig -o /etc/grub2.cfg 
```
## to import the changes into the main configuration file.
