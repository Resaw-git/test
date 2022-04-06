const chart = document.getElementById('chart')

function setPlan(value) {
    trace4.y = [value, value]
    Plotly.newPlot(chart, data, layout, config)
}

function setValue(value, date) {
    points.push([value, date])
    initPoints()
    Plotly.newPlot(chart, data, layout, config)
}

function initPoints() {
    points.sort((a, b) => Date.parse(a[1]) - Date.parse(b[1]))
    trace1.x = points.map(e => e[1])
    trace1.y = points.map(e => e[0])
    trace2.x = trace1.x
    trace2.y = []
    trace1.y.reduce((sum, current) => {
        trace2.y.push(current  - sum)
        return current
    }, 0)
}

const points = [
    [10, '2022-06-15 5:00'],
    [12, '2022-06-15 6:00'],
    [20, '2022-06-15 8:00'],
    [15, '2022-06-15 7:00'],
    [25, '2022-06-15 9:00'],
    [35, '2022-06-15 10:00'],
    [40, '2022-06-15 10:30'],
]

const trace1 = {
    name: 'Добыто (сутки)',
    x: 0,
    y: 0,
    mode: 'lines',
    type: 'scatter',
    marker: {
        color: 'blue',
        line: {
            color: '#fff',
        },
    },
    hoverlabel: {
        namelength: 0,
        bgcolor: '#fff',
        bordercolor: 'blue',
        font: {
            color: '#000'
        }
    },
    hovertemplate: '%{x}<br>Добыто (сутки): %{y}',
}

const trace2 = {
    name: 'Добыто (час)',
    x: 0,
    y: 0,
    mode: 'lines',
    type: 'bar',
    marker: {
        color: 'green',
        line: {
            width: 2.5,
            color: '#fff',
        },
    },
    hoverlabel: {
        namelength: 0,
        bgcolor: '#fff',
        bordercolor: 'green',
        font: {
            color: '#000'
        }
    },
    hovertemplate: '%{x}<br>Добыто (час): %{y}',
}

const trace3 = {
    name: 'Прогноз добычи',
    x: ['2022-06-15 10:00', '2022-06-15 23:59'],
    y: ['35', '110'],
    line: {
        dash: 'dot',
        color: 'orange'
    },
    mode: 'lines',
    type: 'scatter',
    marker: {
        color: 'orange',
        line: {
            color: '#fff',
        },
    },
    hoverlabel: {
        align: 'left',
        namelength: 0,
        bgcolor: '#fff',
        bordercolor: 'orange',
        font: {
            color: '#000'
        }

    },
    hovertemplate: '%{x}<br>Прогноз добычи: %{y}',
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
    y: ['100', '100'],
    hoverlabel: {
        align: 'left',
        namelength: 0,
        bgcolor: '#fff',
        bordercolor: 'rgba(77,176,255,0.5)',
        font: {
            color: '#000'
        }

    },
    hovertemplate: '%{x}<br>План добычи: %{y}',
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



initPoints()
console.log(trace2)
Plotly.newPlot(chart, data, layout, config)

console.log(new Date(1529038860000).toISOString())
console.log(new Date('2022-06-15 10:00').getTime())
console.log(Date.parse('2022-06-15 10:00'))