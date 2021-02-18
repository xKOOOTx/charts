(function () {
  class Grafico {
    constructor(type, data, title, width, height, colors, radius, innerRadius) {
      this.paramType = type;
      this.data = data;
      this.title = title;
      this.width = width;
      this.height = height;
    }

    createChart() {
      if (this.paramType === "pie") {
        return this.createPieChart();
      } else if (this.paramType === "bar") {
        return this.createBarChart();
      }
    }

    createBarChart() {
      var barctx = document.getElementById(this.paramType).getContext("2d");
      var myArr = [];
      var maximumValue = 0;

      this.data.forEach(({ openedPositions, closedPositions, stack }) => {
        if (openedPositions > closedPositions && openedPositions > maximumValue)
          maximumValue = openedPositions;
        else if (
          closedPositions > openedPositions &&
          closedPositions > maximumValue
        )
          maximumValue = closedPositions;
        let a = {
          label: ["Opened"],
          data: [openedPositions],
          stack: stack,
          backgroundColor: "#9E9E9E",
        };
        let b = {
          label: ["Closed"],
          data: [-closedPositions],
          stack: stack,
          backgroundColor: "#B6000E",
        };
        myArr.push(a);
        myArr.push(b);
      });
      console.log("mydata:", myArr);

      return new Chart(barctx, {
        type: this.paramType,
        title: this.title,
        data: {
          labels: ["2013             2014             2015              2016"],
          datasets: myArr,
          barPercentage: 0.57,
        },
        defaults: {},
        options: {
          defaultFontFamily: "inherit",
          responsive: false,
          legend: {
            display: false,
          },
          tooltips: {
            callbacks: {
              title: function (title, data) {
                return "";
              },
              label: function (label, penis) {
                let openClos = "opened";
                let finalValue = label.yLabel;
                if (label.yLabel < 0) {
                  openClos = "closed";
                  finalValue = -label.yLabel;
                }
                return `${finalValue} ${openClos} positions`;
              },
            },
          },
          scales: {
            xAxes: [
              {
                stacked: true,
                barPercentage: 0.66,
                maxBarThickness: 10,
                categoryPercentage: 0.94,
                gridLines: {
                  display: true,
                  drawOnChartArea: false,
                },
              },
            ],
            yAxes: [
              {
                stacked: true,
                gridLines: {
                  display: true,
                  drawOnChartArea: false,
                },

                ticks: {
                  max: maximumValue,
                  stepSize: maximumValue / 3,
                  maxTicksLimit: 7,
                  beginAtZero: true,
                  min: -maximumValue,
                  callback: function (label, index, labels) {
                    switch (label) {
                      case 2 * (maximumValue / 3):
                        return undefined;
                      case -2 * (maximumValue / 3):
                        return undefined;
                      case 0:
                        return "—";
                        break;
                      default:
                        return label;
                    }
                  },
                },
              },
            ],
          },
        },
      });
    }
    createPieChart() {
      console.log(document.getElementById(this.paramType));

      var ctx = document.getElementById(this.paramType).getContext("2d");
      return new Chart(ctx, {
        type: this.paramType,
        title: this.title,
        data: {
          labels: Object.keys(this.data),
          datasets: [
            {
              label: "# of Votes",
              data: Object.values(this.data),
              borderWidth: 1,
            },
          ],
        },
        options: {
          plugins: {
            colorschemes: {
              scheme: "office.Adjacency6",
              //https://nagix.github.io/chartjs-plugin-colorschemes/colorchart.html
              //https://github.com/nagix/chartjs-plugin-colorschemes
            },
          },
        },
      });
    }
  }

  var ChartOneInstance = new Grafico(
    "pie",
    pieDataObject,
    "Anthony's pie chart sample Data"
  );
  var ChartTwoInstance = new Grafico(
    "bar",
      barChartData,
    "Anthony's bar chart sample Data"
  );
  var newObj = ChartTwoInstance.createChart();
  console.log("newObj", newObj);

  ChartOneInstance.createChart();
  ChartTwoInstance.createChart();
})();
