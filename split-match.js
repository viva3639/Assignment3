#!/usr/bin/env node
var fs = require('fs')
var http = require('http')

var data = fs.readFileSync('./input-sensor.txt')

console.log("Test 3")

function onRequest(request, response){
	response.writeHead(200, {"Content-type":"text"})
	response.write(data)
	response.write("\n\nNext line\n")
	response.write(data)
	response.end();
}

http.createServer(onRequest).listen(8888)
