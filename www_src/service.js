'use strict';
var Unit = require('lib/unit');


// 定义服务类
var Service = {};


Unit.url = "data/";

// 用户登录
Service.user = function(callback) {
    Unit.ajax({
        api: 'data.json'
    }, function(data) {
        callback(data);
    });
};

module.exports = Service;