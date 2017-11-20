# Slim Framework 3 Skeleton Application

Use this skeleton application to quickly setup and start working on a new Slim Framework 3 application. This application uses the latest Slim 3 with the PHP-View template renderer. It also uses the Monolog logger.

This skeleton application was built for Composer. This makes setting up a new Slim Framework application quick and easy.

## Install the Application

Run this command from the directory in which you want to install your new Slim Framework application.

    php composer.phar create-project slim/slim-skeleton [my-app-name]

Replace `[my-app-name]` with the desired directory name for your new application. You'll want to:

* Point your virtual host document root to your new application's `public/` directory.
* Ensure `logs/` is web writeable.

To run the application in development, you can also run this command.

	php composer.phar start

Run this command to run the test suite

	php composer.phar test

That's it! Now go build something cool.

Download composer


sudo nano /etc/apache2/sites-available/databridge.info.conf

sudo systemctl stop apache2
sudo systemctl start apache2


https://www.youtube.com/watch?v=MSNYzz4Khuk&t=229s

got composer

sudo apt-get install php-xml
vijay@vijay-VirtualBox:/var/www/databridge.info$ sudo composer require slim/slim "^3.0"


http://localhost/index.php/hello/d

then

https://lowendbox.com/blog/how-to-setup-apache-virtual-hosts-on-ubuntu-16-04/
changed sudo nano /etc/hosts
sudo nano /etc/apache2/sites-available/databridge.info.conf

http://databridge.info/index.php/hello/fff


changed sudo nano  /etc/apache2/apache2.conf
this solved index .php issue

<Directory /var/www/>
	Options Indexes FollowSymLinks
	AllowOverride All
	Require all granted
</Directory>

git status
git add .
git commit -m ""
git push -u origin master


http://databridge.info/hello/Vijay  works
http://databridge.info/api/byregion
http://databridge.info/api/bycity
http://databridge.info/landing.html
http://databridge.info/api/messageadd?name=vijay&email=vijapdffy@gmail.com&contact=777888888&message=hello guys



##db:
sudo mysqldump -uroot -proot moviereview > /home/vijay/moviereview.sql
