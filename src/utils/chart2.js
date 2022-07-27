const echarts = require('echarts')

var myChart = echarts.init(document.getElementById('chart2'))
window.onresize = function() {
  myChart.resize()
}
