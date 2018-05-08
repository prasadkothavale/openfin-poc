# OpenFin POC

A OpenFin Node.js app using Express 4 to demonstrate OpenFin features.
Follow one of the two options `Deploying to Heroku` or `Running Locally` to run the POC.

## 1. Deploying to Heroku

Application is deployed at https://open-fin-deep-linking-example.herokuapp.com/ you can use existing or deploy new.

Make sure you have [Heroku CLI](https://cli.heroku.com/) installed

```sh
$ heroku create
$ git push heroku master
$ heroku open
```
or

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

### Run it in OpenFin

```sh
$ npm install -g openfin-cli
$ openfin --launch --config https://open-fin-deep-linking-example.herokuapp.com/app.json
```

## 2. Running Locally

Find IP address of your machine which should be accessible from other machine
```sh
$ ipconfig
```

Install dependencies. Make sure you have [Node.js](http://nodejs.org/) installed.
```sh
$ npm install
$ npm start
```

Your app should now be running on [localhost:9070](http://localhost:9070/). It is recommended to use IP address as server will be accessed by external machine. Eg: http://192.168.0.1:9070.
Replace url with port number by your IP address in `public/app.json` > `startup_app.url`

### Run it in OpenFin

```sh
$ npm install -g openfin-cli
$ openfin --launch --config http://localhost:9070/app.json
```
