import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import Pie from './pie.jsx';
import Buttons from './buttons.jsx';

class PieArea extends Component {
  render() {
    return (
      <Card>
        <Card.Body>
          <Pie />
          <Buttons />
        </Card.Body>
      </Card>
    )
  }
}

export default PieArea;