import React, { Component } from 'react';
import CommonEcharts from '../commonECharts.jsx';
import Options from '../../chartConfigs/stackBar.jsx';
import { Typography } from 'antd';

const { Text } = Typography;

class StackBar extends Component {
  render() {
    return (
      <React.Fragment>
        <CommonEcharts h='105px' option={Options()}/>
        <div className='bar-statistic-info'>
          <h5>{}</h5>
          <Text type="secondary">Type of Facilities: &emsp;&emsp;&emsp; 4</Text>
          <br />
          <Text type="secondary">Maximum Value: &emsp;&emsp; 47%</Text>
          <br />
          <Text type="secondary">Mean Value: &emsp;&emsp;&emsp;&emsp; 32%</Text>
          <br />
          <h5>{}</h5>
        </div>
      </React.Fragment>
    )
  }
}

export default StackBar;