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

const url = 'https://xkoootx.github.io/charts/barChartData.json'
let newBarChartData = fetch(url)
    .then(response => response.json())
    .then(json => console.log(json))


