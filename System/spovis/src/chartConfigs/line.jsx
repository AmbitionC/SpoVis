// Chart Config for Single Chart
export default function() {
  const option = {
    xAxis: {
      type: 'category',
      data: [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013],
    },
    yAxis: {
      show: false,
    },
    grid: [{
      x: '5%', y: '2%', width: '90%', height: '80%'
    }],
    series: [{
      data: [5122, 14722, 26053, 13649, 23203, 36506, 25576, 41654, 100461, 49068, 55047, 34048, 92387, 83340],
      type: 'line',
      showBackground: true,
      itemStyle: {
        color: '#2E9AFE'
      }
    }]
  };
  return option;
}