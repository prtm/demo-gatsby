---
title: connect to ubuntu desktop from linux and windows
---

Tigervnc for linux and windows required

## Ubuntu
```
sudo apt-get update
sudo apt-get upgrade

```
## create a user with password auth
```
sudo -i
adduser rohit
usermod -a -G sudo rohit
```
## ssh password auth allow
```
sudo vim /etc/ssh/sshd_config
```
Change PasswordAuthentication to yes from no
```
sudo /etc/init.d/ssh restart
```
It will ask for which user to allow password auth
### dependency validators
If data is valid url then it open that website instead of search

## desktop functionality 
```
export DEBIAN_FRONTEND=noninteractive
sudo -E apt-get update
sudo -E apt-get install -y ubuntu-desktop
sudo apt-get install vnc4server
sudo apt-get install gnome-panel
```
## Install XRDP and other xfce4 resources.
```
sudo apt-get install xfce4 xrdp
sudo apt-get install xfce4 xfce4-goodies
```
## Make xfce4 the default window manager for RDP connections.
```
echo xfce4-session > ~/.xsession
```
## Copy .xsession to the /etc/skel folder so that xfce4 is set as the default window manager for any new user accounts that are created.
```
sudo cp /home/ubuntu/.xsession /etc/skel
```
## Open the xrdp.ini file to allow changing of the host port you will connect to.
```
sudo vim /etc/xrdp/xrdp.ini
```
## Look for the section [xrdp1] and change the following text (then save and exit [:wq]).
```
port=-1
 to -
port=ask-1

sudo service xrdp restart
```
## type vncserver command and set password
```
vncserver-kill :1
vim .vnc/xstartup

#!/bin/sh
# Uncomment the following two lines for normal desktop:
unset SESSION_MANAGER
# exec /etc/X11/xinit/xinitrc
gnome-session –session=gnome-classic &
gnome-panel&
```
## reboot aws ubuntu system
### install tigervncviewer
### connect to ubuntu using vncviewer
