module.exports = function (app) {

    app.get('/api/person/:id', function (req, resp) {
        //Get the data from database
        resp.json({ firstName: 'Hitesh', lastName: 'Tare' });//Send JSON object to the browser.
    });


    app.post('/api/person/', function (req, resp) {
        //Save the data into database
    });

    app.delete('/api/person/:id', function (req, resp) {
        //Delete from the database
    });

}