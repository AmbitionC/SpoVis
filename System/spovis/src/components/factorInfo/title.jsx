import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

class Title extends Component {
  render() {
    return (
      <Card>
        <Card.Body>
          {this.props.title}
        </Card.Body>
      </Card>
    )
  }
}

export default Title