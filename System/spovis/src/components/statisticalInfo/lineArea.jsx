import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import Line from './line.jsx';
import Buttons from './buttons.jsx';

class LineArea extends Component {
  render() {
    return (
      <Card>
        <Card.Body>
          <Line />
          <Buttons />
        </Card.Body>
      </Card>
    )
  }
}

export default LineArea;