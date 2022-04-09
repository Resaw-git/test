import {trace1, trace2, trace3, trace4, layout, config} from './settings.js'
import {points} from './data.js'

const chart = document.getElementById('chart')

window.setPlan = (value) => {
    trace4.y = [value, value]
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

    const newPoints = calcTrace(points)
    trace2.x = newPoints.map(e => e[1])
    trace2.y = newPoints.map(e => e[0])
    trace2.y.reduce((sum, current, index) => {
        trace2.y[index] = (current  - sum)
        return current
    }, 0)
    console.log(newPoints)
}



function calcTrace(arr) {
    const hours = arr.map(e => {
        return [e[0], new Date(e[1]).getHours()]
    })

    const result = []
    hours.reduce((previousValue, currentValue, index) => {
        if (previousValue[1] == currentValue[1]) {
            result.push([previousValue[0], '2022-06-15 ' + previousValue[1] + ':00'])
            result.reduce((previous, current, index) => {
                if (index == hours.length-1) {
                    result.push([current[0], '2022-06-15 ' + current[1] + ':00'])
                }
                if (previous[1] == current[1]) {
                    result.splice(index-1, 1)
                }
                return current
            })
        } else {
            result.push([previousValue[0], '2022-06-15 ' + previousValue[1] + ':00'])
            if (index == hours.length-1) {
                result.push([currentValue[0], '2022-06-15 ' + currentValue[1] + ':00'])
            }
        }
        return currentValue
    })
    result.sort((a, b) => Date.parse(a[1]) - Date.parse(b[1]))
    return result
}

initPoints()
console.log(trace1)
console.log(trace2)
Plotly.newPlot(chart, [trace1, trace2, trace3, trace4], layout, config)

/* console.log(new Date(1529038860000).toISOString())
console.log(new Date('2022-06-15 10:00').getTime())
console.log(Date.parse('2022-06-15 10:00')) */