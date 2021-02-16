(function () {
  class Grafico {
    constructor(type, data, width, height, colors, radius, innerRadius) {
      this.paramType = type;
      this.type = this.getType();
      this.whereTo = this.selectDivToInsert();
      this.data = data;
      this.width = width ? width : 400;
      this.height = height ? height : 400;
      this.colors = colors ? colors : d3.scale.category20c();
      this.radius = radius ? radius : 200;
      this.innerRadius = innerRadius ? innerRadius : 100;
      this.arc = this.determineArc();
    }

    selectDivToInsert() {
      return document.querySelector("." + this.type);
    }

    determineArc() {
      return d3.svg.arc().outerRadius(radius);
    }

    getType() {
      console.log("d3", d3.layout);
      var pie = d3.layout.pie().value(function (d) {
        return d.value;
      });
      if (this.paramType === "pie") {
        return pie;
      }
    }

    determineMyChart() {
      return d3
        .select(this.whereTo)
        .append("svg")
        .attr("width", this.width)
        .attr("height", this.height)
        .append("g")
        .attr(
          "transform",
          "translate(" +
            (this.width - this.radius) +
            ", " +
            (this.height - this.radius) +
            ")"
        )
        .selectAll("path")
        .data(pie(this.data))
        .enter()
        .append("g")
        .attr("class", "slice");
    }

    determineSlices() {
      return d3
        .selectAll("g.slice")
        .append("path")
        .attr("fill", function (d, i) {
          return colors(i);
        })
        .attr("d", determineArc())
        .transition()
        .ease("elastic")
        .duration(2000)
        .attrTween("d", tweenPie);
    }

    tweenPie(b) {
      var i = d3.interpolate(
        { startAngle: 1.1 * Math.PI, endAngle: 1.1 * Math.PI },
        b
      );
      return function (t) {
        return arc(i(t));
      };
    }
  }
  var pieData = [
    { label: "part one", value: 50 },
    { label: "part two", value: 25 },
    { label: "part three", value: 10 },
  ];

  var buildChart = new Grafico("pie", pieData);
  buildChart.tweenPie();
})();
