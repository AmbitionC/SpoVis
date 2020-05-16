import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import MapInfo from './dataset/mapinfo.jsx';
import HeatPoints from './dataset/heatPoints.jsx';

class HeatMap extends Component {
  componentDidMount() {
    // 百度地图API功能
    const { BMap, BMAP_ANCHOR_BOTTOM_LEFT, BMapLib } = window;

    var map = new BMap.Map("heatMap");    // 创建Map实例
    map.centerAndZoom(new BMap.Point(120.444965, 31.517457), 12);  // 初始化地图,设置中心点坐标和地图级别

    map.setCurrentCity("无锡");          // 设置地图显示的城市 此项是必须设置的

    map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放

    map.addControl(new BMap.ScaleControl({ anchor: BMAP_ANCHOR_BOTTOM_LEFT })); //向地图中添加比例尺控件

    map.setMapStyle({styleJson: MapInfo()})

    // 做出城市边界
    let polygons = []

    function getBoundary() {
      let city = "120.560737,31.482395;120.559407,31.488919;120.550755,31.493499;120.539414,31.496604;120.534447,31.50393;120.52879,31.50992;120.526503,31.510699;120.524165,31.518623;120.530259,31.520217;120.528148,31.524504;120.528763,31.526393;120.532044,31.529791;120.529873,31.532907;120.523077,31.535871;120.520063,31.536885;120.515289,31.540234;120.51153,31.544976;120.508116,31.550838;120.509091,31.558556;120.499981,31.562265;120.493344,31.562879;120.486708,31.565237;120.479082,31.567475;120.473127,31.572565;120.470493,31.572451;120.4645,31.570666;120.458614,31.572763;120.453918,31.578906;120.441706,31.5819;120.428812,31.58574;120.422386,31.586682;120.400243,31.581993;120.401848,31.572696;120.391736,31.579261;120.383401,31.581612;120.375738,31.579173;120.373024,31.576374;120.365071,31.575004;120.356792,31.573092;120.353758,31.574905;120.350755,31.581369;120.348834,31.58075;120.347156,31.580674;120.345405,31.579306;120.344092,31.580056;120.343371,31.580295;120.341565,31.580252;120.340562,31.582146;120.339285,31.583443;120.338042,31.584651;120.335888,31.585543;120.335287,31.585122;120.334192,31.584243;120.329657,31.583906;120.329001,31.584407;120.328032,31.584524;120.327691,31.585216;120.326061,31.586836;120.324666,31.586164;120.324286,31.585425;120.32206,31.587192;120.320482,31.586157;120.319359,31.58525;120.31894,31.582515;120.318497,31.579207;120.318886,31.576625;120.31861,31.573701;120.318662,31.570753;120.320098,31.569377;120.321709,31.567224;120.322369,31.56611;120.323493,31.565223;120.324881,31.565329;120.325477,31.564577;120.32739,31.564179;120.328498,31.564889;120.330194,31.565251;120.33146,31.563699;120.331706,31.5628;120.333023,31.562911;120.336054,31.56322;120.339771,31.56295;120.341311,31.561899;120.34395,31.558424;120.348305,31.552575;120.344368,31.549326;120.34309,31.547844;120.343927,31.546581;120.345201,31.54207;120.3486,31.538925;120.353155,31.534671;120.369051,31.519894;120.363602,31.516211;120.35674,31.513828;120.359031,31.504374;120.361496,31.495438;120.363385,31.484375;120.364957,31.47304;120.365877,31.469151;120.381755,31.465647;120.384663,31.471081;120.390251,31.469798;120.396559,31.466684;120.399773,31.464974;120.401563,31.463831;120.405722,31.460886;120.407812,31.459585;120.411975,31.455383;120.412515,31.450028;120.431642,31.454301;120.436118,31.45114;120.443246,31.447593;120.438496,31.454192;120.461619,31.451775;120.487694,31.455598;120.496876,31.453805;120.502415,31.455219;120.5053,31.460804;120.515291,31.463661;120.522927,31.462688;120.522313,31.468162;120.532819,31.473745;120.543116,31.47352;120.5521,31.477829;120.559089,31.481875;"
      let areas = [city]
      let pointArray = [];
      for (var i = 0; i < areas.length; i++) {
        var ply = new BMap.Polygon(areas[i], { strokeWeight: 3, strokeColor: "gray" }); //建立多边形覆盖物
        ply.setFillColor('gray')   //设置多边形的填充颜色
        ply.setFillOpacity(0.01); 

        polygons.push(ply);  //加入多边形数组，以之后获取多边形边界点集

        map.addOverlay(ply);  //添加覆盖物
        pointArray = pointArray.concat(ply.getPath());
      }
    }

    setTimeout(function () {
      getBoundary();
    }, 1000);

    const points = HeatPoints();

    let heatmapOverlay = new BMapLib.HeatmapOverlay({"radius": 7});
    map.addOverlay(heatmapOverlay);
    heatmapOverlay.setDataSet({data:points, max:130});
    setGradient();

    heatmapOverlay.show();
    
    function setGradient(){
      let gradient = {
        0:'#FE9A2E',
        0.5:'#FE642E',
        1:'#8A0808'
      };
      let colors = document.querySelectorAll("input[type='color']");
      colors = [].slice.call(colors,0);
      colors.forEach(function(ele){
        gradient[ele.getAttribute("data-key")] = ele.value; 
      });
      heatmapOverlay.setOptions({"gradient":gradient});
    }

  }

  render() {
    return (
      <Card>
        <Card.Body>
          <div id="heatMap" style={{top: '10px', height: '310px'}}></div>
        </Card.Body>
      </Card>
    )
  }
}

export default HeatMap;