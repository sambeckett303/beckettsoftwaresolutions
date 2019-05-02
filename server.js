// -----------------------------------------------
//               Define variables
// -----------------------------------------------

var express = require('express'),
	port = process.env.PORT || 8080,
	app = express();

// -----------------------------------------------
//               Configure Express
// -----------------------------------------------

app.set('port', port);
app.engine('html', require('ejs').renderFile);
app.use(express.static(__dirname + '/dist'));
app.set('views', './dist/views');


// -----------------------------------------------
//               Define Routes
// -----------------------------------------------

app.get('/', function (req, res) {
	res.render("index.html");
});

var server = app.listen(app.get('port'), function () {
  console.log('Server listening on port '+server.address().port);
});