const chart = document.getElementById('chart')
const time = [
    '2022-06-15 5:00', 
    '2022-06-15 6:00', 
    '2022-06-15 7:00', 
    '2022-06-15 8:00', 
    '2022-06-15 9:00',
    '2022-06-15 10:00',
]

const trace1 = {
    name: 'Добыто (сутки)',
    x: time,
    y: [10, 12, 15, 20, 25, 35],
    mode: 'lines',
    type: 'scatter'
}

const trace2 = {
    name: 'Добыто (час)',
    x: time,
    y: [10, 2, 3, 5, 5, 10],
    mode: 'lines',
    type: 'bar',
    marker: {
        color: '#90ee90',
        line: {
            width: 2.5,
            color: '#fff',
        },
        maxdisplayed: 13,
    }
}

const trace3 = {
    name: 'Прогноз добычи',
    x: ['2022-06-15 10:00', '2022-06-16'],
    y: ['35', '110'],
    line: {
        dash: 'dot',
        color: 'orange'
    },
    mode: 'lines',
    type: 'scatter',
}

const trace4 = {
    name: 'План добычи',
    mode: 'lines',
    type: 'scatter',
    fill: 'tozeroy',
    line: {
        color: 'rgba(77,176,255,0.5)'
    },
    x: ['2022-06-15', '2022-06-16'],
    y: ['100', '100']
}

const data = [trace1, trace2, trace3, trace4]

const layout = {
    title: 'Скважина 1-1',
    xaxis: {
        range: ['2022-06-14 23:00', '2022-06-16 01:00'],
        type: 'date',
        dtick: 7200000,
        ticks: 'outside',
        showline: true,
        ticklen: 10,
    },
    yaxis: {
        range: [0, 125],
        ticksuffix: ' тыс. м',
        zeroline: false,
    },
    legend: {
        y: -0.1,
        x: 0.5,
        xanchor: 'center',
        orientation: 'h',
    },
}

const config = {
    scrollZoom: true,
    responsive: true,
    /*     editable: true, */
}




Plotly.newPlot(chart, data, layout, config)


