// 'use strict';
//
// const fs = require('fs');
//
// let rawdata = fs.readFileSync('barChartData.json');
// let newBarChartData = JSON.parse(rawdata);
//
// let response = fetch('barChartData.json');
//
// let json = JSON.parse(response);
//
// console.log(json);

const url = 'https://xkoootx.github.io/charts//barChartData.json'
fetch(url)
    .then(response => response.json())
    .then(oldBarChartData => newBarChartData.unshift(oldBarChartData))

console.log(newBarChartData);



