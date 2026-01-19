#!/bin/bash
# Kukirumpa EC2 User Data - Just clone and run!

cd /home/ec2-user || cd /home/ubuntu || cd /root

# Install Node.js
curl -fsSL https://rpm.nodesource.com/setup_20.x | bash - 2>/dev/null || \
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
yum install -y nodejs 2>/dev/null || apt-get install -y nodejs

# Clone and run
git clone https://github.com/matthewhjornevikfidx/personal.git
cd personal/kukirumpa
npm install
npm start
