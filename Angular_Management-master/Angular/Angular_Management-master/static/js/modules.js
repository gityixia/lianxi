;/*!js/route/route.js*/
define('js/route/route', function(require, exports, module) {

  // 引入子模块
  
  
  // 根作用域检测是否登录
  // 获取应用程序
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
                  // console.log(arguments)
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

;/*!js/home/home.js*/
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
              // 隐藏
              // enabled: false,
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
              text: 'Github',
              href: 'http://127.0.0.1:8080/#/',
              // 设置显示的样式
              style: {
                  color: '#999',
                  fontSize: '12px'
              },
              // 隐藏
              // enabled: false,
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

;/*!js/login/login.js*/
define('js/login/login', function(require, exports, module) {

  // 登录页控制器
  require('js/route/route').controller('loginCtrl', function($scope, $http, $location, $rootScope) {
      // 定义提交事件
      $scope.intoHome = function() {
          // console.log($scope.data)
          // post请求提交数据
          $http
              .post('action/login.php', $scope.data)
              .success(function(res) {
                  // console.log(res)
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

;/*!js/top/top.js*/
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

;/*!js/left/left.js*/
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
              // 对于用户列表，我们发送请求的时候，要携带请求的页面，
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

;/*!js/news/createNews/createNews.js*/
define('js/news/createNews/createNews', function(require, exports, module) {

  // 创建新闻控制器
  require('js/route/route').controller('createNewsCtrl', function($scope, $http, $location) {
      $scope.goToCreateNews = function() {
          // console.log($scope.data)
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

;/*!js/news/newsList/newsList.js*/
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

;/*!js/user/createUser/createUser.js*/
define('js/user/createUser/createUser', function(require, exports, module) {

  // 用户创建页面控制器
  require('js/route/route').controller('createUserCtrl', function($scope, $http, $location) {
      $scope.goToCreateUser = function() {
          // console.log($scope.data)
          $http
          // 发送请求 提交数据
              .post('action/createuser.php', $scope.data)
              // 提交成功，跳转到列表页
              .success(function(res) {
                  if (res && res.errno === 0) {
                      // 跳转到列表页 默认是第一页
                      $location.path('/userlist/1')
                  } else {
                      alert('注册失败')
                  }
              })
  
      }
  })
  

});

;/*!js/user/userList/userList.js*/
define('js/user/userList/userList', function(require, exports, module) {

  // 用户列表控制器
  require('js/route/route').controller('userListCtrl', function($scope, $stateParams, $http) {
      // 保存页码
      $scope.num = $stateParams.pageNum;
      // $('.dropdown-toggle').dropdown();
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
                  // alert('请求的数据不村咋')
              }
              // console.log($scope)
          });
      // console.log($stateParams)
  })
  

});

;/*!js/bootstrap.js*/
define('js/bootstrap', function(require, exports, module) {

  require("js/route/route");
  require("js/home/home");
  require("js/login/login");
  require("js/top/top");
  require("js/left/left");
  require("js/news/createNews/createNews");
  require("js/news/newsList/newsList");
  require("js/user/createUser/createUser");
  require("js/user/userList/userList");
  

});
