// Chart Config for Controller
export default function() {
  const config = {
    backgroundColor: 'white',
    radar: {
      name: {
        textStyle: {
          color: 'gray',
          borderRadius: 3,
          padding: [3, 5]
        },
        fontSize: 9,
      },
      nameGap: 2,
      indicator: [
        { name: 'Density', max: 0.7},
        { name: 'Cost', max: 0.7},
        { name: 'Competitive coefficient', max: 0.7},
        { name: 'Traffic', max: 0.7},
      ]
    },
    series: [{
      id: 'a',
      type: 'radar',
      areaStyle: {normal: {
        color: 'gray'
      }},
      symbolSize: 10,
      data: [
        {
          value: [0.2, 0.3, 0.4, 0.1],
        }
      ]
    }]
  }
  return config;
}