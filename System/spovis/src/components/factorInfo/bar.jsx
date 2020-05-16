import React, { Component } from 'react';
import CommonEcharts from '../commonECharts.jsx';
import { Card } from 'react-bootstrap';

class Bar extends Component {
  render() {
    const option = {
      grid: [{
        x: '5%', y: '6%', width: '90%', height: '90%'
      }],
      xAxis: {
        type: 'value',
        show: false,
        max: 100
      },
      yAxis: {
        type: 'category',
        show: false,
      },
      series: [
        {
          name: 'Equipments',
          type: 'bar',
          data: [this.props.value],
          itemStyle: {
            color: '#81BEF7'
          }
        }
      ]
    };
    return (
      <Card>
        <Card.Body>
          <CommonEcharts h='20px' option={option} />
        </Card.Body>
      </Card>
    )
  }
}

export default Bar;