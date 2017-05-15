define('js/login/login', function(require, exports, module) {

    // 登录页控制器
    require('js/route/route').controller('loginCtrl', function($scope, $http, $location, $rootScope) {
        // 定义提交事件
        $scope.intoHome = function() {
            // post请求提交数据
            $http
                .post('action/login.php', $scope.data)
                .success(function(res) {
                    // 判断请求成功返回数据
                    if (res && res.errno === 0) {
                        // 保存数据
                        $rootScope.username = res.data.username;
                        $location.path('/');
                    } else {
                        alert('登录失败');
                    }
                });
        };
    })


});
