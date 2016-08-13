var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var fs = require('fs');
var request = require('request');
var PORT = process.env.PORT || 8000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));



app.get('/:path', (req, res) => {
	var path = req.params.path;
	request({
		url: path,
		method: "GET",
		headers: {
			"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36",
			"Host": "www.411.com"
		}
	}, (err, result) => {
		if(err) return res.json(err);
		res.json(result);
	})
})


app.listen(PORT, function() {
	console.log("Server listening on PORT: " + PORT);
});