import React, { Component } from 'react';
import Pic34 from '../charts/pic3_4.jsx';
import ToolBar from './toolBar.jsx';
import MapArea from '../components/map/bmap.jsx';

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
          <div className='col-12 col-lg-7'>
            <MapArea />
            {/* <Pic34 /> */}
          </div>
          {/* <div className='col-12 col-lg-4'>
            <Pic34 />
          </div> */}
        </div>
      </React.Fragment>
    )
  }
}

export default Main;