import React, { Component } from 'react';
import { Divider } from 'antd';
import SliderStep from './sliderStep.jsx';
import Radar from './radar.jsx';

class MacroPlanning extends Component {
  render() {
    return (
      <div className='macroController'>
        <Divider>Macro Planning Factors</Divider>
        <h5>Desity of population:</h5>
        <SliderStep />
        <h5>Costs of construction:</h5>
        <SliderStep />
        <h5>Competitive coefficient:</h5>
        <SliderStep />
        <h5>Traffic:</h5>
        <SliderStep />
        <Radar />
      </div>
    )
  }
}

export default MacroPlanning;