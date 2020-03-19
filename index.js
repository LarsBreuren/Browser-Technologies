// Require third-party modules
const express = require('express');
const bodyParser = require("body-parser");

const port = process.env.PORT || 3000

// Create new express app in 'app'
const app = express();
// Link the templating engine to the express app
app.set('view engine', 'ejs');
// Tell the views engine/ejs where the template files are stored (Settingname, value)
app.set('views', 'views');

// Tell express to use a 'static' folder
// If the url matches a file it will send that file
// Sending something (responding) ends the response cycle
app.use(express.static(__dirname + '/public'));

// Create a home route
app.get('/', function (req, res) {
	res.render('index');
});

// Actually set up the server
app.listen(port, function () {
	console.log(`Application started on port: ${port}`);
});

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded());

// Use body parser
app.use(bodyParser.json());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

// Access the parse results as request.body
app.post('/', function(request, res){
	// response.send(request.body.user.color);
	let color = request.body.user.color;
	let text = request.body.user.text;
	console.log('De gewenste kleur is: ' + color);

	res.render('shirt', {
		kleur: color,
		text: text,
	});	

});