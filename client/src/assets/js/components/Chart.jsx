import React from 'react'
import * as d3 from 'd3'

let dimensions = {
  width: document.body.clientWidth,
  height: 600
}

class Chart extends React.Component {

  constructor() {
    super();
  }

  componentWillReceiveProps(nextProps) {
    this.redraw(nextProps.history);
  }

  redraw(data) {
    if (!data) return;

    let svg = d3.select('.chart')
        .attr('width', dimensions.width)
        .attr('height', dimensions.height);

    let y = d3.scaleLinear()
        .range([dimensions.height, 0])
        .domain([
          d3.max(data, function(d) { return parseFloat(d.price); }) + 1,
          d3.min(data, function(d) { return parseFloat(d.price); }) - 1
        ]);

    let barWidth = dimensions.width / data.length;

    let bar = svg.selectAll("g")
        .data(data)
        .enter().append("g")
        .attr('class', 'bar')
        .attr("transform", function(d, i) { return "translate(" + i * barWidth + ", 0)"; });

    bar.append("rect")
      .attr("y", function(d) { return y(parseFloat(d.price)); })
      .attr("height", function(d) { return dimensions.height - y(parseFloat(d.price)); })
      .attr("width", barWidth - 1);
  }

  render()  {
    return (
      <div className="chart-container">
        <svg className="chart"></svg>
      </div>
    )
  }
}

export default Chart

