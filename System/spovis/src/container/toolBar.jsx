import React from 'react';
import { Card } from 'react-bootstrap';
import Upload from '../components/toolbar/upload.jsx';
import Dimension from '../components/toolbar/dimensions.jsx';
import SortConfig from '../components/toolbar/sortConfig.jsx';
import StatisticArea from '../components/toolbar/statisticArea.jsx';
import CreateChart from '../components/toolbar/createChart.jsx';

export default function() {
  return (
    <Card>
      <Card.Header>
        <h4>SpoVis Controllersll</h4>
      </Card.Header>
      <Card.Body>
        <Upload />
        <Dimension />
        <SortConfig />
        <StatisticArea />
        <CreateChart />
      </Card.Body>
    </Card>
  )
}