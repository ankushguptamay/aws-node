1. pem
2. ssh
3. sudo apt-get update

<!-- Node download -->

4. curl -sL https://deb.nodesource.com/setup_18.x | sudo -E bash -
5. sudo apt install nodejs
6. node --version

<!-- Clone -->

7. git clone https://github.com/ankushguptamay/aws-node.git

<!-- Install dependency -->

sudo npm i pm2 -g
pm2 start index.js

<!-- Other pm2 commands -->

pm2 show app
pm2 status
pm2 restart index.js
pm2 stop app
pm2 logs (Show log stream)
pm2 flush (Clear logs)

<!-- To make sure app starts when reboot -->

pm2 startup ubuntu

<!-- Open env file -->

env -0 | sort -z | tr '\0' '\n

<!-- set env credentials -->

export PORT=8080

<!-- update env file -->

pm2 restart index.js --update-env

<!-- Set up firewall -->

sudo ufw enable
sudo ufw status
sudo ufw allow ssh (Port 22)
sudo ufw allow http (Port 80)
sudo ufw allow https (Port 443)

<!-- install nginx -->

sudo apt install nginx
vim etc/nginx/sites-available/default <!-- For View -->
sudo nginx
sudo nano /etc/nginx/sites-available/default <!-- For Any update, ctrl + O save update, ctrl + X exit--> 
sudo nginx -s reload
sudo nginx -t

<!-- Add the following to the location part of the server block -->

    server_name yourdomain.com www.yourdomain.com;

    location / {
        proxy_pass http://localhost:8001; #whatever port your app runs on
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }

<!-- Add SSL with LetsEncrypt -->

sudo add-apt-repository ppa:certbot/certbot 
sudo apt-get update
sudo apt-get install python3-certbot-nginx
sudo certbot --nginx -d lakshadweeptravelers.com -d www.lakshadweeptravelers.com 
sudo certbot renew --dry-run <!-- For renew certificate in 90 days -->


<!-- Links -->
For more lookat "https://youtu.be/ofBFl4M4BFk?si=9ZVIzj_Xa7Zt24dY"
"https://gist.github.com/piyushgarg-dev/8b14c87c8ff4d626ecbc747b6b9fc57f#file-nginx_aws-md"
