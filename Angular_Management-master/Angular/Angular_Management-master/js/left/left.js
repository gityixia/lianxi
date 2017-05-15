define('js/left/left', function(require, exports, module) {

    // 定义导航控制器
    require('js/route/route').controller('leftCtrl', function($scope, $rootScope, $element) {

        $scope.idx1 = 0;
        $scope.idx2 = 0;
        // 定义数据
        $scope.list = [{
            id: 1,
            title: 'User',
            class: ['icon-yonghu', 'icon-xiangyou'],
            childList: [{
                title: 'Users List',
                class: 'icon-10',
                link: '#/userlist/1'
            }, {
                title: 'New Users',
                class: 'icon-useradd',
                link: '#/createuser'
            }]
        }, {
            id: 2,
            title: 'News',
            class: ['icon-xinwen1', 'icon-xiangyou'],
            childList: [{
                title: 'News List',
                class: 'icon-baobiaoxinwen',
                link: '#/newslist/1'
            }, {
                title: 'New News',
                class: 'icon-chuangjian-copy',
                link: '#/createnews'
            }]
        }];
        // 绑定切换导航内容事件
        $scope.toggleList = function(e, id) {
            // 获取点击的元素
            var dom = $(e.currentTarget);
            var i = dom.children('i').eq(1);

            dom.siblings('ul').stop(true, true).slideToggle();
            dom.children('i').eq(1).toggleClass('icon-xiangxia');
            dom.parent().siblings().children('ul').stop(true, true).slideUp().siblings('h4').children('i').eq(1).removeClass('icon-xiangxia');
        };
    })


});
