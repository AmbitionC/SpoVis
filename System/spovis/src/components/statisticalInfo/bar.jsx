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
          <h5>{}</h5>
          <Text type="secondary">Quantity of Facilities: &emsp;&nbsp; 7</Text>
          <br />
          <Text type="secondary">Maximum Value: &emsp;&emsp;&nbsp; 252</Text>
          <br />
          <Text type="secondary">Mean Value: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 125</Text>
          <br />
          <h5>{}</h5>
        </div>
      </React.Fragment>
    )
  }
}

export default Bar;