 var myChart = echarts.init(document.getElementById('container14'));
     var xData = function() {
     var data = [];
    for (var i = 2012; i <= 2020; i++) {
        data.push(i);
      }
       return data;
     }();
    //var color = ["#3fb1e3","#f2a139","#6be6c1","#a0a7e6","#ff8d8d","#96dee8"];
    var color = ["#3fb1e3","#6be6c1","#626c91","#a0a7e6","#c4ebad","#96dee8"];//折线颜色
    var name1= ['煤炭','柴油','汽油','焦炭','燃料油','煤油'];//图例
    //数据
    var data = [
        [49,45,57,142,214,257,297,315,347],
        [2.18,5.37,5.45,9.83,12,13.82,14.53,17.51,20.85],
        [2.89,4.89,5.76,8.96,10.92,11.89,12.25,13.94,17.03],
        [6,3,2,1,2,2,1,2,3],
        [0.25,0.49,0.52,0.62,0.52,0.61,0.82,1.34,2.81],
        [0.07,0.05,0.06,0.03,0.02,0.04,0.04,0.06,0.41]
    ]

    var series = [];  
    for (var i = 0; i < data.length; i++) {
        series.push({
            name: name1[i],
            type: "line",
            symbolSize: 6,//标记的大小，可以设置成诸如 10 这样单一的数字，也可以用数组分开表示宽和高，例如 [20, 10] 表示标记宽为20，高为10[ default: 4 ]
            symbol: 'circle',//标记的图形。ECharts 提供的标记类型包括 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
            smooth: true, //是否平滑曲线显示
            showSymbol: true, //是否显示 symbol, 如果 false 则只有在 tooltip hover 的时候显示
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: color[i]
                    }, {
                        offset: 0.8,
                        color: color[i],
                        opacity:0.6,
                    }], false),
                    // shadowColor: 'rgba(255,255,255, 0.1)',
                    shadowBlur: 1,
                    opacity:0.7,
                }
            },
            itemStyle: {
                normal: {
                    color: color[i],
                    lineStyle: {
                        width: 1,
                        type: 'solid' //'dotted'虚线 'solid'实线
                    },
                    borderColor: 'rgba(255,255,255,0.6)', //图形的描边颜色。支持的格式同 color
                    borderWidth: 1 ,//描边线宽。为 0 时无描边。[ default: 0 ] 
                    barBorderRadius: 0,
                    label: {
                        show: true,
                    },
                    opacity:1,
                }
            },
        

                    data: data[i],

        })
        if(i==1||i==2||i==3){
            series[i].itemStyle.normal.label.show=false;
        }
        
    };

    

            option = {
                backgroundColor: "#FFF",
                legend: {
                    top: 'bottom',
                    left: 'center',
                        itemGap:15,
                        itemWidth:20,
                        itemHeight:20,
                        textStyle: {
                            color: '#434343',
                            fontSize: '15'
                        },
                        data: name1
                },
            //标题和副标题
                title: {
                    left:'center',
                    top:10,
                    text:'纺织服装、服饰业能源消耗总量',
                    subtext:'单位：万吨', 
                    textStyle: {
                        color: '#000',
                        fontSize: '24',
                        fontWeight: 'bold',
                    },
                    subtextStyle: {
                        color: '#707070',
                        fontSize: '15',

                    },
                },

              //自定义文本
                graphic: {
                    type:'text',
                    //位置 可用left,right,top,bottom
                    right: '20px',
                    bottom:'10px',
                    style:{
                        text:'数据来源：国家统计局',//文字内容
                        fontSize: '13',//字号
                        fill: '#777', //文字颜色
                    }, 
                },




                tooltip: {
                    trigger: "axis",
                    axisPointer: { // 坐标轴指示器，坐标轴触发有效
                        type: 'line', // 默认为直线，可选为：'line' | 'shadow'
                        lineStyle: {
                            color: '#57617B'
                        }
                    },
                    textStyle:{
                        color:'rgba(255,255,255,0.8)'
                    },
                // formatter: '{b}<br />{a0}: {c0}%<br />{a1}: {c1}%<br />{a2}: {c2}%<br />{a3}: {c3}%<br />{a4}: {c4}%<br />{a5}: {c5}%',
                    backgroundColor: 'rgba(0,0,0,0.7)', // 背景
                    padding: [8, 10], //内边距
                    //extraCssText: 'box-shadow: 0 0 3px rgba(255, 255, 255, 0.8);', //添加阴影
                },
                grid: {
                    borderWidth: 0,
                    top: 80,
                    bottom: 80,
                    left:60,
                    right:30,
                    textStyle: {
                        color: "#fff"
                    }
                },
                xAxis: [{
                    type: "category",
                    axisLine: {
                        lineStyle: {
                            color: '#e9e9e9'
                        }
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: '#e9e9e9 ',
                        }
                    },
                    boundaryGap: false, //坐标轴两边留白策略，类目轴和非类目轴的设置和表现不一样
                    axisTick: {
                        show: false
                    },
                    splitArea: {
                        show: false
                    },
                    axisLabel: {
                        inside: false,
                        margin:20,
                        textStyle: {
                            color: '#434343',
                            fontWeight: 'normal',
                            fontSize: '15',
                        },
                    },
                    data: xData,
                }],
                yAxis: {
                    type: 'log',
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: '#e9e9e9',
                        }
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: '#e9e9e9 ',
                        }
                    },
                    axisLabel: {
                        margin:20,
                        textStyle: {
                            color: '#434343',
                            fontWeight: 'normal',
                            fontSize: '15',
                        },
                    // formatter: '{value}%',
                    },
                },
                series: series,
            }
     myChart.setOption(option);