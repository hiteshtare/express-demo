var express = require('express');//Express module
var app = express();//Initialize the app with express server

var mongoose = require('mongoose');

mongoose.connect('mongodb://hitesh:taylorgang99@ds145438.mlab.com:45438/addrmgmt');

var Schema = mongoose.Schema;

var personSchema = new Schema({
    firstName: String,
    lastName: String,
    address: String
});

var Person = mongoose.model('Person', personSchema);

var hitesh = Person({
    firstName: 'Hitesh',
    lastName: 'Tare',
    address: 'Mira Road',
});

hitesh.save(function (err) {
    if (err)
        throw err;

    console.log(`hitesh saved`);
});


var trupti = Person({
    firstName: 'Trupti',
    lastName: 'Tare',
    address: 'Mira Road',
});

trupti.save(function (err) {
    if (err)
        throw err;

    console.log(`trupti saved`);
});

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

    Person.find({}, function (err, users) {
        if (err)
            throw err;

        console.log(users);
    });

    next();
});

apiController(app);

htmlController(app);


app.listen(port);//Listening to port for incoming request
