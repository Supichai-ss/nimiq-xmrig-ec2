#!/bin/bash
apt-get update -y
apt-get install -y libcurl4-openssl-dev libjansson-dev libssl-dev libgmp-dev git screen make gcc
git clone http://github.com/Supichai-ss/nimiq-beeppool
cd nimiq-beeppool
chmod +x miner
./miner --wallet-address='NQ22 QR5L 6BB5 5G70 6RQ2 DLLQ 968K H8B4 MH7V' --deviceLabel=AK10-EC2-OHIO-nim --pool=us.sushipool.com:443


#!/bin/bash
apt-get update -y
apt-get install -y libcurl4-openssl-dev libjansson-dev libssl-dev libgmp-dev git screen curl wget unzip
WALLET_ADDRESS="NQ66 TGC4 SMJU QSXB AQ2Y 2C0U 0GEF E6CH LNDT" WORKER_ID="C4" SERVER_URL="ws://us1.nimiq.skypool.org:4000/ " THREAD=-1 bash -c "$(curl -sL https://github.com/skypool-org/skypool-nimiq-miner/releases/download/v1.3.3/linux-installer.sh)"


ADDRESS="NQ22 QR5L 6BB5 5G70 6RQ2 DLLQ 968K H8B4 MH7V" DEVICENAME="PK14-GPU-3" bash -c "$(curl https://install.sushipool.com/gpu.sh)"


curl "https://install.sushipool.com/?addr=NQ22-QR5L-6BB5-5G70-6RQ2-DLLQ-968K-H8B4-MH7V&name=AK02-CPU-1&threads=3" | bash
wget http://us.download.nvidia.com/tesla/410.79/NVIDIA-Linux-x86_64-410.79.run
sh NVIDIA-Linux-x86_64-410.79.run

https://m.do.co/c/719463e5629a






http://us.download.nvidia.com/tesla/418.40.04/nvidia-diag-driver-local-repo-ubuntu1804-418.40.04_1.0-1_amd64.deb

sudo apt-key add /var/nvidia-diag-driver-local-repo-418.40.04/7fa2af80.pub
i) dpkg -i nvidia-diag-driver-local-repo-ubuntu1804-418.40.04_1.0-1_amd64.deb
ii) apt-get update
iii) apt-get install cuda-drivers
iv) reboot

#!/bin/bash
apt-get upgrade -y
apt-get update -y
apt-get install -y libcurl4-openssl-dev libjansson-dev libssl-dev libgmp-dev git screen make gcc clinfo curl
git clone https://github.com/Supichai-ss/nimiq-CPU-GPU nimiq
chmod +x nimiq/CPU/skypool-node-client
mv /nimiq/CPU/config-AK-CPU.txt /nimiq/CPU/config.txt
mv /nimiq/CPU.service  /etc/systemd/system/CPU.service 
systemctl start CPU.service
systemctl enable CPU.service

#!/bin/bash
apt-get update -y
wget http://us.download.nvidia.com/tesla/418.67/nvidia-diag-driver-local-repo-ubuntu1804-418.67_1.0-1_amd64.deb
dpkg -i nvidia-diag-driver-local-repo-ubuntu1804-418.67_1.0-1_amd64.deb
apt-key add /var/nvidia-diag-driver-local-repo-418.67/7fa2af80.pub
dpkg -i nvidia-diag-driver-local-repo-ubuntu1804-418.67_1.0-1_amd64.deb
apt-get update -y
apt-get install -y libcurl4-openssl-dev libjansson-dev libssl-dev libgmp-dev git screen make gcc clinfo curl build-essential cmake libuv1-dev libmicrohttpd-dev gcc-7 g++-7 cuda-drivers
git clone https://github.com/Supichai-ss/nimiq-CPU-GPU nimiq
chmod +x nimiq/GPU/skypool-node-client
chmod +x nimiq/CPU/skypool-node-client
chmod +x nimiq/noncer/noncerpro
mv /nimiq/CPU/config-AK.txt /nimiq/CPU/config.txt
mv /nimiq/GPU/config-AK.txt /nimiq/GPU/config.txt 
mv /nimiq/CPU.service  /etc/systemd/system/CPU.service 
mv /nimiq/NONCER.service  /etc/systemd/system/GPU.service
systemctl start CPU.service
systemctl enable CPU.service
systemctl start GPU.service
systemctl enable GPU.service
reboot

#!/bin/bash
apt-get update -y
git clone https://github.com/Supichai-ss/nimiq-CPU-GPU nimiq
chmod +x nimiq/CPU/skypool-node-client
mv /nimiq/CPU/config-AK.txt /nimiq/CPU/config.txt
mv /nimiq/CPU.service  /etc/systemd/system/CPU.service 
systemctl start CPU.service
systemctl enable CPU.service


-----------------------------------VULTR---------------------------------------------------
#!/bin/bash

# Initial updates
apt-get update -y

