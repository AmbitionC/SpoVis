import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import Gym from '../components/topology/gyms.jsx';
import Instruments from '../components/topology/instruments.jsx';


class Topology extends Component {
  render() {
    return (
      <Card>
        <Card.Body>
          <div className='row'>
            <div className='col-12 col-lg-12'>
              <Gym />
            </div>
            <div className='col-12 col-lg-12'>
              <Instruments />
            </div>
          </div>
        </Card.Body>
      </Card>
    )
  }
}

export default Topology;