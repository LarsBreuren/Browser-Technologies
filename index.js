// Require third-party modules
const express = require('express');
const bodyParser = require("body-parser");
const uniqid = require('uniqid');
const fs = require('file-system');

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
app.use(express.urlencoded({ extended: true }))

// Use body parser
app.use(bodyParser.json());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

// Access the parse results as request.body
app.post('/', function(request, res){
    let color = request.body.user.color;
    let text = request.body.user.text;
    let textColor = request.body.text.color;
    let search_id = uniqid();

    res.render('saved', {
        kleur: color,
        text: text,
        textColor: textColor,
        id: search_id,
    });    

    let object = {color: request.body.user.color, text: request.body.user.text, textColor: request.body.text.color };

    fs.readFile('shirts/shirts.json', function (err, data) { // read to edit
        let shirts = JSON.parse(data);
        shirts[search_id] = object; // Add new design

        fs.writeFile('shirts/shirts.json', JSON.stringify(shirts)); // write to json
    });

});

app.post('/read', function (request, res) {
    fs.readFile('shirts/shirts.json', 'utf8', function readFileCallback(err, data){
        if (err){
           console.log("error?");
           return;
        }
        let shirts = JSON.parse(data);
		let search_id = request.body.user.id;
		
		let color = shirts[search_id].color
        let text = shirts[search_id].text
        let textColor = shirts[search_id].textColor

        if(shirts.hasOwnProperty(search_id)){
			console.log("Shirt bestaat!");
			res.render('saved', {
				kleur: color,
                text: text,
                textColor: textColor,
                id: search_id,
			});   
	
        }else{
            console.log("Shirt niet gevonden!");
        }
    });
});

app.post('/edit', function (request, res) {
    fs.readFile('shirts/shirts.json', 'utf8', function readFileCallback(err, data){
        if (err){
           console.log("error?");
           return;
        }
        let shirt = JSON.parse(data);
        let search_id = request.body.user.id;
        let color = request.body.user.color;
        let text = request.body.user.text;
        let textColor = request.body.text.color;
        
            res.render('saved', {
                kleur: color,
                text: text,
                textColor: textColor,
                id: search_id,
            });   
           shirt[search_id]["color"] = color;
           shirt[search_id]["text"] = text;
           shirt[search_id]["textColor"] = textColor;
    
           fs.writeFile('shirts/shirts.json', JSON.stringify(shirt)); // write to json

    });
});