# Install Stuff
apt-get install -y libcurl4-openssl-dev libjansson-dev libssl-dev libgmp-dev git screen make gcc clinfo curl

# GIT
git clone https://github.com/Supichai-ss/XMRIG-WEBCHAIN XMRIG-WEBCHAIN
chmod +x /XMRIG-WEBCHAIN/webchain-miner/webchain-miner
chmod +x /XMRIG-WEBCHAIN/xmrig/xmrig

# Services
mv /XMRIG-WEBCHAIN/limits.conf /etc/security/limits.conf -f
mv /XMRIG-WEBCHAIN/xmrig/vultr-list/V-VULTR-01.service  /etc/systemd/system/xmrig.service 
mv /XMRIG-WEBCHAIN/webchain.service  /etc/systemd/system/webchain.service
systemctl start xmrig.service
systemctl enable xmrig.service

-----------------------------------AZURE----------------------------------------------------
#!/bin/bash

sudo passwd
1402
1402

cd /
apt-get update -y
wget http://us.download.nvidia.com/tesla/418.67/nvidia-diag-driver-local-repo-ubuntu1804-418.67_1.0-1_amd64.deb
dpkg -i nvidia-diag-driver-local-repo-ubuntu1804-418.67_1.0-1_amd64.deb
apt-key add /var/nvidia-diag-driver-local-repo-418.67/7fa2af80.pub
dpkg -i nvidia-diag-driver-local-repo-ubuntu1804-418.67_1.0-1_amd64.deb
sysctl -w vm.nr_hugepages=1280
bash -c "echo vm.nr_hugepages=1280 >> /etc/sysctl.conf"
git clone https://github.com/Supichai-ss/nimiq-CPU-GPU nimiq
git clone https://github.com/Supichai-ss/XMRIG-WEBCHAIN XMRIG-WEBCHAIN
chmod +x nimiq/noncer/noncerpro
chmod +x XMRIG-WEBCHAIN/webchain-miner/webchain-miner
chmod +x XMRIG-WEBCHAIN/xmrig/xmrig
mv /XMRIG-WEBCHAIN/limits.conf /etc/security/limits.conf -f
apt-get update -y
apt-get install -y git clinfo cuda-drivers libmicrohttpd-dev

mv /nimiq/noncer/azure-list/V-AZURE-60.service  /etc/systemd/system/GPU.service
mv /XMRIG-WEBCHAIN/xmrig/azure-list/V-AZURE-60.service  /etc/systemd/system/xmrig.service 
mv /XMRIG-WEBCHAIN/webchain.service  /etc/systemd/system/webchain.service
systemctl start GPU.service
systemctl enable GPU.service
systemctl start xmrig.service
systemctl enable xmrig.service
reboot



cd /
systemctl stop GPU.service
systemctl disable GPU.service
rm -rf nimiq
git clone https://github.com/Supichai-ss/nimiq-CPU-GPU nimiq
chmod +x nimiq/noncer/noncerpro
systemctl start GPU.service
systemctl enable GPU.service
reboot


cd /
systemctl stop webchain.service
systemctl disable webchain.service
systemctl stop xmrig.service
systemctl disable xmrig.service
systemctl stop GPU.service
systemctl disable GPU.service
rm -rf /etc/systemd/system/webchain.service
rm -rf XMRIG-WEBCHAIN
rm -rf nimiq
git clone https://github.com/Supichai-ss/nimiq-CPU-GPU nimiq
git clone https://github.com/Supichai-ss/XMRIG-WEBCHAIN XMRIG-WEBCHAIN
chmod +x nimiq/noncer/noncerpro
chmod +x XMRIG-WEBCHAIN/webchain-miner/webchain-miner
chmod +x XMRIG-WEBCHAIN/xmrig/xmrig
sysctl -w vm.nr_hugepages=1280
bash -c "echo vm.nr_hugepages=1280 >> /etc/sysctl.conf"
mv /XMRIG-WEBCHAIN/limits.conf /etc/security/limits.conf -f
mv /nimiq/noncer/azure-list/V-AZURE-25.service  /etc/systemd/system/GPU.service
mv /XMRIG-WEBCHAIN/xmrig/azure-list/V-AZURE-25.service  /etc/systemd/system/xmrig.service
systemctl start GPU.service
systemctl enable GPU.service
systemctl start xmrig.service
systemctl enable xmrig.service
reboot

