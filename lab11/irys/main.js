const TESTER = document.getElementById('AnimationCanvas');
const trace1 = {
  mode: 'markers',
  name: 'Iris-setosa',
  type: 'scatter3d',
  x: [
    5.1,
    4.9,
    4.7,
    4.6,
    5.0,
    5.4,
    4.6,
    5.0,
    4.4,
    4.9,
    5.4,
    4.8,
    4.8,
    4.3,
    5.8,
    5.7,
    5.4,
    5.1,
    5.7,
    5.1,
    5.4,
    5.1,
    4.6,
    5.1,
    4.8,
    5.0,
    5.0,
    5.2,
    5.2,
    4.7,
    4.8,
    5.4,
    5.2,
    5.5,
    4.9,
    5.0,
    5.5,
    4.9,
    4.4,
    5.1,
    5.0,
    4.5,
    4.4,
    5.0,
    5.1,
    4.8,
    5.1,
    4.6,
    5.3,
    5.0,
  ],
  y: [
    3.5,
    3.0,
    3.2,
    3.1,
    3.6,
    3.9,
    3.4,
    3.4,
    2.9,
    3.1,
    3.7,
    3.4,
    3.0,
    3.0,
    4.0,
    4.4,
    3.9,
    3.5,
    3.8,
    3.8,
    3.4,
    3.7,
    3.6,
    3.3,
    3.4,
    3.0,
    3.4,
    3.5,
    3.4,
    3.2,
    3.1,
    3.4,
    4.1,
    4.2,
    3.1,
    3.2,
    3.5,
    3.1,
    3.0,
    3.4,
    3.5,
    2.3,
    3.2,
    3.5,
    3.8,
    3.0,
    3.8,
    3.2,
    3.7,
    3.3,
  ],
  z: [
    1.4,
    1.4,
    1.3,
    1.5,
    1.4,
    1.7,
    1.4,
    1.5,
    1.4,
    1.5,
    1.5,
    1.6,
    1.4,
    1.1,
    1.2,
    1.5,
    1.3,
    1.4,
    1.7,
    1.5,
    1.7,
    1.5,
    1.0,
    1.7,
    1.9,
    1.6,
    1.6,
    1.5,
    1.4,
    1.6,
    1.6,
    1.5,
    1.5,
    1.4,
    1.5,
    1.2,
    1.3,
    1.5,
    1.3,
    1.5,
    1.3,
    1.3,
    1.3,
    1.6,
    1.9,
    1.4,
    1.6,
    1.4,
    1.5,
    1.4,
  ],
  marker: {
    line: { width: 0 },
    size: 3,
    color: 'rgb(228,26,28)',
  },
};
const trace2 = {
  mode: 'markers',
  name: 'Iris-versicolor',
  type: 'scatter3d',
  x: [
    7.0,
    6.4,
    6.9,
    5.5,
    6.5,
    5.7,
    6.3,
    4.9,
    6.6,
    5.2,
    5.0,
    5.9,
    6.0,
    6.1,
    5.6,
    6.7,
    5.6,
    5.8,
    6.2,
    5.6,
    5.9,
    6.1,
    6.3,
    6.1,
    6.4,
    6.6,
    6.8,
    6.7,
    6.0,
    5.7,
    5.5,
    5.5,
    5.8,
    6.0,
    5.4,
    6.0,
    6.7,
    6.3,
    5.6,
    5.5,
    5.5,
    6.1,
    5.8,
    5.0,
    5.6,
    5.7,
    5.7,
    6.2,
    5.1,
    5.7,
  ],
  y: [
    3.2,
    3.2,
    3.1,
    2.3,
    2.8,
    2.8,
    3.3,
    2.4,
    2.9,
    2.7,
    2.0,
    3.0,
    2.2,
    2.9,
    2.9,
    3.1,
    3.0,
    2.7,
    2.2,
    2.5,
    3.2,
    2.8,
    2.5,
    2.8,
    2.9,
    3.0,
    2.8,
    3.0,
    2.9,
    2.6,
    2.4,
    2.4,
    2.7,
    2.7,
    3.0,
    3.4,
    3.1,
    2.3,
    3.0,
    2.5,
    2.6,
    3.0,
    2.6,
    2.3,
    2.7,
    3.0,
    2.9,
    2.9,
    2.5,
    2.8,
  ],
  z: [
    4.7,
    4.5,
    4.9,
    4.0,
    4.6,
    4.5,
    4.7,
    3.3,
    4.6,
    3.9,
    3.5,
    4.2,
    4.0,
    4.7,
    3.6,
    4.4,
    4.5,
    4.1,
    4.5,
    3.9,
    4.8,
    4.0,
    4.9,
    4.7,
    4.3,
    4.4,
    4.8,
    5.0,
    4.5,
    3.5,
    3.8,
    3.7,
    3.9,
    5.1,
    4.5,
    4.5,
    4.7,
    4.4,
    4.1,
    4.0,
    4.4,
    4.6,
    4.0,
    3.3,
    4.2,
    4.2,
    4.2,
    4.3,
    3.0,
    4.1,
  ],
  marker: {
    line: { width: 0 },
    size: 3,
    color: 'rgb(55,126,184)',
  },
};
const trace3 = {
  mode: 'markers',
  name: 'Iris-virginica',
  type: 'scatter3d',
  x: [
    6.3,
    5.8,
    7.1,
    6.3,
    6.5,
    7.6,
    4.9,
    7.3,
    6.7,
    7.2,
    6.5,
    6.4,
    6.8,
    5.7,
    5.8,
    6.4,
    6.5,
    7.7,
    7.7,
    6.0,
    6.9,
    5.6,
    7.7,
    6.3,
    6.7,
    7.2,
    6.2,
    6.1,
    6.4,
    7.2,
    7.4,
    7.9,
    6.4,
    6.3,
    6.1,
    7.7,
    6.3,
    6.4,
    6.0,
    6.9,
    6.7,
    6.9,
    5.8,
    6.8,
    6.7,
    6.7,
    6.3,
    6.5,
    6.2,
    5.9,
  ],
  y: [
    3.3,
    2.7,
    3.0,
    2.9,
    3.0,
    3.0,
    2.5,
    2.9,
    2.5,
    3.6,
    3.2,
    2.7,
    3.0,
    2.5,
    2.8,
    3.2,
    3.0,
    3.8,
    2.6,
    2.2,
    3.2,
    2.8,
    2.8,
    2.7,
    3.3,
    3.2,
    2.8,
    3.0,
    2.8,
    3.0,
    2.8,
    3.8,
    2.8,
    2.8,
    2.6,
    3.0,
    3.4,
    3.1,
    3.0,
    3.1,
    3.1,
    3.1,
    2.7,
    3.2,
    3.3,
    3.0,
    2.5,
    3.0,
    3.4,
    3.0,
  ],
  z: [
    6.0,
    5.1,
    5.9,
    5.6,
    5.8,
    6.6,
    4.5,
    6.3,
    5.8,
    6.1,
    5.1,
    5.3,
    5.5,
    5.0,
    5.1,
    5.3,
    5.5,
    6.7,
    6.9,
    5.0,
    5.7,
    4.9,
    6.7,
    4.9,
    5.7,
    6.0,
    4.8,
    4.9,
    5.6,
    5.8,
    6.1,
    6.4,
    5.6,
    5.1,
    5.6,
    6.1,
    5.6,
    5.5,
    4.8,
    5.4,
    5.6,
    5.1,
    5.1,
    5.9,
    5.7,
    5.2,
    5.0,
    5.2,
    5.4,
    5.1,
  ],
  marker: {
    line: { width: 0 },
    size: 3,
    color: 'rgb(77,175,74)',
  },
};
const data = [trace1, trace2, trace3];
const layout = {
  scene: {
    xaxis: {
      title: 'Sepal Length',
      gridcolor: 'rgb(255, 255, 255)',
      titlefont: {
        size: 14,
        color: '#2f2f2f',
        family: 'Courier New',
      },
      zerolinecolor: 'rgb(255, 255, 255)',
      showbackground: true,
      backgroundcolor: 'rgb(230, 230,230)',
    },
    yaxis: {
      title: 'Sepal Width',
      gridcolor: 'rgb(255, 255, 255)',
      titlefont: {
        size: 14,
        color: '#4f4f4f',
        family: 'Courier New',
      },
      zerolinecolor: 'rgb(255, 255, 255)',
      showbackground: true,
      backgroundcolor: 'rgb(230, 230,230)',
    },
    zaxis: {
      title: 'Petal Length',
      gridcolor: 'rgb(255, 255, 255)',
      titlefont: {
        size: 14,
        color: '#7f7f7f',
        family: 'Courier New',
      },
      zerolinecolor: 'rgb(255, 255, 255)',
      showbackground: true,
      backgroundcolor: 'rgb(230, 230,230)',
    },
    aspectmode: 'manual',
    aspectratio: {
      x: 1,
      y: 1,
      z: 1,
    },
  },
  title: 'Iris dataset',
  width: 800,
  height: 550,
  autosize: false,
};
Plotly.plot(TESTER, {
  data: data,
  layout: layout,
});