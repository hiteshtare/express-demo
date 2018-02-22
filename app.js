var express = require('express');//Express module
var app = express();//Initialize the app with express server

var apiController = require('./controllers/apiController');
var htmlController = require('./controllers/htmlController');


//Default look for Environment Variables for PORT or assigned '3000'
var port = process.env.PORT || 3000;//Setting up the Port for Hosting on Server

//Hosting static files such as css,html,images etc.Replaces html 'href' tag with string mentioned
app.use('/assets', express.static(`${__dirname}/public/`));

//Setting up the view engine for HTML pages. Using view engine for Dynamic DOM mainupulation
app.set('view engine', 'ejs');//By default view engine will look for files with 'ejs' as extension


//This funtion will get executed everytime then using 'next', appropriate request will be Routed 
app.use('/', function (req, resp, next) {
    console.log('Request URL - Middleware');
    next();
});

apiController(app);

htmlController(app);


app.listen(port);//Listening to port for incoming request
