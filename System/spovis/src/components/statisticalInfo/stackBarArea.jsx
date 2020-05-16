import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import StackBar from './stackBar.jsx';
import Buttons from './buttons.jsx';

class StackBarArea extends Component {
  render() {
    return (
      <Card>
        <Card.Body>
          <StackBar />
          <Buttons />
        </Card.Body>
      </Card>
    )
  }
}

export default StackBarArea;