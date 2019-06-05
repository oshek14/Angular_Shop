Product Shop Implementation On Latest Angular And Firebase 
=============================================================

How does it work?
----------------
If the website doesn't work, Let me know. It might be due to hosting - money problem.

You can login with google, add item to cart, view cart, proceed to checkout, provide your credentials. Last step on checkout where you have to click 'final buy' button is not implemented. My google account is super admin, which means I'm the one who adds/edits/deletes products, reviews customer's bought items, so your google account will not be able to see admin features.

This is written by using best practices. It's modular, flexible and architecture is split pretty well.

Docker
======

If you want to use docker (which is a great way to just run the website). you can clone the repository and build the image from the root directory. It uses nginx, so make sure to bind whatever host port you want to 80 Port on the container.

docker build -t angularshop . && docker run -p 4200:80 -d angularshop
