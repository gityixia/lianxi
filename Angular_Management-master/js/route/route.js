define('js/route/route', function(require, exports, module) {
    module.exports = angular.module('myApp', ['ui.router'])
        // 定义配置
        .config(function($stateProvider) {
            $stateProvider
            // 首页状态
                .state('home', {
                    url: '/',
                    templateUrl: 'view/home.tpl',
                    controller: 'homeCtrl'
                })
                // 登录页状态
                .state('login', {
                    url: '/login',
                    templateUrl: 'view/login.tpl',
                    controller: 'loginCtrl'
                })
                // 定义六个页面的状态
                // 用户相关的有三个页面
                .state('createUser', {
                    url: '/createuser',
                    templateUrl: 'view/user/createuser.tpl',
                    controller: 'createUserCtrl'
                })
                // 用户列表页面
                .state('userList', {
                    url: '/userlist/:pageNum',
                    templateUrl: 'view/user/list.tpl',
                    controller: 'userListCtrl'
                })
                // 用户详情页面
                .state('userDetail', {
                    url: '/userdetail/:userId',
                    templateUrl: 'view/user/detail.tpl',
                    controller: 'userDetailCtrl'
                })
                // 新闻列表
                .state('newsList', {
                    url: '/newslist/:pageNum',
                    templateUrl: 'view/news/list.tpl',
                    controller: 'newsListCtrl'
                })
                // 新闻详情
                .state('newsDetail', {
                    url: '/newsdetail/:newsId',
                    templateUrl: 'view/news/detail.tpl',
                    controller: 'newsDetailCtrl'
                })
                // 创建新闻
                .state('createNews', {
                    url: '/createnews',
                    templateUrl: 'view/news/create.tpl',
                    controller: 'createNewsCtrl'
                });
        })
        .run(function($rootScope, $http, $location) {
            // 监听传送的消息
            $rootScope.$on('username', function(obj, username) {
                    $rootScope.username = username
                })
                // 检测是否登录
            $http
                .get('action/checkLogin.php')
                // 成功时候回调函数
                .success(function(res) {
                    // 检测是否有data数据，
                    // 有data数据，说明登录了
                    if (res && res.errno === 0 && res.data) {
                        // 存储数据
                        $rootScope.username = res.data.username;
                        // 登录成功，进入首页
                        $location.path('/');
                    } else {
                        // 进入登录页面
                        $location.path('/login');
                    }
                });
            // 在路由事件中检测登录，就不需要在每一个页面中检测了
            $rootScope.$on('$stateChangeSuccess', function() {
                if ($rootScope.username === undefined) {
                    // 没有登录跳转到登录页
                    $location.path('/login');
                }
            });
        });


});
