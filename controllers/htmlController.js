var bodyParser = require('body-parser');//Reading the HTML body

// create application/x-www-form-urlencoded parser - Initialize parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

module.exports = function (app) {

    app.get('/', function (req, resp) {
        //resp.send('<html><head><link rel=stylesheet type=text/css href=assets/style.css><h2>Express Demo</h2></head></html>');
        resp.render('index');//View engine will fetch this file as mentioned & render it on browser.
    });

    app.get('/api', function (req, resp) {
        resp.send({ firstName: 'Sharda', lastName: 'Tare' });//Send JSON object to the browser.
    });

    app.get('/person/:id', function (req, resp) {
        //resp.send(`<html><head><h2>Person : ${req.params.id}</h2></head></html>`);

        //Fetch params 'ID' as well as query string 'QStr'
        resp.render('person', { ID: req.params.id, QStr: req.query.qstr });
    });


    //Using bodyParser body submitted is read for required values
    app.post('/person', urlencodedParser, function (req, resp) {
        resp.send('Thank you for Submission.');

        console.log(`Thank you for Submission.`);
        console.log(`First Name : ${req.body.firstName}`);
        console.log(`Last Name : ${req.body.lastName}`);
    });
}