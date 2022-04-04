(function () {
    window.PLOTLYENV = { 'BASE_URL': 'https://plotly.com' };

    var gd = document.getElementById('c7daa83d-9ca2-4996-8b1c-99d2d14137fd')
    var resizeDebounce = null;

    function resizePlot() {
        var bb = gd.getBoundingClientRect();
        Plotly.relayout(gd, {
            width: bb.width,
            height: bb.height
        });
    }


    window.addEventListener('resize', function () {
        if (resizeDebounce) {
            window.clearTimeout(resizeDebounce);
        }
        resizeDebounce = window.setTimeout(resizePlot, 100);
    });



    Plotly.plot(gd, {
        data: [
            {
                "fill": "tozeroy",
                "line": {
                    "color": "rgb(77, 176, 255)"
                },
                "meta": {
                    "columnNames": {
                        "x": "E", "y": "D", "text": ""
                    }
                },
                "mode": "lines",
                "name": "\u043f\u043b\u0430\u043d \u0434\u043e\u0431\u044b\u0447\u0438",
                "type": "scatter",
                "xsrc": "resavv:1:8dde25",
                "x": ["2022-06-15", "2022-06-16"],
                "ysrc": "resavv:1:626779",
                "y": ["100", 100],
                "xaxis": "x",
                "hoveron": "fills",
                "visible": true,
                "hoverinfo": "none",
                "stackgroup": 1,
                "connectgaps": true,
                "orientation": "v"
            },

            {
                "fill": "none",
                "line": {
                    "color": "rgb(213, 99, 250)",
                    "shape": "spline",
                    "width": 3,
                    "smoothing": 0.9
                },
                "meta": {
                    "columnNames": {
                        "x": "x", "y": "y"
                    }
                },
                "mode": "lines",
                "name": "\u0434\u043e\u0431\u044b\u0442\u043e (\u0441\u0443\u0442\u043a\u0438)",
                "type": "scatter",
                "xsrc": "resavv:1:4b1c30",
                "x": [
                    "2022-06-15 5:00",
                    "2022-06-15 6:00", 
                    "2022-06-15 7:00",
                    "2022-06-15 8:00", 
                    "2022-06-15 9:00",
                    "2022-06-15 10:00", 
                    "2022-06-16 00:00"
                ],
                "ysrc": "resavv:1:0c6faa",
                "y": [
                    "10", "12", "15", "20", "25", "35"
                ],
                "error_x": {
                    "type":
                        "percent",
                    "color": "#636efa",
                    "value": 10,
                    "width": 4,
                    "visible": false,
                    "symmetric": true,
                    "thickness": 2
                },
                "opacity": 1,
                "showlegend": true,
                "connectgaps": false,
                "hovertemplate": ""
            },

            {
                "meta": {
                    "columnNames": {
                        "x": "x", "y": "a"
                    }
                },
                "mode": "lines",
                "name": "\u0434\u043e\u0431\u044b\u0442\u043e (\u0447\u0430\u0441)",
                "type": "bar",
                "xsrc": "resavv:1:4b1c30",
                "x": [
                    "2022-06-15 5:00",
                    "2022-06-15 6:00",
                    "2022-06-15 7:00",
                    "2022-06-15 8:00", 
                    "2022-06-15 9:00",
                    "2022-06-15 10:00", 
                    "2022-06-16 00:00"
                ],
                "ysrc": "resavv:1:238cea",
                "y": ["10", "2", "3", "5", "5", "10"],
                "marker": {
                    "line": {
                        "color": "rgb(255, 255, 255)",
                        "width": 2
                    },
                    "color": "rgb(116, 243, 121)"
                },
                "stackgroup": null,
                "orientation": "v"
            },

            {
                "line": {
                    "dash": "dot",
                    "color": "rgb(250, 193, 99)"
                },
                "meta": {
                    "columnNames": {
                        "x": "G", "y": "F", "text": ""
                    }
                },
                "mode": "lines",
                "name": "\u041f\u0440\u043e\u0433\u043d\u043e\u0437 \u0434\u043e\u0431\u044b\u0447\u0438",
                "type": "scatter",
                "xsrc": "resavv:1:db3e4d",
                "x": ["2022-06-15 10:00", "2022-06-16"],
                "ysrc": "resavv:1:d473d4",
                "y": ["35", "110"],
                "hoverinfo": "x+y",
                "orientation": "v"
            }
        ],
        layout: {
            "title": {
                "text": ""
            },
            "width": 1000,
            "xaxis": {
                "side": "bottom",
                "type": "date",
                "dtick": 7200000,
                "range": ["2022-06-15 0", "2022-06-16"],
                "tick0": "2022-06-15 00",
                "ticks": "outside",
                "title": {
                    "text": "Click to enter X axis title"
                },
                "domain": [0, 1],
                "mirror": false,
                "nticks": 13,
                "ticklen": 5,
                "showgrid": false,
                "showline": true,
                "tickfont": {
                    "size": 12
                },
                "tickmode": "linear",
                "zeroline": false,
                "autorange": false,
                "gridwidth": 1,
                "linecolor": "rgb(59, 60, 61)",
                "linewidth": 3,
                "tickwidth": 2,
                "showspikes": false,
                "tickformat": "",
                "rangeslider": {
                    "range": ["2022-06-15", "2022-06-16"],
                    "yaxis": {},
                    "visible": false,
                    "autorange": true
                },
                "rangeselector": {
                    "visible": true
                },
                "zerolinewidth": 10
            },
            "yaxis": {
                "side": "left",
                "type": "linear",
                "range": [0, 120],
                "domain": [0, 1],
                "showgrid": true,
                "showline": false,
                "zeroline": false,
                "autorange": false,
                "automargin": true,
                "fixedrange": false,
                "showspikes": false,
                "tickprefix": "",
                "ticksuffix": "\u0442\u044b\u0441. \u043c",
                "separatethousands": false
            },
            "bargap": 0.35,
            "height": 700,
            "legend": {
                "x": 0.5,
                "y": -0.1,
                "title": {
                    "text": "<br>"
                },
                "xanchor": "center",
                "yanchor": "middle",
                "itemsizing": "trace",
                "orientation": "h"
            },
            "margin": {
                "b": 100,
                "l": 80,
                "r": 80,
                "t": 100,
                "pad": 0
            },
            "autosize": true,
            "dragmode": "pan",
            "template": {
                "data": {
                    "bar": [{
                        "type": "bar",
                        "marker": {
                            "colorbar": {
                                "ticks": "",
                                "outlinewidth": 0
                            }
                        }
                    }],
                    "table": [{
                        "type": "table",
                        "cells": {
                            "fill": {
                                "color": "#EBF0F8"
                            },
                            "line": {
                                "color": "white"
                            }
                        },
                        "header": {
                            "fill": {
                                "color": "#C8D4E3"
                            },
                            "line": {
                                "color": "white"
                            }
                        }
                    }],
                    "carpet": [{
                        "type": "carpet",
                        "aaxis": {
                            "gridcolor": "#C8D4E3",
                            "linecolor": "#C8D4E3",
                            "endlinecolor": "#2a3f5f",
                            "minorgridcolor": "#C8D4E3",
                            "startlinecolor": "#2a3f5f"
                        },
                        "baxis": {
                            "gridcolor": "#C8D4E3",
                            "linecolor": "#C8D4E3",
                            "endlinecolor": "#2a3f5f",
                            "minorgridcolor": "#C8D4E3",
                            "startlinecolor": "#2a3f5f"
                        }
                    }],
                    "mesh3d": [{
                        "type": "mesh3d",
                        "colorbar": {
                            "ticks": "",
                            "outlinewidth": 0
                        }
                    }],
                    "contour": [{
                        "type": "contour",
                        "colorbar": {
                            "ticks": "",
                            "outlinewidth": 0
                        },
                        "autocolorscale": true
                    }],
                    "heatmap": [{
                        "type": "heatmap",
                        "colorbar": {
                            "ticks": "",
                            "outlinewidth": 0
                        },
                        "autocolorscale": true
                    }],
                    "scatter": [{
                        "type": "scatter",
                        "marker": {
                            "colorbar": {
                                "ticks": "",
                                "outlinewidth": 0
                            }
                        }
                    }],
                    "surface": [{ 
                        "type": "surface", 
                        "colorbar": { 
                            "ticks": "", 
                            "outlinewidth": 0 
                        } 
                    }], 
                    "heatmapgl": [{
                        "type": "heatmapgl", 
                        "colorbar": { 
                            "ticks": "",
                            "outlinewidth": 0 
                        } 
                    }], 
                    "histogram": [{ 
                        "type": "histogram", 
                        "marker": { 
                            "colorbar": { 
                                "ticks": "", 
                                "outlinewidth": 0 
                            } 
                        } 
                    }], 
                    "parcoords": [{
                        "line": { 
                            "colorbar": { 
                                "ticks": "", 
                                "outlinewidth": 0 
                            } 
                        }, 
                        "type": "parcoords" 
                    }], 
                    "scatter3d": [{
                        "type": "scatter3d", 
                        "marker": { 
                            "colorbar": { 
                                "ticks": "", 
                                "outlinewidth": 0 
                            } 
                        } 
                    }], 
                    "scattergl": [{ 
                        "type": "scattergl", 
                        "marker": {
                            "colorbar": { 
                                "ticks": "", 
                                "outlinewidth": 0 
                            } 
                        } 
                    }], 
                    "choropleth": [{ 
                        "type": "choropleth", 
                        "colorbar": { 
                            "ticks": "", 
                            "outlinewidth": 0 
                        } 
                    }], 
                    "scattergeo": [{ 
                        "type": "scattergeo", 
                        "marker": { 
                            "colorbar": { 
                                "ticks": "", 
                                "outlinewidth": 0 
                            } 
                        } 
                    }], 
                    "histogram2d": [{ 
                        "type": "histogram2d", 
                        "colorbar": { 
                            "ticks": "", 
                            "outlinewidth": 0 
                        }, 
                        "autocolorscale": true 
                    }], 
                    "scatterpolar": [{ 
                        "type": "scatterpolar", 
                        "marker": { 
                            "colorbar": { 
                            "ticks": "", 
                            "outlinewidth": 0 
                        } 
                    } 
                }], 
                "contourcarpet": [{ 
                    "type": "contourcarpet", 
                    "colorbar": { 
                        "ticks": "", 
                        "outlinewidth": 0 
                    } 
                }], 
                "scattercarpet": [{ 
                    "type": "scattercarpet", 
                    "marker": { 
                        "colorbar": { 
                            "ticks": "", 
                            "outlinewidth": 0 
                        } 
                    } 
                }], 
                "scattermapbox": [{ 
                    "type": "scattermapbox", 
                    "marker": {
                         "colorbar": { 
                             "ticks": "", 
                             "outlinewidth": 0 
                            } 
                        } 
                    }], 
                    "scatterpolargl": [{ 
                        "type": "scatterpolargl", 
                        "marker": { 
                            "colorbar": { 
                                "ticks": "", 
                                "outlinewidth": 0 
                            } 
                        } 
                    }], 
                    "scatterternary": [{ 
                        "type": "scatterternary", 
                        "marker": { 
                            "colorbar": { 
                                "ticks": "", 
                                "outlinewidth": 0 
                            } 
                        } 
                    }], 
                    "histogram2dcontour": [{ 
                        "type": "histogram2dcontour", 
                        "colorbar": { 
                            "ticks": "", 
                            "outlinewidth": 0 
                        }, 
                        "autocolorscale": true 
                    }]
                }, 
                "layout": {
                    "geo": { 
                        "bgcolor": 
                        "white", 
                        "showland": true, 
                        "lakecolor": "white", 
                        "landcolor": "white", 
                        "showlakes": true, 
                        "subunitcolor": "#C8D4E3" 
                    }, 
                    "font": { 
                        "color": "#2a3f5f" 
                    }, 
                    "polar": { 
                        "bgcolor": "white", 
                        "radialaxis": { 
                            "ticks": "", 
                            "gridcolor": "#EBF0F8", 
                            "linecolor": "#EBF0F8" 
                        }, 
                        "angularaxis": { 
                            "ticks": "", 
                            "gridcolor": "#EBF0F8", 
                            "linecolor": "#EBF0F8" 
                        } 
                    }, 
                    "scene": { 
                        "xaxis": { 
                            "ticks": "", 
                            "gridcolor": "#DFE8F3", 
                            "gridwidth": 2, 
                            "linecolor": "#EBF0F8", 
                            "zerolinecolor": "#EBF0F8", 
                            "showbackground": true, 
                            "backgroundcolor": "white" 
                        }, 
                        "yaxis": { 
                            "ticks": "", 
                            "gridcolor": 
                            "#DFE8F3", 
                            "gridwidth": 2, 
                            "linecolor": "#EBF0F8", 
                            "zerolinecolor": "#EBF0F8", 
                            "showbackground": true, 
                            "backgroundcolor": "white" 
                        }, 
                        "zaxis": { 
                            "ticks": "", 
                            "gridcolor": "#DFE8F3", 
                            "gridwidth": 2, 
                            "linecolor": "#EBF0F8", 
                            "zerolinecolor": "#EBF0F8", 
                            "showbackground": true, 
                            "backgroundcolor": "white" 
                        } 
                    }, 
                    "title": { 
                        "x": 0.05 
                    }, 
                    "xaxis": { 
                        "ticks": "", 
                        "gridcolor": "#EBF0F8", 
                        "linecolor": "#EBF0F8", 
                        "automargin": true, 
                        "zerolinecolor": "#EBF0F8", 
                        "zerolinewidth": 2 
                    }, 
                    "yaxis": { 
                        "ticks": "", 
                        "gridcolor": "#EBF0F8", 
                        "linecolor": "#EBF0F8", 
                        "automargin": true, 
                        "zerolinecolor": "#EBF0F8", 
                        "zerolinewidth": 2 
                    }, 
                    "ternary": { 
                        "aaxis": { 
                            "ticks": "", 
                            "gridcolor": "#DFE8F3", 
                            "linecolor": "#A2B1C6" 
                        }, 
                        "baxis": { 
                            "ticks": "", 
                            "gridcolor": "#DFE8F3", 
                            "linecolor": "#A2B1C6" 
                        }, 
                        "caxis": { 
                            "ticks": "", 
                            "gridcolor": "#DFE8F3", 
                            "linecolor": "#A2B1C6" 
                        }, 
                        "bgcolor": "white" 
                    },
                    "colorway": ["#636efa", "#EF553B", "#00cc96", "#ab63fa", "#19d3f3", "#e763fa", "#fecb52", "#ffa15a", "#ff6692", "#b6e880"], 
                    "hovermode": "closest", 
                    "colorscale": { 
                        "diverging": [
                            [0, "#8e0152"], 
                            [0.1, "#c51b7d"], 
                            [0.2, "#de77ae"], 
                            [0.3, "#f1b6da"], 
                            [0.4, "#fde0ef"], 
                            [0.5, "#f7f7f7"], 
                            [0.6, "#e6f5d0"], 
                            [0.7, "#b8e186"], 
                            [0.8, "#7fbc41"], 
                            [0.9, "#4d9221"], 
                            [1, "#276419"]], 
                            "sequential": [
                                [0, "#0508b8"], 
                                [0.0893854748603352, "#1910d8"], 
                                [0.1787709497206704, "#3c19f0"], 
                                [0.2681564245810056, "#6b1cfb"], 
                                [0.3575418994413408, "#981cfd"], 
                                [0.44692737430167595, "#bf1cfd"], 
                                [0.5363128491620112, "#dd2bfd"], 
                                [0.6256983240223464, "#f246fe"], 
                                [0.7150837988826816, "#fc67fd"], 
                                [0.8044692737430168, "#fe88fc"], 
                                [0.8938547486033519, "#fea5fd"], 
                                [0.9832402234636871, "#febefe"], 
                                [1, "#fec3fe"]], 
                                "sequentialminus": [
                                    [0, "#0508b8"], 
                                    [0.0893854748603352, "#1910d8"], 
                                    [0.1787709497206704, "#3c19f0"], 
                                    [0.2681564245810056, "#6b1cfb"], 
                                    [0.3575418994413408, "#981cfd"], 
                                    [0.44692737430167595, "#bf1cfd"], 
                                    [0.5363128491620112, "#dd2bfd"], 
                                    [0.6256983240223464, "#f246fe"], 
                                    [0.7150837988826816, "#fc67fd"], 
                                    [0.8044692737430168, "#fe88fc"], 
                                    [0.8938547486033519, "#fea5fd"], 
                                    [0.9832402234636871, "#febefe"], 
                                    [1, "#fec3fe"]
                                ] 
                            }, 
                            "plot_bgcolor": "white", 
                            "paper_bgcolor": "white", 
                            "shapedefaults": { 
                                "line": { 
                                    "width": 0 
                                }, 
                                "opacity": 0.4, 
                                "fillcolor": "#506784" 
                            }, 
                            "annotationdefaults": { 
                                "arrowhead": 0, 
                                "arrowcolor": "#506784", 
                                "arrowwidth": 1 
                            } 
                        }, 
                        "themeRef": "PLOTLY_WHITE"
            }, 
            "hovermode": "closest", 
            "hoverlabel": { "align": "auto" }, 
            "showlegend": true
        },
        frames: [],
        config: { 
            "showLink": true, 
            "linkText": "Export to plotly.com", 
            "mapboxAccessToken": "pk.eyJ1IjoiY2hyaWRkeXAiLCJhIjoiY2lxMnVvdm5iMDA4dnhsbTQ5aHJzcGs0MyJ9.X9o_rzNLNesDxdra4neC_A" }
    });

}());
