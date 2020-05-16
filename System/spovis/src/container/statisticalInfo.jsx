import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import { Button } from 'antd';
import BarArea from '../components/statisticalInfo/barArea.jsx';
import LineArea from '../components/statisticalInfo/lineArea.jsx';
import StackBarArea from '../components/statisticalInfo/stackBarArea.jsx';
import PieArea from '../components/statisticalInfo/pieArea.jsx';

class StatisticalInfo extends Component {
  render() {
    return (
      <Card>
        <Card.Header>
          <h4>Statistical Information Area</h4>
          <Button icon="double-right" />
        </Card.Header>
        <Card.Body>
          <div className='row'>
            <div className='col-12 col-lg-3'>
              <BarArea />
            </div>
            <div className='col-12 col-lg-3'>
              <LineArea />
            </div>
            <div className='col-12 col-lg-3'>
              <StackBarArea />
            </div>
            <div className='col-12 col-lg-3'>
              <PieArea />
            </div>
          </div>
        </Card.Body>
      </Card>
    )
  }
}

export default StatisticalInfo;