import React from 'react';
import { Card } from 'react-bootstrap';
import CommonEcharts from '../components/commonECharts.jsx';

export default function() {
    return (
      <Card>
        <Card.Header>
          <h4>多视图协同可视化区域2</h4>
        </Card.Header>
        <Card.Body>
          <CommonEcharts h='257px'/>
        </Card.Body>
      </Card>
    )
}
