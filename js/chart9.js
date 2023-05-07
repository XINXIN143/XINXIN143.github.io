var dom = document.getElementById('container9');
var myChart = echarts.init(dom, null, {
    renderer: 'canvas',
    useDirtyRect: false
});
var app = {};

var option;

option = {
    title: {
        text: '受访者购买超出经济能力范围的衣物情况',
        subtext: '单位：百分比（来源：国际环保组织Greenpeace发布的《狂欢之后：国际时尚消费调查报告》，样本容量5800人)',
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
            //悬停上去是显示的是影子
        }
    },
    grid: {
        left: '5%',
        top: '100px',
        right: '5%',
        bottom: '4%',
        containLabel: true
    },
    //grid决定柱状图的大小
    xAxis: [
        {
            type: 'category',
            data: ['德国', '中国大陆', '意大利', '台湾', '香港'],
            axisTick: {
                alignWithLabel: true
            },
            axisLabel: {
                color: 'black',
                fontSize: '16'
            },
            //修改刻度标签的样式
            axisLine: {
                show: false
            }
            //不显示x轴的样式
        }
    ],
    yAxis: [
        {
            type: 'value',
            min: 0.0,
            max: 0.5,
            interval: 0.1,
            axisLabel: {
                color: 'black',
                fontSize: '16'
            },
            //修改刻度标签的样式
            axisLine: {
                lineStyle: {color: "black"}
            },
            //y轴的线显示出来
            splitLine: {
                lineStyle: {
                    color: "rgba(0,0,0)"
                }
            }
            //y轴分割线的设置
        }
    ],
    series: [
        {
            name: '购买超出经济能力衣物人所占的百分比',
            type: 'bar',
            barWidth: '50%',
            //修改柱子宽度
            data: [0.24, 0.46, 0.34, 0.29, 0.42],
            showBackground: true,
            backgroundStyle: {
                color: 'rgba(180, 180, 180, 0.2)'
            },
            itemStyle: {
                normal: {
                    label: {
                        show: true, //开启显示
                        position: 'top', //在上方显示
                        textStyle: { //数值样式
                            color: 'black',
                            fontSize: 16
                        }
                    },
                    color: function (params) {
                        var colorList = ["#EC9911", "#E55A55", "#E97A33", "#EA8922", "#E36941"];
                        return colorList[params.dataIndex];
                    }
                }
            }
        }
    ],
}


if (option && typeof option === 'object') {
    myChart.setOption(option);
}

window.addEventListener('resize', myChart.resize);