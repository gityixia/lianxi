define('js/news/createNews/createNews', function(require, exports, module) {

    // 创建新闻控制器
    require('js/route/route').controller('createNewsCtrl', function($scope, $http, $location) {
        $scope.goToCreateNews = function() {
            $http
            // 发送请求 提交数据
                .post('action/createnews.php', $scope.data)
                // 提交成功，跳转到列表页
                .success(function(res) {
                    if (res && res.errno === 0) {
                        // 跳转到列表页 默认是第一页
                        $location.path('/newslist/1')
                    } else {
                        alert('添加失败')
                    }
                })

        }
    })


});
