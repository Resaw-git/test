export const trace1 = {
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

export const trace2 = {
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

export const trace3 = {
    name: 'Прогноз добычи',
    x: 0,
    y: 0,
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

export const trace4 = {
    name: 'План добычи',
    mode: 'lines',
    type: 'scatter',
    fill: 'tozeroy',
    line: {
        color: 'rgb(77,176,255)'
    },
    x: 0,
    y: 0,
    hoverlabel: {
        align: 'left',
        namelength: 0,
        bgcolor: '#fff',
        bordercolor: 'rgb(77,176,255)',
        font: {
            color: '#000'
        }

    },
    hovertemplate: '%{x}<br>План добычи: %{y}',
}


export const layout = {
    title: 'Скважина 1-1',
    xaxis: {
        range: 0,
        type: 'date',
        dtick: 7200000,
        ticks: 'outside',
        showline: true,
        ticklen: 10,
    },
    yaxis: {
        range: 0,
        ticksuffix: ' тыс. м',
        zeroline: false,
    },
    legend: {
        y: -0.25,
        x: 0.5,
        xanchor: 'center',
        orientation: 'h',
    }

}

export const config = {
    scrollZoom: true,
    responsive: true,
    /*     editable: true, */
}