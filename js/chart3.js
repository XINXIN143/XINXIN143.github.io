var dom = document.getElementById('container3');
var myChart = echarts.init(dom, 'dark', {
    renderer: 'canvas',
    useDirtyRect: false
});
var app = {};

var option;

option = {
    backgroundColor: '#000000',//背景色
    title: {
        text: '温室气体排放（2018）',
        subtext: '单位:百分比',
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
        data: [
            '上游生产',
            '品牌运营',
            '使用和最终使用'
        ],
        bottom:'0%'
    },
    series: [
        {
            name: 'Access From',
            type: 'pie',
            selectedMode: 'single',
            radius: [0, '25%'],
            label: {
                position: 'inner',
                fontSize: 12
            },
            labelLine: {
                show: false
            },
            data: [
                { value: 0.71, name: '上游生产' },
                { value:0.06,name:'品牌运营' },
                { value: 0.23, name: '使用和最终使用', selected: true }
            ]
        },
        {
            name: 'Access From',
            type: 'pie',
            radius: ['40%', '55%'],
            labelLine: {
                length: 5
            },
            data: [
                { value: 0.38, name: '材料生产' },
                { value: 0.08, name: '面料准备' },
                { value: 0.06, name: '构造准备' },
                { value: 0.15, name: '湿制工艺' },
                { value:0.04, name: '附加装饰' },
                { value: 0.03, name: '运输' },
                { value: 0.03, name: '零售' },
                { value: 0.2, name: '产品用途' },
                { value: 0.03, name: '使用结果' }
            ]
        }
    ]
};

if (option && typeof option === 'object') {
    myChart.setOption(option);
}

window.addEventListener('resize', myChart.resize);