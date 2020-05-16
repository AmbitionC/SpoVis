import React from 'react';
import { Card } from 'react-bootstrap';
import CommonEcharts from '../../components/commonECharts.jsx';
import Options from '../../chartConfigs/gymTopology.jsx'

export default function() {
    return (
      <Card>
        <Card.Body>
          <CommonEcharts h='306px' option={Options()}/>
        </Card.Body>
      </Card>
    )
}
