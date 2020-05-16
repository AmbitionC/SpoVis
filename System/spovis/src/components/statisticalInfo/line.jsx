import React, { Component } from 'react';
import CommonEcharts from '../commonECharts.jsx';
import Options from '../../chartConfigs/line.jsx';
import { Typography } from 'antd';

const { Text } = Typography;

class Line extends Component {
  render() {
    return (
      <React.Fragment>
        <CommonEcharts h='105px' option={Options()}/>
        <div className='bar-statistic-info'>
          <h5>{}</h5>
          <Text type="secondary">Number of Years: &nbsp;&emsp;&emsp; 13</Text>
          <br />
          <Text type="secondary">Maximum Value: &nbsp;&nbsp;&nbsp; 10461</Text>
          <br />
          <Text type="secondary">Mean Value: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 7134</Text>
          <br />
          <h5>{}</h5>
        </div>
      </React.Fragment>
    )
  }
}

export default Line;