import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class CreateChart extends Component {
  render() {
    return (
      <div className='creatChart'>
        <Button variant="secondary" size="sm" block>
          生成数据配置
        </Button>
      </div>
    )
  }
}

export default CreateChart;