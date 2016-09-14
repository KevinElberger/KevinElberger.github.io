var chartData = {
    "background-color": "#3F5666",
    "width": "100%",
    "height": "500px",
    "globals": {
        "font-family": "Arial"
    },
    "graphset": [
        {
            "type": "null",
            "x": "2.5%",
            "y": "1%",
            "background-color": "none",
            title: {
                "text": "Health Dashboard",
                "text-align": "left",
                "font-size": "14px",
                "font-color": "#FFF",
                "background-color": "none"
            }
        },
        {
            "type": "pie",
            "height": "35%",
            "width": "29%",
            "x": "35%",
            "y": "50%",
            "background-color": "#FFF",
            "border-radius": 4,
            "title": {
                "text": "Calories Burned",
                "text-align": "center",
                "background-color": "none",
                "font-color": "#333",
                "font-size": "14px"
            },
            "value-box": {
                "visible": true
            },
            "plotarea": {
                "margin": "20% 0% 0% 0%"
            },
            "plot": {
                "slice": 50,
                "ref-angle": 270,
                "detach": false,
                "hover-state": {
                    "visible": false
                },
                "value-box": {
                    "visible": true,
                    "type": "first",
                    "connected": false,
                    "placement": "center",
                    "text": "%v",
                    "rules": [
                        {
                            "rule": "%v < 500",
                            "visible": false
                        }
                    ],
                    "font-color": "#000",
                    "font-size": "20px"
                },
                "tooltip": {
                    "rules": [
                        {
                            "rule": "%v == 324",
                            "text": "%v Calories Remaining",
                            "shadow": false,
                            "border-radius": 4
                        },
                        {
                            "rule": "%v == 526",
                            "text": "%v Calories Burned",
                            "shadow": false,
                            "border-radius": 4
                        }
                    ]
                },
                "animation": {
                    "delay": 0,
                    "effect": 3,
                    "speed": "300",
                    "method": "0",
                    "sequence": "1"
                }
            },
            "series": [
                {
                    "values": [526],
                    "text": "Calories",
                    "background-color": "#00baf0",
                    "border-width": "0px",
                    "shadow": 0
                },
                {
                    "values": [324],
                    "background-color": "#dadada",
                    "alpha": "0.5",
                    "border-color": "#dadada",
                    "border-width": "1px",
                    "shadow": 0
                }
            ]
        },
        {
            "type": "pie",
            "height": "35%",
            "width": "28.5%",
            "x": "68%",
            "y": "50%",
            "background-color": "#FFF",
            "border-radius": 4,
            "title": {
                "text": "Distance",
                "text-align": "center",
                "background-color": "none",
                "font-color": "#333",
                "font-size": "14px"
            },
            "value-box": {
                "visible": true
            },
            "plotarea": {
                "margin": "20% 0% 0% 0%"
            },
            "plot": {
                "slice": 50,
                "ref-angle": 270,
                "detach": false,
                "hover-state": {
                    "visible": false
                },
                "value-box": {
                    "visible": true,
                    "type": "first",
                    "connected": false,
                    "placement": "center",
                    "text": "%v",
                    "rules": [
                        {
                            "rule": "%v < 6",
                            "visible": false
                        }
                    ],
                    "font-color": "#000",
                    "font-size": "20px"
                },
                "tooltip": {
                    "rules": [
                        {
                            "rule": "%v == 4.8",
                            "text": "%v Miles Completed",
                            "shadow": false,
                            "border-radius": 4
                        },
                        {
                            "rule": "%v == 6.1",
                            "text": "%v Miles Remaining",
                            "shadow": false,
                            "border-radius": 4
                        }
                    ]
                },
                "animation": {
                    "delay": 0,
                    "effect": 3,
                    "speed": "300",
                    "method": "0",
                    "sequence": "1"
                }
            },
            "series": [
                {
                    "values": [4.8],
                    "text": "Miles",
                    "background-color": "#baf000",
                    "border-width": "0px",
                    "shadow": 0
                },
                {
                    "values": [6.1],
                    "background-color": "#dadada",
                    "alpha": "0.5",
                    "border-color": "#dadada",
                    "border-width": "1px",
                    "shadow": 0
                }
            ]
        },
        {
            "type": "line",
            "background-color": "#FFF",
            "border-color": "#dae5ec",
            "border-radius": 4,
            "border-width": "1px",
            "width": "93%",
            "height": "35%",
            "x": "3%",
            "y": "10%",
            "title": {
                "text": "Heart Rate",
                "background-color": "none",
                "shadow": 0,
                "text-align": "left",
                "font-size": "16px",
                "font-color": "#333"
            },
            "plotarea": {
                "margin": "50px 25px 40px 46px"
            },
            "scale-y": {
                "values": "50:140:40",
                "line-color": "none",
                "guide": {
                    "line-style": "solid",
                    "line-color": "#d2dae2",
                    "line-width": "1px",
                    "alpha": 0.5
                },
                "tick": {
                    "visible": false
                },
                "item": {
                    "font-color": "#8391a5",
                    "font-size": "11px",
                    "padding-right": "5px"
                }
            },
            "scale-x": {
                "line-color": "#d2dae2",
                "line-width": "2px",
                "min-value": 1473890163,
                "step": 5000,
                "transform": {
                    "type": "date",
                    "all": "%i:%s"
                },
                "values": [],
                "tick": {
                    "line-color": "#d2dae2",
                    "line-width": "1px"
                },
                "guide": {
                    "visible": false
                },
                "item": {
                    "font-color": "#8391a5",
                    "font-size": "11px",
                    "padding-top": "5px"
                }
            },
            "series": [
                {
                    "values": []
                }
            ],
            "refresh": {
                "type": "feed",
                "transport": "js",
                "url": "feed()",
                "interval": 1000
            }
        },
        {
            "type": "gauge",
            "width": "28.5%",
            "height": "35%",
            "x": "3%",
            "y": "50%",
            "border-radius": 4,
            "background-color": "#FFF",
            "title": {
                "text": "Temperature",
                "text-align": "center",
                "background-color": "none",
                "font-color": "#333",
                "font-size": "16px"
            },
            "plot": {
                "aperture": 180,
                "csize": 4,
                "backgroundColor": "none",
                "tooltip": {
                    "visible": false
                }
            },
            "plotarea": {
                "backgroundColor": "none",
                "borderWidth": 0,
                "margin": "70 0 0 0"
            },
            "scaleR": {
                "minValue": 92,
                "maxValue": 106,
                "step": 2,
                "aperture": 180,
                "backgroundColor": "none",
                "item": {
                    "padding": 5,
                    "fontColor": "1E5D9E",
                    "offsetR": 0
                },
                "tick": {
                    "lineColor": "#D1D3D4",
                    "placement": "out",
                    "lineColor": "#1E5D9E"
                },
                "center": {
                    "size": 0,
                    "borderColor": "none",
                    "backgroundColor": "none"
                },
                "ring": {
                    "size": 3,
                    "rules": [
                        {
                            "rule": "%v < 98",
                            "backgroundColor": "#00BAF2"
                        },
                        {
                            "rule": "%v > 96",
                            "backgroundColor": "#E80C60"
                        }
                    ]
                }
            },
            "series": [
                {
                    "text": "Temperature",
                    "values": [99],
                    "lineColor": "#00BAF2",
                    "backgroundColor": "#1E5D9E"
                }
            ]
        }
    ]
};

zingchart.render({
    id:'chartDiv',
    data:chartData,
    height:400,
    width:"100%"
});

window.feed = function(callback) {
    var tick = {};
    tick.plot0 = parseInt(Math.random() * (85 - 110) + 110, 10);
    callback(JSON.stringify(tick));
};