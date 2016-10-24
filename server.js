// server.js


// grab depedencies
var express = require("express");
var bodyParser = require("body-parser");
var app = express();


// cconfigure the app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// set the routes
var routes = require("./routes/routes.js")(app);


// start the API server
var server = app.listen(3000, function () {
    console.log("Listening on port %s...", server.address().port);
});
