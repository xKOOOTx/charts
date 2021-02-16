// 'use strict';
//
// const fs = require('fs');
//
// let rawdata = fs.readFileSync('barChartData.json');
// let newBarChartData = JSON.parse(rawdata);

let response = fetch('barChartData.json');

let json = JSON.parse(response);

console.log(json);
