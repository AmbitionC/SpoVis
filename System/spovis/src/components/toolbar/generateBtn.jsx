import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Divider } from 'antd';

class GenerateBtn extends Component {
  render() {
    return (
      <div className='generateBtn'>
        <Divider>Generate Solution</Divider>
        <Button variant="secondary" size="sm" block>
          Generate Solution
        </Button>
      </div>
    )
  }
}

export default GenerateBtn;