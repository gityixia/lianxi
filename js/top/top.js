define('js/top/top', function(require, exports, module) {

    // 定义top控制器
    require('js/route/route').controller('topCtrl', function($scope) {
        $scope.enter1 = function() {
            $('#mess').stop(true, true).slideDown(200).animate({ opacity: 1 }, 400);
        };
        $scope.leave1 = function() {
            $('#mess').stop(true, true).animate({ opacity: 0 }, 400).slideUp(200);
        };
        $scope.enter2 = function() {
            $('#notification').stop(true, true).slideDown(200).animate({ opacity: 1 }, 400);
        };
        $scope.leave2 = function() {
            $('#notification').stop(true, true).animate({ opacity: 0 }, 400).slideUp(200);
        };

    })


});
