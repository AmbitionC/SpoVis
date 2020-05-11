import React from 'react';
import { Card } from 'react-bootstrap';
import CommonEcharts from '../components/commonECharts.jsx';
import Config3_4 from '../chartConfigs/pic3_4.jsx'

export default function() {
  const options = Config3_4();
    return (
      <Card>
        <Card.Header>
          <h4>多视图协同可视化区域</h4>
        </Card.Header>
        <Card.Body>
          <CommonEcharts h='350px'/>
          {/* <CommonEcharts option={options} h='800px'/> */}
        </Card.Body>
      </Card>
    )
}