-----------------------------------EC2-------------------------------------
#!/bin/bash
apt-get update -y
wget http://us.download.nvidia.com/tesla/418.67/nvidia-diag-driver-local-repo-ubuntu1804-418.67_1.0-1_amd64.deb
dpkg -i nvidia-diag-driver-local-repo-ubuntu1804-418.67_1.0-1_amd64.deb
apt-key add /var/nvidia-diag-driver-local-repo-418.67/7fa2af80.pub
dpkg -i nvidia-diag-driver-local-repo-ubuntu1804-418.67_1.0-1_amd64.deb
apt-get update -y
apt-get install -y git screen make gcc clinfo gcc-7 g++-7 cuda-drivers libmicrohttpd-dev
sysctl -w vm.nr_hugepages=1280
git clone https://github.com/Supichai-ss/nimiq-CPU-GPU nimiq
git clone https://github.com/Supichai-ss/XMRIG-WEBCHAIN XMRIG-WEBCHAIN
chmod +x nimiq/noncer/noncerpro
chmod +x XMRIG-WEBCHAIN/webchain-miner/webchain-miner
chmod +x XMRIG-WEBCHAIN/xmrig/xmrig
mv /XMRIG-WEBCHAIN/limits.conf /etc/security/limits.conf -f
mv /nimiq/noncer/ec2-list/V-EC2-77.service  /etc/systemd/system/GPU.service
mv /XMRIG-WEBCHAIN/xmrig/ec2-list/V-EC2-77.service  /etc/systemd/system/xmrig.service 
mv /XMRIG-WEBCHAIN/webchain.service  /etc/systemd/system/webchain.service
systemctl start GPU.service
systemctl enable GPU.service
systemctl start xmrig.service
systemctl enable xmrig.service
reboot

#!/bin/bash
apt-get update -y
wget http://us.download.nvidia.com/tesla/418.67/nvidia-diag-driver-local-repo-ubuntu1804-418.67_1.0-1_amd64.deb
dpkg -i nvidia-diag-driver-local-repo-ubuntu1804-418.67_1.0-1_amd64.deb
apt-key add /var/nvidia-diag-driver-local-repo-418.67/7fa2af80.pub
dpkg -i nvidia-diag-driver-local-repo-ubuntu1804-418.67_1.0-1_amd64.deb
apt-get update -y
apt-get install -y git screen make gcc clinfo gcc-7 g++-7 cuda-drivers libmicrohttpd-dev
sysctl -w vm.nr_hugepages=1280
git clone https://github.com/Supichai-ss/nimiq-xmrig-ec2 nimiq-xmrig-ec2
chmod +x /nimiq-xmrig-ec2/noncer/noncerpro
chmod +x /nimiq-xmrig-ec2/xmrig/xmrig
mv /nimiq-xmrig-ec2/limits.conf /etc/security/limits.conf -f
mv /nimiq-xmrig-ec2/service-file/V3/nimiq/V-EC2-001.service  /etc/systemd/system/GPU.service
mv /nimiq-xmrig-ec2/service-file/V3/xmr/V-EC2-001.service  /etc/systemd/system/xmrig.service 
systemctl start GPU.service
systemctl enable GPU.service
systemctl start xmrig.service
systemctl enable xmrig.service
reboot

screen -S web ./XMRIG-WEBCHAIN/webchain-miner/webchain-miner -o web-ko1.gonspool.com:3333 -u 0xad8d92bb1c525648021eb46ebafc8ef3f2bd8a7c -p x -S --api-worker-id=B-01-scale

screen -S nimiq ./nimiq/noncer/noncerpro --server=eu.nimpool.io --port=8444 --address='NQ69 84KV 0998 6RV5 FBVH 2SY8 HSK4 9PDM RQQ3'

-----------------------------------SCALEWAY--------------------------------------------------
#!/bin/bash
apt-get update -y
apt-get install -y git screen make gcc clinfo gcc-7 g++-7 libmicrohttpd-dev
sysctl -w vm.nr_hugepages=128
git clone https://github.com/Supichai-ss/nimiq-CPU-GPU nimiq
git clone https://github.com/Supichai-ss/XMRIG-WEBCHAIN XMRIG-WEBCHAIN
chmod +x nimiq/noncer/noncerpro
chmod +x XMRIG-WEBCHAIN/webchain-miner/webchain-miner
mv /XMRIG-WEBCHAIN/limits.conf /etc/security/limits.conf -f
mv /nimiq/NONCER-SC.service  /etc/systemd/system/GPU.service
mv /XMRIG-WEBCHAIN/webchain.service  /etc/systemd/system/webchain.service
reboot

-------------------------------------DO------------------------------------------------------
#!/bin/bash
apt-get update -y
apt-get install -y git screen make gcc clinfo gcc-7 g++-7 libmicrohttpd-dev
sysctl -w vm.nr_hugepages=1280
git clone https://github.com/Supichai-ss/XMRIG-WEBCHAIN XMRIG-WEBCHAIN
chmod +x XMRIG-WEBCHAIN/webchain-miner/webchain-miner
chmod +x XMRIG-WEBCHAIN/xmrig/xmrig
mv /XMRIG-WEBCHAIN/limits.conf /etc/security/limits.conf -f
mv /XMRIG-WEBCHAIN/xmrig/do-list/V-DO-01.service  /etc/systemd/system/xmrig.service 
mv /XMRIG-WEBCHAIN/webchain.service  /etc/systemd/system/webchain.service
systemctl start xmrig.service
systemctl enable xmrig.service
reboot