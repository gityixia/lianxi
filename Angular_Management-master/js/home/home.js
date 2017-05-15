define('js/home/home', function(require, exports, module) {

    // 首页控制器
    require('js/route/route').controller('homeCtrl', function($scope, $interval, $http, $element) {
        // 定义时间
        $scope.day = new Date();
        $scope.time = new Date();
        // 循环定时器
        $interval(function() {
            // 更新时间
            $scope.day = new Date();
            $scope.time = new Date();
        }, 1000);

        // 数据表格
        // 获取容器元素
        $('.chart-1').highcharts({
            title: {
                text: '2016 Monthly Visits Statistics'
            },
            xAxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },
            plotOptions: {
                area: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true
                }
            },
            series: [{
                type: 'area',
                name: 'Visits Statistics',
                data: [29, 71, 106, 129, 144, 176, 135, 148, 216, 194, 95, 54]
            }],
            credits: {
                // 定义内容
                text: 'Github',
                href: 'http://127.0.0.1:8080/#/',
                // 设置显示的样式
                style: {
                    color: '#999',
                    fontSize: '12px'
                },
                position: {
                    x: -20
                }
            }

        });
        // 第二个图表
        // 构建图表
        $('.chart-2').highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },
            title: {
                text: 'Each browser traffic percentage graph'
            },
            tooltip: {
                headerFormat: '{series.name}<br>',
                pointFormat: '{point.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true
                }
            },
            series: [{
                type: 'pie',
                name: 'Browsers traffic',
                data: [
                    ['Firefox', 45.0],
                    ['IE', 26.8], {
                        name: 'Chrome',
                        y: 12.8,
                        sliced: true,
                        selected: true
                    },
                    ['Safari', 8.5],
                    ['Opera', 6.2],
                    ['其他', 0.7]
                ]
            }],
            credits: {
                // 定义内容
                text: 'Skyblue',
                href: 'http://127.0.0.1:8080/#/',
                // 设置显示的样式
                style: {
                    color: '#999',
                    fontSize: '12px'
                },
                position: {
                    x: -20
                }
            }
        });

        // 评论数据获取
        $http.
        get('action/home.json')
            .success(function(res) {
                if (res && res.errno === 0) {
                    $scope.data = res.data;
                }
            });
    })


});
