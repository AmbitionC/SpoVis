import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

export default class Buttons extends Component {
  render() {
    return (
      <div className='bar-statistic-btn' >
        <div className='row'>
          <div className='col-12 col-lg-6'>
            <Button variant="info" size="sm">&nbsp;&nbsp;Details&nbsp;&nbsp;</Button>
          </div>
          <div className='col-12 col-lg-6'>
            <Button variant="danger" size="sm">&nbsp;&nbsp;&nbsp;Delete&nbsp;&nbsp;</Button>
          </div>
        </div>
      </div>
    )
  }
}