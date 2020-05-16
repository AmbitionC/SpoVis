import React, { Component } from 'react';
import { Scene, Marker } from '@antv/l7';
import { GaodeMap } from '@antv/l7-maps';
import { Chart } from '@antv/g2';
import { DataView } from '@antv/data-set';
import { Card } from 'react-bootstrap';
import VisualBar from './dataset/visualBar';
import VisualBox from './dataset/visualBox';

class VisualizationMap extends Component {
  componentDidMount() {
    const dataSource = VisualBar();
    const colors = ["#33B5E5","#0099CC","#AA66CC","#9933CC","#99CC00","#669900","#FFBB33","#FF8800","#FF4444","#CC0000"];
    const scene = new Scene({
      id: 'visualMap',
      logoVisible: false,
      map: new GaodeMap({
        showLabel: false,
        style: 'light',
        center: [ 120.444965, 31.517457 ],
        pitch: 0,
        zoom: 11
      })
    });
    scene.on('loaded', () => {
      addChart();
      addBox();
      scene.render();
    });

    function addBox() {
      const el = document.createElement('div');
      const data = VisualBox();
      const coordinates = [120.474965, 31.447457];
      const dv = new DataView().source(data);

      dv.transform({
        type: 'map',
        callback: (obj) => {
          obj.range = [obj.low, obj.q1, obj.median, obj.q3, obj.high];
          return obj;
        },
      });

      const chart = new Chart({
        container: el,
        width: 120,
        height: 120,
        render: 'svg',
        padding: 0,
      });

      chart.source(dv);

      chart.coord('polar', {
        radius: 0.9,
        innerRadius: 0.1
      });

      chart.legend(false);

      chart.axis('direction', {
        label: false
      })

      chart.axis('range', {
        label: false
      })

      chart
        .schema()
        .position('direction*range')
        .shape('box')
        .size(10)
        .color('direction')

      chart.render();

      const marker = new Marker({
        element: el
      }).setLnglat({
        lng: coordinates[0],
        lat: coordinates[1]
      });
      scene.addMarker(marker);
    }

    function addChart() {
      // const colorMap = ['#FF7575', 'gray', '#93FF93', '#D3A4FF', '#FFE66F'];
      dataSource.forEach(item => {
        const el = document.createElement('div');
        const chart = new Chart({
          container: el,
          width: 120,
          height: 120,
          render: 'svg',
          padding: 0
        });
        chart.source(item.occupied);
        chart.coord('polar', {
          radius: 0.85
        }); 
        chart.legend({
          position: 'bottom',
          useHtml: true,
          offset: 30,
        });
        chart.axis('direction', {
          label: false
        })
        chart.axis('value', {
          label: false,
          tickLine: null,
          line: {
            stroke: '#E9E9E9',
            lineDash: [ 3, 3 ]
          },
          grid: {
            line: {
              lineDash: [ 0, 0 ]
            }
          }// 设置坐标系栅格样式
        });
        chart
          .intervalStack()
          .position('direction*value')
          .color('level', colors)
          .size(20)
          .opacity(0.6);
        chart.legend(false)
        chart.render();

        const marker = new Marker({
          element: el
        }).setLnglat({
          lng: item.coordinates[0],
          lat: item.coordinates[1]
        });
        scene.addMarker(marker);
      })
    }
  }

  render() {
    return (
      <Card>
        <Card.Body>
          <div id='visualMap' style={{height: '320px'}}></div>
        </Card.Body>
      </Card>
    )
  }
}

export default VisualizationMap;