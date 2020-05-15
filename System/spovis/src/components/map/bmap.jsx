import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import MapInfo from './dataset/mapinfo.jsx';
import Districts from './dataset/districts.jsx';

class MapArea extends Component {
  componentDidMount() {
    // 百度地图API功能
    const { BMap, BMAP_ANCHOR_BOTTOM_LEFT } = window;

    var map = new BMap.Map("districtsMap");    // 创建Map实例
    map.centerAndZoom(new BMap.Point(120.444965, 31.517457), 12);  // 初始化地图,设置中心点坐标和地图级别

    map.setCurrentCity("无锡");          // 设置地图显示的城市 此项是必须设置的

    map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
    // map.enableContinuousZoom(true);    //启用地图惯性拖拽，默认禁用

    // map.addControl(new BMap.NavigationControl());  //添加默认缩放平移控件
    map.addControl(new BMap.ScaleControl({ anchor: BMAP_ANCHOR_BOTTOM_LEFT })); //向地图中添加比例尺控件

    var polygons = [];
    
    function getBoundary() {

      let areas = Districts();

      let colors = ["#F75000", "#FF9D6F", "#FF8040", "#088A08", "#5FB404", "#FF8040", "#0B6121", "#FF9D6F", "#F75000", "#FF8040", "#5FB404", "#0B6121", "#FF9D6F", "#0B6121", "#0B6121", "#0B6121", "#FF8040", "#5FB404", "#FF8040", "#088A08", "#FF9D6F", "#088A08", "#5FB404", "#5FB404", "#FF9D6F", "#FF9D6F", "#FF9D6F", "#FF8040"];

      var pointArray = [];
      for (var i = 0; i < areas.length; i++) {
        var ply = new BMap.Polygon(areas[i], { strokeWeight: 2, strokeColor: "gray" }); //建立多边形覆盖物
        ply.setFillColor(colors[i])   //设置多边形的填充颜色
        ply.setFillOpacity(0.8); 

        polygons.push(ply);  //加入多边形数组，以之后获取多边形边界点集

        map.addOverlay(ply);  //添加覆盖物
        pointArray = pointArray.concat(ply.getPath());
      }
      // map.setViewport(pointArray);    //调整视野 
    }

    setTimeout(function () {
      getBoundary();
    }, 2000);
    map.setMapStyle({styleJson: MapInfo()})
  }

  render() {
    return (
      <Card>
        <Card.Body>
          <div id="districtsMap" style={{top: '10px', height: '300px'}}></div>
        </Card.Body>
      </Card>
    )
  }
}

export default MapArea;