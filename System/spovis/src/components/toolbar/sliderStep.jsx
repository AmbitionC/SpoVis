import React, { Component } from 'react';
import { Slider, InputNumber, Row, Col } from 'antd';

class SliderStep extends Component {
  state = {
    inputValue: 0,
  };

  onChange = value => {
    if (isNaN(value)) {
      return;
    }
    this.setState({
      inputValue: value,
    });
  };

  render() {
    const { inputValue } = this.state;
    return (
      <Row>
        <Col span={14}>
          <Slider
            min={0}
            max={1}
            onChange={this.onChange}
            value={typeof inputValue === 'number' ? inputValue : 0}
            step={0.05}
          />
        </Col>
        <Col span={1}>
          <InputNumber
            min={0}
            max={1}
            style={{ margin: '0 3px'}}
            step={0.05}
            value={inputValue}
            onChange={this.onChange}
          />
        </Col>
      </Row>
    );
  }
}

export default SliderStep;