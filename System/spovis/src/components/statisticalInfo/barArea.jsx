import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import Bar from './bar.jsx';
import Buttons from './buttons.jsx';

class BarArea extends Component {
  render() {
    return (
      <Card>
        <Card.Body>
          <Bar />
          <Buttons />
        </Card.Body>
      </Card>
    )
  }
}

export default BarArea;