import React, { Component } from 'react';
import HeatMap from '../components/map/heatMap.jsx';
import MapArea from '../components/map/bmap.jsx';
import DistributionMap from '../components/map/distributionMap.jsx';
import VisualizationMap from '../components/map/visualizationMap.jsx';

class Map extends Component {
  render() {
    return (
      <React.Fragment>
        <div className='row'>
          <div className='col-12 col-lg-6'>
            <HeatMap />
            <DistributionMap />
          </div>
          <div className='col-12 col-lg-6'>
            <MapArea />
            <VisualizationMap />
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Map;