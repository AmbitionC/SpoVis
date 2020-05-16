import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import BarArea from '../components/statisticalInfo/barArea.jsx';

class StatisticalInfo extends Component {
  render() {
    return (
      <Card>
        <Card.Header>
          <h4>Statistical Information Area</h4>
        </Card.Header>
        <Card.Body>
          <div className='row'>
            <div className='col-12 col-lg-3'>
              <BarArea />
            </div>
          </div>
        </Card.Body>
      </Card>
    )
  }
}

export default StatisticalInfo;