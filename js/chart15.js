var dom = document.getElementById('container');
    var myChart = echarts.init(dom, null, {
      renderer: 'canvas',
      useDirtyRect: false
    });
    var app = {};
    
    var option;

    var xdata = ['每周都买', '每月都买好几次', '每月至少买1次', '2-3月买1次', '很少买，一年买几次'];
var data = [34.9, 44.19, 16.28, 29.07, 6.98];

option = {  tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
            //悬停上去是显示的是影子
        }
    },
    grid: {
        left: '10%',
        right: '10%',
        bottom: '5%',
        top: '10%',
        containLabel: true
    },
    xAxis: {min: 0,
        max: 4,
        data: xdata,
        triggerEvent: true,
        axisTick: {
            // 刻度线
            show: true
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            show: true,
            rotate: 0,
            interval: 0,
            textStyle: {
                color: '#000',
                fontSize: 18
            }
        }
    },
    yAxis: {
        position:'right',
        type : 'value',
        splitArea : {show : false}
        ,
        nameLocation: 'middle',
        nameTextStyle: {
            padding: 30,
            fontSize: 14,
            color: '#fff'
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: '#304849',
                type: 'dashed'
            }
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            // y轴线
            show: false,
            textStyle: {
                color: '#000',
                fontSize: 18
            }
        }
    },
    title: {
        text: '年轻群体购买服装的频率分布', textStyle: {
            fontSize: 28},left:'center',top:'2%'
        ,subtext:'单位:百分比（克劳锐指数研究院《年轻人生活消费观察系列研究--服装服饰篇》）',subtextStyle:{fontSize:14}
    },
    series: [
        {
            name: '频率',
            type: 'pictorialBar',
            barCategoryGap:'-80%',/*多个并排柱子设置柱子之间的间距*/
            symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
            itemStyle: {
                borderColor: "#FFF",
                borderWidth: 0,
                // 渐变色
                color: function (params) {
                    var colorList = ["#EA8863", "#E55A55", "#F5D85B", "#F1BD5E", "#FAF258"];
                    return colorList[params.dataIndex];
                }
            },
            label: {
                // 数据上方显示数值
                show: true,
                position: 'top',
                textStyle: {
                    color: '#000',
                    fontSize: 16
                }
            },
            data: data
        }
    ]
};

if (option && typeof option === 'object') {
      myChart.setOption(option);
    }

window.addEventListener('resize', myChart.resize);
