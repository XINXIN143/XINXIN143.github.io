var dom = document.getElementById('container');
    var myChart = echarts.init(dom, null, {
      renderer: 'canvas',
      useDirtyRect: false
    });
    var app = {};
    
    var option;

     option = {backgroundColor:'#000',
    title: {
        text: '2018年服装和鞋类GHG排放', left:'center',
                    top:30,
        textStyle:{color:'#FFFFFF',fontSize:20},
        subtext: '单位:百分比（数据来源：全球时尚议程《fashion-on-climate-full-report》）',
       subtextStyle:{color:'#FFFFFF',fontSize:12}
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
        bottom:'8%',textStyle:{color:'#FFFFFF',fontSize:14,fontWeight:'bold'}
    },
    series: [
        {
            name: 'Access From',
            type: 'pie',
            color: ['#B9DBC6','#6CB3C8', '#487FAE'],
            selectedMode: 'single',
            radius: [0, '25%'],
            label: {
                textStyle:{color:'#fff',fontSize:12,fontWeight:'bold'}
            },
            labelLine: {
                length: 1
            },
            data: [
                { value: 0.71, name: '上游生产' },
                { value:0.06,name:'品牌运营' },
                { value: 0.23, name: '使用和最终使用'}
            ]
        },
        {
            name: 'Access From',
            type: 'pie',color: ['#FFFFFF','#E1EFE8', '#C7E1D1', '#AED4BB', '#94C6A6','#86C1D2',  '#51A6BF', '#5A92BF','#366A93'],
            radius: ['40%', '55%'],
                        label: {
                textStyle:{color:'#fff',fontSize:12,fontWeight:'bold'}
            },
            labelLine: {
                length: 5
            },
            data: [
                { value:0.04, name: '附加装饰' },
                { value: 0.06, name: '构造准备' },
                { value: 0.08, name: '面料准备' },
                { value: 0.15, name: '湿制工艺' },
                { value: 0.38, name: '材料生产' },
                { value: 0.03, name: '运输' },
                { value: 0.03, name: '零售' },
                { value: 0.03, name: '使用结果' },
                { value: 0.2, name: '产品用途' }
            ]
        }
    ]
};


if (option && typeof option === 'object') {
      myChart.setOption(option);
}

window.addEventListener('resize', myChart.resize);