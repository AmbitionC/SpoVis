import React, { Component } from 'react';
import CommonEcharts from '../commonECharts.jsx';
import Options from '../../chartConfigs/bar.jsx';
import { Typography } from 'antd';

const { Text } = Typography;

class Bar extends Component {
  render() {
    return (
      <React.Fragment>
        <CommonEcharts h='105px' option={Options()}/>
        <div className='bar-statistic-info'>
          <Text type="secondary">Quantity of Facilities: &nbsp;&nbsp; x</Text>
          <br />
          <Text type="secondary">Minimum Value: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; x</Text>
          <br />
          <Text type="secondary">Mean Value: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; x</Text>
          <br />
        </div>
        
      </React.Fragment>
    )
  }
}

export default Bar;