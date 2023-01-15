var dom = document.getElementById('container6');
var myChart = echarts.init(dom, null, {
    renderer: 'canvas',
    useDirtyRect: false
});
var app = {};

var option;


// Prime Costs and Prices for ACME Fashion\nCollection "Spring-Summer, 2016"
// Data from https://playground.anychart.com/gallery/7.12.0/Error_Charts/Marker_Chart
// prettier-ignore
const dimensions = [
    'name', ' 生产周期', '生产量',
];
// prettier-ignore

const data = [
    ['SHEIN', 7, 600],
    ['UR', 10, 1000],
    ['OEM', 11, 1600],
    ['HM"', 13, 5000,],
    ['zara', 14, 6500],
];
function renderItem(params, api) {
    const group = {
        type: 'group',
        children: []
    };
    let coordDims = ['x', 'y'];
    for (let baseDimIdx = 0; baseDimIdx < 2; baseDimIdx++) {
        let otherDimIdx = 1 - baseDimIdx;
        let encode = params.encode;
        let baseValue = api.value(encode[coordDims[baseDimIdx]][0]);
        let param = [];
        param[baseDimIdx] = baseValue;
        param[otherDimIdx] = api.value(encode[coordDims[otherDimIdx]][1]);
        let highPoint = api.coord(param);
        param[otherDimIdx] = api.value(encode[coordDims[otherDimIdx]][2]);
        let lowPoint = api.coord(param);
        let halfWidth = 5;
        var style = api.style({
            stroke: api.visual('color'),
            fill: undefined
        });
        group.children.push(
            {
                type: 'line',
                transition: ['shape'],
                shape: makeShape(
                    baseDimIdx,
                    highPoint[baseDimIdx] - halfWidth,
                    highPoint[otherDimIdx],
                    highPoint[baseDimIdx] + halfWidth,
                    highPoint[otherDimIdx]
                ),
                style: style
            },
            {
                type: 'line',
                transition: ['shape'],
                shape: makeShape(
                    baseDimIdx,
                    highPoint[baseDimIdx],
                    highPoint[otherDimIdx],
                    lowPoint[baseDimIdx],
                    lowPoint[otherDimIdx]
                ),
                style: style
            },
            {
                type: 'line',
                transition: ['shape'],
                shape: makeShape(
                    baseDimIdx,
                    lowPoint[baseDimIdx] - halfWidth,
                    lowPoint[otherDimIdx],
                    lowPoint[baseDimIdx] + halfWidth,
                    lowPoint[otherDimIdx]
                ),
                style: style
            }
        );
    }
    function makeShape(baseDimIdx, base1, value1, base2, value2) {
        var shape = {};
        shape[coordDims[baseDimIdx] + '1'] = base1;
        shape[coordDims[1 - baseDimIdx] + '1'] = value1;
        shape[coordDims[baseDimIdx] + '2'] = base2;
        shape[coordDims[1 - baseDimIdx] + '2'] = value2;
        return shape;
    }
    return group;
}
option = {
    tooltip: {},
    legend: {
        data: ['days', 'product']
    },
    dataZoom: [
        {
            type: 'slider'
        },
        {
            type: 'inside'
        }
    ],
    grid: {
        bottom: 90
    },
    xAxis: {},
    yAxis: {},
    series: [
        {
            type: 'scatter',
            name: '快时尚品牌生产周期与生产量',
            data: data,
            dimensions: dimensions,
            encode: {
                x: 2,
                y: 1,
                tooltip: [2, 1, 3, 4, 5, 6],
                itemName: 0
            },
            itemStyle: {
                color: '#E97A33'
            }
        },
        {
            type: 'custom',
            name: '快时尚品牌生产周期与生产量',
            renderItem: renderItem,
            dimensions: dimensions,
            encode: {
                x: [2, 3, 4],
                y: [1, 5, 6],
                tooltip: [2, 1, 3, 4, 5, 6],
                itemName: 0
            },
            data: data,
            z: 100
        }
    ]
};

if (option && typeof option === 'object') {
    myChart.setOption(option);
}

window.addEventListener('resize', myChart.resize);