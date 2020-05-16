import React, { Component } from 'react';
import CommonEcharts from '../commonECharts.jsx';
import { Card } from 'react-bootstrap';
import echarts from 'echarts';
import dataTool from 'echarts/extension/dataTool';

class BoxPlot extends Component {
  render() {
    const original_data = [
      [850, 740, 900, 1070, 930, 850, 950, 980, 980, 880, 1000, 980, 930, 650, 760, 810, 1000, 1000, 960, 960],
      [960, 940, 960, 940, 880, 800, 850, 880, 900, 840, 830, 790, 810, 880, 880, 830, 800, 790, 760, 800],
      [880, 880, 880, 860, 720, 720, 620, 860, 970, 950, 880, 910, 850, 870, 840, 840, 850, 840, 840, 840],
      [890, 810, 810, 820, 800, 770, 760, 740, 750, 760, 910, 920, 890, 860, 880, 720, 840, 850, 850, 780],
      [890, 840, 780, 810, 760, 810, 790, 810, 820, 850, 870, 870, 810, 740, 810, 940, 950, 800, 810, 870]
    ]
    let data = echarts.dataTool.prepareBoxplotData([original_data[this.props.index]], {
      layout: 'vertical'
    });

    const option = {
      grid: [{
        x: '-25%', y: '6%', width: '100%', height: '90%'
      }],
      yAxis: {
        type: 'category',
        data: data.axisData,
        show: false,
      },
      xAxis: {
        type: 'value',
        show: false,
      },
      series: [
        {
          name: 'boxplot',
          type: 'boxplot',
          data: data.boxData,
          itemStyle: {
            color: '#D8D8D8',
            borderColor: '#F5BCA9',
          }
        },
        {
          name: 'outlier',
          type: 'scatter',
          data: data.outliers,
          symbolSize: 5,
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

export default BoxPlot;