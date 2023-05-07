var dom = document.getElementById('container11');
var myChart = echarts.init(dom, null, {
    renderer: 'canvas',
    useDirtyRect: false
});
var app = {};

var option;

option = {
    title: {
        text: '影响大家网购的因素',
        subtext: '单位:百分比（数据来源：国际环保组织Greenpeace发布的《狂欢之后：国际时尚消费调查报告》）',
    },
    angleAxis: {
        //极坐标系的角度轴
        type: "value",
        axisLine: {
            //坐标轴轴线设置
            lineStyle: {
                color: "#000",
            },
        },
        axisLabel: {
            //刻度标签设置
            textStyle: {
                color: "#000",
            },
            formatter: "{value} %",
        },
    },
    radiusAxis: {
        type: "category",
        data: ['朋友圈', '明星效应', '社交媒体影响', '朋友推荐','促销','饥饿营销'],
        z: 10,
        axisLabel: {
            interval: 0,
            //刻度标签设置
            textStyle: {
                color: "#000",
            },
        },
    },
    polar: {
        center: ["50%", "55%"],
        radius: ["00%", "70%"],
    },
    tooltip: {},
    series: [
        {
            type: "bar",
            data:  [23, 5,23, 15,52,31],
            coordinateSystem: "polar",
            name: "德国",
            stack: "a",
        },
        {
            type: "bar",
            data:  [72, 49, 72, 75,64,39],
            coordinateSystem: "polar",
            name: "中国大陆",
            stack: "a",
        },
        {
            type: "bar",
            data:  [42, 25, 42, 61,72,27],
            coordinateSystem: "polar",
            name: "意大利",
            stack: "a",
        },
        {
            type: "bar",
            data: [55, 24, 54, 63,54,18],
            coordinateSystem: "polar",
            name: "中国台湾",
            stack: "a",
        },
        {
            type: "bar",
            data: [66, 35, 63, 71,62,33],
            coordinateSystem: "polar",
            name: "中国香港",
            stack: "a",
        },
    ],
    legend: {
        show: true,
        data: ['德国', '中国大陆', '意大利','中国台湾','中国香港'],
        bottom:'0%',
        textStyle: {
            color: "#000",
        },
    },
};


if (option && typeof option === 'object') {
    myChart.setOption(option);
}

window.addEventListener('resize', myChart.resize);
