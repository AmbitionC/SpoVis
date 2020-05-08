// Description: The Visual Component for pic3_1
// Reference: https://g2.antv.vision/zh/examples/facet/facet#list

import React, { Component } from 'react';
import G2 from '@antv/g2';

import { requestAPI } from '../global/url.jsx';

function config() {
  requestAPI('pic3_1').then(data => {
    const chart = new G2.Chart({
      container: 'pic3_1',
      height: 500,
      width: 800,
      padding: [ 30, 90, 80, 80 ]
    });
    chart.source(data, {
      carat: {
        sync: true
      },
      price: {
        sync: true
      },
      cut: {
        sync: true
      }
    });
    chart.facet('list', {
      fields: [ 'cut' ],
      cols: 3, // 超过3个换行
      padding: 30,
      eachView(view) {
        view.point()
          .position('carat*price')
          .color('cut')
          .shape('circle')
          .opacity(0.3)
          .size(3);
      }
    });
    chart.render();
  })
}

class Pic31 extends Component {
  componentDidMount() {
    config();
  }

  render() {
    return (
      <div id='pic3_1'></div>
    )
  }
}

export default Pic31