import {trace1, trace2, trace3, trace4, layout, config} from './settings.js'
import {data} from './data.js'

const chart = document.getElementById('chart')
const hourMilliseconds = 60*60*1000
const selectedDate = '2022-04-12'
const parseDate = Date.parse(selectedDate)
const points = getPoints(selectedDate)

layout.xaxis.range = [
    new Date(parseDate - hourMilliseconds).toISOString(), 
    new Date(parseDate + hourMilliseconds * 25).toISOString()
]

function getPoints(date) {
    const points = data.map(e => {
        let shortDate = e[1].substring(0, 10)
        if (date == shortDate) {
            return e
        }
    })
    return points.filter(Boolean)
}

window.setPlan = (value) => {
    trace4.y = [value, value]
    trace4.x = [
        new Date(parseDate).toISOString(), 
        new Date(parseDate + (hourMilliseconds * 24 - (60000))).toISOString()
    ]
    calcTrace3()
    Plotly.newPlot(chart, [trace1, trace2, trace3, trace4], layout, config)
}

window.setValue = (value, date) => {
    points.push([value, date])
    initPoints()
    Plotly.newPlot(chart, [trace1, trace2, trace3, trace4], layout, config)
}

function initPoints() {
    points.sort((a, b) => Date.parse(a[1]) - Date.parse(b[1]))
    
    trace1.x = points.map(e => e[1])
    trace1.y = points.map(e => e[0])


    const newPoints = calcTrace2()
    trace2.x = newPoints.map(e => e[1])
    trace2.y = newPoints.map(e => e[0])
    trace2.y.reduce((sum, current, index) => {
        trace2.y[index] = (current  - sum)
        return current
    }, 0)

    trace3.x = [
        trace1.x[trace1.x.length-1],
        new Date(parseDate + (hourMilliseconds * 24 - (60000))).toISOString()
    ]
    trace3.y = [
        trace1.y[trace1.y.length-1],
        calcTrace3()
    ]

}

function calcTrace2() {
    const result = []
    const hours = points.map(e => {
        return [e[0], new Date(e[1]).getHours()]
    })

    hours.reduce((previousValue, currentValue, index) => {
        if (index == 1) {
            result.push([previousValue[0], selectedDate + ' ' + previousValue[1] + ':00'])
        }
        if (previousValue[1] == currentValue[1]) {
            result.splice(result.length-1, 1)
            result.push([currentValue[0], selectedDate + ' ' + currentValue[1] + ':00'])
        } else {
            result.push([currentValue[0], selectedDate + ' ' + currentValue[1] + ':00'])
        }
        return currentValue
    })
    return result
}


function calcTrace3() {
    const dayMinutes = 24*60
    const time = getTotalMinutes(trace1.x[trace1.x.length-1]) - getTotalMinutes(trace1.x[0])
    const step = trace1.y[trace1.y.length-1] - trace1.y[0]
    const result = step * (dayMinutes / time)
    const lowPoint = +trace4.y[0] - (trace4.y[0] * 0.1)
    const topPoint = +trace4.y[0] + (trace4.y[0] * 0.1)
    if (result < lowPoint) {
        setTrace3Color('red')
    }
    else if (result > topPoint) {
        setTrace3Color('green')
    }
    else {
        setTrace3Color('orange')
    }
    return Math.floor(result) 
}

function setTrace3Color(color) {
    trace3.line.color = color
    trace3.marker.color = color
    trace3.hoverlabel.bordercolor = color
}

function getTotalMinutes(date) {
    return new Date(date).getHours() * 60 + new Date(date).getMinutes()
} 

initPoints()
setPlan(100)

const message = `
Дата по умолчанию выставлена на ${selectedDate}
Выборка точек извлекается из файла data.js
Чтобы выставить план добычи введите в консоли setPlan(value), где value - число
Чтобы добавить точку на график введите в консоли setValue(value, date), 
где value - число, date - дата в формате 'ГГГГ-ММ-ДД ЧЧ:ММ:СС'
например: setValue(20, '2022-04-15 00:01:00')
аргумент date в милисекундах не поддерживается

`
console.log(message)


let resizeDebounce = null;

function resizePlot() {
    let bb = chart.getBoundingClientRect();
    Plotly.relayout(chart, {
        width: bb.width,
        height: bb.height
    })
}

window.addEventListener('resize', function () {
    if (resizeDebounce) {
        window.clearTimeout(resizeDebounce);
    }
    resizeDebounce = window.setTimeout(resizePlot, 10);
})