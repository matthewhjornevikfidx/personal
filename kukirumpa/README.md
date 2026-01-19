# Kukirumpa

A stunning modern landing page with Node.js + Express.

## Quick Start (Local)

```bash
npm install
npm start
# Open http://localhost:80
```

## AWS EC2 Deploy

1. Push this repo to GitHub
2. Launch EC2 (Amazon Linux 2023 or Ubuntu)
3. Security Group: Allow HTTP (port 80)
4. User Data:

```bash
#!/bin/bash
cd /home/ec2-user || cd /home/ubuntu || cd /root
curl -fsSL https://rpm.nodesource.com/setup_20.x | bash - 2>/dev/null || \
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
yum install -y nodejs 2>/dev/null || apt-get install -y nodejs
git clone https://github.com/matthewhjornevikfidx/personal.git
cd personal/kukirumpa
npm install
npm start
```

5. Visit `http://YOUR_EC2_IP`

## Structure

```
kukirumpa/
├── server.js          # Express server
├── package.json
└── public/
    ├── index.html
    ├── css/style.css
    └── js/main.js
```
