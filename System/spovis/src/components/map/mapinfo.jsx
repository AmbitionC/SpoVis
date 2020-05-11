export default function() {
  const mapInfo = [
    {
      //水文信息
      'featureType': 'water',
      'elementType': 'all',
      'stylers': {
        'color': '#C4E1FF',
      }
    }, {
      //陆地
      'featureType': 'land',
      'elementType': 'all',
      'stylers': {
          'color': '#f3f3f3'
      }
    }, {
      //铁路
      'featureType': 'railway',
      'elementType': 'all',
      'stylers': {
          'visibility': 'off'
      }
    }, {
      //大公路
      'featureType': 'highway',
      'elementType': 'all',
      'stylers': {
          'color': '#d5d5d5'
      }
    }, {
      //大公路标记
      'featureType': 'highway',
      'elementType': 'labels',
      'stylers': {
          'visibility': 'off'
      }
    }, {
      //马路线边缘
      'featureType': 'arterial',
      'elementType': 'geometry',
      'stylers': {
          'color': '#c1c1c1'
      }
    }, {
      //马路线
      'featureType': 'arterial',
      'elementType': 'geometry.fill',
      'stylers': {
          'color': '#d5d5d5'
      }
    }, {
      //地图上建筑标记
      'featureType': 'poi',
      'elementType': 'all',
      'stylers': {
          'visibility': 'off'
      }
    }, {
      //绿化地区
      'featureType': 'green',
      'elementType': 'all',
      'stylers': {
          'visibility': 'on'
      }
    }, {
      //地铁
      'featureType': 'subway',
      'elementType': 'all',
      'stylers': {
          'visibility': 'off'
      }
    }, {
      //人造建筑
      'featureType': 'manmade',
      'elementType': 'all',
      'stylers': {
          'color': '#d1d1d1'
      }
    }, {
      //步行小路
      'featureType': 'local',
      'elementType': 'all',
      'stylers': {
          'color': '#eaeaea'
      }
    }, {
      //马路标记
      'featureType': 'arterial',
      'elementType': 'labels',
      'stylers': {
          'visibility': 'off'
      }
    }, {
      //省、国家边境线
      'featureType': 'boundary',
      'elementType': 'all',
      'stylers': {
          'color': '#fefefe'
      }
    }, {
      //小型建筑
      'featureType': 'building',
      'elementType': 'all',
      'stylers': {
          'color': '#d1d1d1'
      }
    }, {
      //地图标记文本颜色
      'featureType': 'label',
      'elementType': 'labels.text.fill',
      'stylers': {
          'visibility': 'off'
          // 'color': '#999999'
      }
    }, {
      //地图标记文本颜色
      'featureType': 'district',
      'elementType': 'labels.text.stroke',
      'stylers': {
          'color': '#99999900'
      }
    }
  ];
  return mapInfo;
}