var http = require('http');
var bufferBodyResponse = [];

/*var options = {
	hostName: 'localhost',
	port: 80,
	path: '/',
	method: 'post',
	headers: {
		'Accept': 'application/json',
		'Content-type': 'application/json'
	}
};*/

//Post
/*var options = {
	hostName: 'localhost',
	port: 80,
	path: '/',
	method: 'post',
	headers: {
		'Accept': 'application/json',
		'Content-type': 'application/x-www-form-urlencoded'
	}
};*/

//Get
var options = {
	hostName: 'localhost',
	port: 80,
	path: '/test',
	headers: {
		Accept: 'application/json',
		'Content-type': 'application/json'
	}
};

//Get
/*
var options = {
	hostName: 'localhost',
	port: 80,
	path: '/',
	headers: {Accept: 'text/html'}
};
*/

///////////////////////////////////////
//Content-Type (x-www-form-urlencoded)
var html = 'name=Joseph';
var json = {name: 'Joseph'};
var stringJson = JSON.stringify(json);

//Get
http.get(options, function(res){	

	res.on('data', function(chunk){
		bufferBodyResponse.push(chunk);

	});

	res.on('end', function(){
		var bodyResponse = Buffer.concat(bufferBodyResponse).toString();
		console.log(bodyResponse);
		console.log(res.statusCode);
	});

});

//Post
/*var req = http.request(options, function(res){	

	res.on('data', function(chunk){
		bufferBodyResponse.push(chunk);

	});

	res.on('end', function(){
		var bodyResponse = Buffer.concat(bufferBodyResponse).toString();
		console.log(bodyResponse);
	});

});*/

//Send body via post (html)
//req.write(html);

//Send body via post (json)
//req.write(stringJson);

//Send request
//req.end();

//Error Codes
//Class 2: Success
//Class 3: Client must take an action (redirect)
//Class 4: Client made a mistake
//Class 5: Error in server