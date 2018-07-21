#!/bin/bash

### README ###
# This is a post-install script to run after initial install or creation of a virtual machine for Ubuntu 14.04. It should configure networking, hostname, and packages. RUN THIS SCRIPT AS ROOT

# After completion of all tasks, this script should automatically remove itself to prevent being run a second time.

### NETWORKING ###

echo " ####### "
echo " The following section will configure static networking"
echo " ####### "

# Prompt if want a static IP
read -p "Set Static IP? (y|n): " CONFIRM_STATIC

if [ "$CONFIRM_STATIC" == "y" ]; then

    read -p "What IP address?: " STATIC_IP
    read -p "What subnet mask?: " STATIC_NETMASK
    read -p "What gateway IP?: " STATIC_GATEWAY
    read -p "List DNS Servers, space-separated: " STATIC_DNS

    if [[ -z $STATIC_IP || -z $STATIC_NETMASK || -z $STATIC_GATEWAY || -z $STATIC_DNS ]]; then
        echo "One of the variables is not defined. Skipping section"
    else

        echo "Setting up networking"
        # Replace interface definitions
        cat > /etc/network/interfaces << EOL
#This file describes the network interfaces available on your system
# and how to activate them. For more information, see interfaces(5).

# The loopback network interface
auto lo
iface lo inet loopback

# The primary network interface
auto eth0
iface eth0 inet static
  address $STATIC_IP
  netmask $STATIC_NETMASK
  gateway $STATIC_GATEWAY
  dns-nameservers $STATIC_DNS
EOL

         echo "Restarting networking"
         # Restart networking
         ifdown eth0 && ifup eth0
         echo "Networking setup complete..."
    fi

elif [ "$CONFIRM_STATIC" == "n" ]; then
    echo "Skipping static networking"
else
    echo "Invalid option. Skipping static networking"
fi


### PACKAGES ###

echo " ####### "
echo " This section will install additional packages"
echo " ####### "

read -p "Install additional packages? (y|n): " CONFIRM_PACKAGES

if [[ "$CONFIRM_PACKAGES" == "y" ]]; then

    read -p "What packages to install?: " PACKAGE_LIST

    PACKAGE_CONT=true
    while [[ $PACKAGE_CONT ]]; do
        read -p "Any more packages? (y|n): " IS_CONTINUE
        if [[ "$IS_CONTINUE" == "y" ]]; then
            unset $IS_CONTINUE
            read -p "Additional packages: " PACKAGE_ADD
            PACKAGE_LIST="$PACKAGE_LIST $PACKAGE_ADD"
        else
            echo "Finishing package installation"
            let PACKAGE_CONT=false
            break
        fi
    done

    PACKAGE_LIST="$PACKAGE_LIST linux-generic-lts-xenial"
    apt-get update
    apt-get upgrade -y
    apt-get install --install-recommends $PACKAGE_LIST -y
else
    echo "Skipping package installation"
fi

### FINISH UP ###
echo " ####### "
echo " Removing Extra Packages"
echo " ####### "

apt-get autoremove

echo " ####### "
echo " Syncing Time"
echo " ####### "

service ntp stop
ntpd -gq
service ntp start

echo " ####### "
echo " Setup finished. Removing script"
echo " ####### "

if [[ $1 != "soft" ]]; then
    rm $0
    shutdown -r now
fi