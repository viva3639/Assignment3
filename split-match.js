#!/usr/bin/env node
var fs = require('fs');
var stream = require('stream');
var program = require('commander');
 
program
  .version('0.0.1')
  .option('-p, --pattern [type]', 'Add-pattern [ptn] ', 'ptn')
  .parse(process.argv);


var symb = program.pattern;
if (symb === "." || symb === ",") {
	var file = fs.readFileSync("input-sensor.txt");
	var str = file.toString().trim();
	console.log("----------------Input----------------");
	console.log(str);

	var arr = str.split(symb+" ");
	var last = arr[arr.length-1];
	if( last[last.length-1] === symb ){
		arr[arr.length-1] = last.replace(symb, "");
	} else {
		arr.pop();
	}

	console.log("----------------OutPut----------------");
	console.log(arr);	
}


