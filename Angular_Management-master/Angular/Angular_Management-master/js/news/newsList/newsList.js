define('js/news/newsList/newsList', function(require, exports, module) {

    // 新闻列表控制器
    require('js/route/route').controller('newsListCtrl', function($scope, $http, $stateParams) {
        $scope.num = $stateParams.pageNum;
        // 获取数据
        $http
            .get('action/newslist.php')
            .success(function(res) {
                if (res && res.errno === 0) {
                    $scope.list = res.data;
                }
            });
    })


});
