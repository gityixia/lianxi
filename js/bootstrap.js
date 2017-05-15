define('js/bootstrap', function(require, exports, module) {
    // 引入所有模块
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
