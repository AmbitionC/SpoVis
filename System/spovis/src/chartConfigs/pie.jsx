// Chart Config for Single Chart
export default function() {
  const option = {
    grid: [{
      x: '1%', y: '2%', width: '95%', height: '80%'
    }],
    series: [
      {
        type: 'pie',
        radius: '90%',
        data: [
          {value: 335, 
            itemStyle: {
              color: '#F7BE81'
            }
          },
          {value: 310, 
            itemStyle: {
              color: '#81BEF7'
            }
          },
          {value: 234, 
            itemStyle: {
              color: '#A4A4A4'
            }
          },
          {value: 135, 
            itemStyle: {
              color: '#A9F5A9'
            }
          },
          {value: 548, 
            itemStyle: {
              color: '#F5A9A9'
            }
          }
        ],
        labelLine: {
          show: false,
        }
      }
    ]
  };
  return option;
}