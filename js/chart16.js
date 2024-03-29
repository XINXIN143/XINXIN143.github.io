var dom = document.getElementById('container16');
    var myChart = echarts.init(dom, null, {
      renderer: 'canvas',
      useDirtyRect: false
    });
    var app = {};
    
    var option;

    option = {
    title: {padding: [30,30,200,200],
        text: '德意中受访者承认“他们买了超出自己经济能力范围的东西"', textStyle: {
            fontSize: 20},left:'center'
        ,subtext:'单位:百分比',subtextStyle:{fontSize:12}
    },
			tooltip: {
				// 悬停指示
				trigger: "item",
				formatter: "{b}: {c}%"
			},
    grid: {
        left: '3%',
        right: '4%',
        bottom: '5%',
        top:'15%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
    },
    yAxis: {
        type: 'category',
        axisLabel: {
            textStyle: {
                fontSize: "18",color:'#000'
            },
        },
        data: ['德国', '意大利', '中国大陆', '中国台湾', '中国香港']
    },
    series: [
        {
            name: '2011',
            type: 'bar',                itemStyle: {
                    normal: {
                        //这里是重点
                        color: function (params) {
                            //注意，如果颜色太少的话，后面颜色不会自动循环，最好多定义几个颜色
                            var colorList = ['#FAF258','#F1BD5E', '#E55A55', '#F5D85B', '#EA8863'];
                            return colorList[params.dataIndex];
                        }
                    }
                },
            data: [24, 34, 46, 29, 42],label: {textStyle:{fontSize:16},
                show: true,//是否显示标签 true为显示
                formatter: '{c}%',                
                position: 'right'//第一个是横向距离百分比，第二个是竖向百分比,
            }
        }
    ]
};

if (option && typeof option === 'object') {
      myChart.setOption(option);
    }

window.addEventListener('resize', myChart.resize);