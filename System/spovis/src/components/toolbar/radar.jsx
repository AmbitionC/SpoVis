import React from 'react';
import CommonEcharts from '../commonECharts.jsx';
import Config from '../../chartConfigs/radar.jsx';

export default function() {
  const options = Config();
  return (
    <CommonEcharts h='220px' option={options} />
  )
}