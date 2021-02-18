var pieDataObject = {
  Realestate: 18.05,
  Utilities: 22.33,
  Materials: 3.97,
  Healthcare: 19.24,
  Finance: 5.11,
  Energy: 11.74,
  Industrials: 3.01,
  "Consumer Discretionary": 11.13,
  Other: (
    100 -
    18.05 -
    22.33 -
    3.97 -
    19.24 -
    5.11 -
    11.74 -
    3.01 -
    11.13
  ).toFixed(2),
};

// const newBarChartData = [];
// console.log(newBarChartData);
var barChartData = [
  {
    period: "autumn 2013",
    openedPositions: 550,
    closedPositions: 740,
    stack: "2013a",
  },
  {
    period: "winter 2013",
    openedPositions: 680,
    closedPositions: 300,
    stack: "2013b",
  },
  {
    period: "spring 2013",
    openedPositions: 1200,
    closedPositions: 50,
    stack: "2013c",
  },
  {
    period: "summer 2013",
    openedPositions: 1500,
    closedPositions: 210,
    stack: "2013d",
  },
  {
    period: "autumn 2014",
    openedPositions: 1100,
    closedPositions: 350,
    stack: "2014a",
  },
  {
    period: "winter 2014",
    openedPositions: 800,
    closedPositions: 600,
    stack: "2014b",
  },
  {
    period: "spring 2014",
    openedPositions: 650,
    closedPositions: 350,
    stack: "2014c",
  },
  {
    period: "summer 2014",
    openedPositions: 940,
    closedPositions: 485,
    stack: "2014d",
  },
  {
    period: "autumn 2015",
    openedPositions: 1100,
    closedPositions: 700,
    stack: "2015a",
  },
  {
    period: "winter 2015",
    openedPositions: 830,
    closedPositions: 1050,
    stack: "2015b",
  },
  {
    period: "spring 2015",
    openedPositions: 650,
    closedPositions: 1520,
    stack: "2015c",
  },
  {
    period: "summer 2015",
    openedPositions: 450,
    closedPositions: 1680,
    stack: "2015d",
  },
  {
    period: "autumn 2016",
    openedPositions: 500,
    closedPositions: 500,
    stack: "2016a",
  },
  {
    period: "winter 2016",
    openedPositions: 420,
    closedPositions: 380,
    stack: "2016b",
  },
  {
    period: "spring 2016",
    openedPositions: 800,
    closedPositions: 650,
    stack: "2016c",
  },
  {
    period: "summer 2016",
    openedPositions: 900,
    closedPositions: 1000,
    stack: "2016d",
  },
];
