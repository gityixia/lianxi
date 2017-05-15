define('js/user/userList/userList', function(require, exports, module) {

    // 用户列表控制器
    require('js/route/route').controller('userListCtrl', function($scope, $stateParams, $http) {
        // 保存页码
        $scope.num = $stateParams.pageNum;
        $http
        // 获取数据
            .get('action/userlist.json', {
                params: {
                    num: $scope.num
                }
            })
            // 监听返回的数据
            .success(function(res) {
                if (res && res.errno === 0 && res.list) {
                    // 存储数据
                    $scope.list = res.list;
                } else {
                    alert('请求的数据不存在')
                }
            });
    })


});
