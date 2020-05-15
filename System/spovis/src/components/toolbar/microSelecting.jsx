import React, { Component } from 'react';
import { Divider } from 'antd';
import SliderStep from './sliderStep.jsx';

class MicroSelecting extends Component {
  render() {
    return (
      <div className='macroController'>
        <Divider>Micro Selecting Factors</Divider>
        <h5>Centroids of population:</h5>
        <SliderStep />
        <h5>POIs of city:</h5>
        <SliderStep />
        <h5>Competitive Facilities:</h5>
        <SliderStep />
      </div>
    )
  }
}

export default MicroSelecting;