# django-reactjs-boilerplate
Django as backend and ReactJS as front end.

## Getting Started
Check the `package.json` file to check some versions of dependencies. 
We are using
```
Please use npm version that is >= 3.0.0 and < 5.0.0
Much better install node.js version 5.11.1
ReactJS 16 is not working on latest version of node.js

Django 1.11
ReactJS version 16.4.1
react-hot-loader is working.
```
### Installing
Make sure you already installed virtual environment for django in your computer.
```
git clone https://github.com/frumsy/django-reactjs-boilerplate.git
cd django-reactjs-boilerplate
virtualenv environment
source environment/bin/activate
pip install -r requirements.txt
npm install
#Your environment is now setup

#you may want to make migration before running the server
python manage.py makemigrations

#and don't forget to actually migrate
python manage.py migrate

#now to run the actual server do:
python manage.py runserver

#To get wolfpack up and running with hot reload we need to:
# open another terminal

# activate your virtualenv
source environment/bin/activate

#run the node server
node server.js

open to your browser: 127.0.0.1:8000/
```

Read more on this blog post:
<br/>
http://owaislone.org/blog/webpack-plus-reactjs-and-django/
<br/>
References:
<br/>
https://github.com/owais/django-webpack-loader
<br/>
https://github.com/naomigrace/django-react-webpack
<br/>
https://github.com/mbrochh/django-reactjs-boilerplate
