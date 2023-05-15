var dom = document.getElementById('container17');
    var myChart = echarts.init(dom, null, {
      renderer: 'canvas',
      useDirtyRect: false
    });
    var app = {};
    
    var option;

    option = { color: ['#6DB0F5', '#7CDAAC','#5F6F97', '#FADB3C', '#B2E0FB'] ,
  title: {   
  
    text: '影响五个国家和地区的消费者网购的因素', textStyle: {
          fontSize: 28},left:'center',top:'1%'
    ,subtext:'单位:百分比（数据来源：国际环保组织Greenpeace发布的《狂欢之后：国际时尚消费调查报告》）',subtextStyle:{fontSize:12}
  },
  legend: {
    data: ['德国', '意大利','中国大陆','中国台湾','中国香港'],  
    bottom: '4%',
    left: 'center',textStyle: {
          fontSize:18,fontWeight:'bold' }
  },
  radar: {  splitNumber: 5, //设置雷达图圈数
    // shape: 'circle',
    radius: "70%",
    center: ['50%', '50%'],//调整数据图在整个图中的位置
    indicator: [ 
      { name: '朋友圈种草', max: 75,nameTextStyle:{fontSize:16,color:'black'}},
      { name: '明星效应', max: 50,nameTextStyle:{fontSize:16,color:'black'}},
      { name: '社交媒体影响', max: 75,nameTextStyle:{fontSize:16,color:'black'}},
      { name: '朋友推荐', max: 75,min:10,nameTextStyle:{fontSize:16,color:'black'}},
      { name: '促销', max: 75,min:50,nameTextStyle:{fontSize:16,color:'black'}},
      { name: '饥饿营销', max: 40,min:10,nameTextStyle:{fontSize:16,color:'black'}}
    ],nameGap:17,//调整字距离图的大小
  },
  series: [
    {
      name: '影响五个国家和地区的消费者网购的因素',
      type: 'radar',
      data: [
        {
          value: [23,5,23,15,52,31], label: {
                    normal: {
                        show: true,
                        formatter:function(params) {
                            return params.value;
                        }
                    }
                }
,
          name: '德国'
        },
        {
          value:[42,25,42,61,72,27], label: {
                    normal: {
                        show: true,
                        formatter:function(params) {
                            return params.value;
                        }
                    }
                }
,
          name: '意大利'
        }, {
          value: [72,49,72,75,64,39], label: {
                    normal: {
                        show: true,
                        formatter:function(params) {
                            return params.value;
                        }
                    }
                }
,
          name: '中国大陆'
        }, {
          value: [66,35,63,71,62,33], label: {
                    normal: {
                        show: true,
                        formatter:function(params) {
                            return params.value;
                        }
                    }
                }
,
          name: '中国香港'
        }, {
          value: [55,24,54,63,54,18], label: {
                    normal: {
                        show: true,
                        formatter:function(params) {
                            return params.value;
                        }
                    }
                }
,
          name: '中国台湾'
        }
      ]
    }
  ]
};

if (option && typeof option === 'object') {
      myChart.setOption(option);
    }

window.addEventListener('resize', myChart.resize);