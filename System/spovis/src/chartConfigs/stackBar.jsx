// Chart Config for Single Chart
export default function() {
  const option = {
    grid: [{
      x: '15%', y: '5%', width: '90%', height: '90%'
    }],
    xAxis: {
      type: 'value',
      show: false,
    },
    yAxis: {
      type: 'category',
      data: ['Equipments', 'Gym', 'Courts', 'Stadium'],
      axisLabel: {
          show: false
      }
    },
    series: [
      {
        name: 'Equipments',
        type: 'bar',
        stack: '总量',
        data: [334, 390, 330, 320],
        itemStyle: {
          color: '#F7BE81'
        }
      },
      {
        name: 'Gym',
        type: 'bar',
        stack: '总量',
        data: [134, 90, 230, 210],
        itemStyle: {
          color: '#81BEF7'
        }
      },
      {
        name: 'Courts',
        type: 'bar',
        stack: '总量',
        data: [234, 290, 330, 310],
        itemStyle: {
          color: '#A4A4A4'
        }
      },
    ]
  };
  return option;
}