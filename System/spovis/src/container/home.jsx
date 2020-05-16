import React, { Component } from 'react';
import ToolBar from './toolBar.jsx';
import Map from './map.jsx';
import Topology from './topology.jsx';
import StatisticalInfo from './statisticalInfo.jsx';
import FactorsInfo from './factorsInfo.jsx';


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
          <div className='col-12 col-lg-10'>
            <div className='row'>
              <div className='col-12 col-lg-8'>
                <Map />
              </div>
              <div className='col-12 col-lg-4'>
                <Topology />
              </div>
            </div>
            <div className='row'>
              <div className='col-12 col-lg-7'>
                <StatisticalInfo />
              </div>
              <div className='col-12 col-lg-5'>
                <FactorsInfo />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Main;