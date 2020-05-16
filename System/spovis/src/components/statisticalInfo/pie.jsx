import React, { Component } from 'react';
import CommonEcharts from '../commonECharts.jsx';
import Options from '../../chartConfigs/pie.jsx';
import { Typography } from 'antd';

const { Text } = Typography;

class Pie extends Component {
  render() {
    return (
      <React.Fragment>
        <CommonEcharts h='105px' option={Options()}/>
        <div className='bar-statistic-info'>
          <h5>{}</h5>
          <Text type="secondary">Quantity of Facilities: &emsp;&nbsp; 5</Text>
          <br />
          <Text type="secondary">Minimum Value: &emsp;&emsp;&nbsp;&nbsp; 135</Text>
          <br />
          <Text type="secondary">Maximum Value: &emsp;&emsp;&nbsp; 548</Text>
          <br />
          <h5>{}</h5>
        </div>
      </React.Fragment>
    )
  }
}

export default Pie;