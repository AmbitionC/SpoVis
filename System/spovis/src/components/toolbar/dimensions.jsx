import React, { Component } from 'react';
import { ListGroup } from 'react-bootstrap';

class Dimension extends Component {
  render() {
    return (
      <div className='dimension'>
        <h4>数据维度选择:</h4>
        <h5></h5>
        <ListGroup>
          <ListGroup.Item>频谱数据维度A</ListGroup.Item>
          <ListGroup.Item>频谱数据维度B</ListGroup.Item>
          <ListGroup.Item>频谱数据维度C</ListGroup.Item>
          <ListGroup.Item disabled>频谱数据维度D</ListGroup.Item>
          <ListGroup.Item disabled>More...</ListGroup.Item>
        </ListGroup>
      </div>
    )
  }
}

export default Dimension;