var data = Array();
var data2 = Array();

for(var i=-5;i<6;i++){
    data.push(''+i);
    data2.push((i*i)-10*Math.cos(2*Math.PI*i)+10);
}
console.log(data2)
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawVisualization);

function drawVisualization() {
    var datax = google.visualization.arrayToDataTable([
        ['Arg', 'Val'],
        [data[0],data2[0]],
        [data[1],data2[1]],
        [data[2],data2[2]],
        [data[3],data2[3]],
        [data[4],data2[4]],
        [data[5],data2[5]],
        [data[6],data2[6]],
        [data[7],data2[7]],
        [data[8],data2[8]],
        [data[9],data2[9]],
        [data[10],data2[10]]]);

    var wrapper = new google.visualization.ChartWrapper({
      chartType: 'LineChart',
      dataTable: datax,
      options: {'title': 'funkcja1', 'curvetype': 'function', 'legend': {'position': 'bottom'}},
      containerId: 'AnimationCanvas'
    });
    wrapper.draw();
  }
