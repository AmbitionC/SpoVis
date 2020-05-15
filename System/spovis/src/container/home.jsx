import React, { Component } from 'react';
import ToolBar from './toolBar.jsx';
import HeatMap from '../components/map/heatMap.jsx';
import MapArea from '../components/map/bmap.jsx';
import DistributionMap from '../components/map/distributionMap.jsx';
import VisualizationMap from '../components/map/visualizationMap.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/main.css';

class Main extends Component {
  render() {
    return (
      <React.Fragment>
        <div className='row'>
          <div className='col-12 col-lg-2'>
            <ToolBar />
          </div>
          <div className='col-12 col-lg-3'>
            <HeatMap />
            <DistributionMap />
          </div>
          <div className='col-12 col-lg-3'>
            <MapArea />
            <VisualizationMap />
          </div>
          <div className='col-12 col-lg-6'>
            {/* <MapArea /> */}
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Main;