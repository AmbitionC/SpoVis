// Chart Config for Single Chart
export default function() {
  const option = {
    xAxis: {
      type: 'category',
      data: ['Gym', 'Table tennis', 'BadMinton', 'Billiard', 'Volleyball', 'Basketball Court', 'Pool']
    },
    yAxis: {
      show: false,
    },
    grid: [{
      x: '5%', y: '0%', width: '90%', height: '80%'
    }],
    series: [{
      data: [192, 54, 252, 76, 38, 234, 27],
      type: 'bar',
      itemStyle: {
        color: '#F6CECE'
      },
      showBackground: true,
    }]
  };
  return option;
}