'use strict';


/**
 * API调用封装
 * @param type:请求模式，get/post
 * @param data:请求的数据，名值
 * @param [successCallback]:请求成功回调函数
 * @param [errorCallback]:请求失败回调函数
 *
 */
var Unit = {
    url: '192.168.1.200',
    // url: "data/",
    ajax: function(options,successCallback, errorCallback) {
        var _defaParams = {
            // appKey: "21725276",
            // view: 1,
            // rows: 10,
            // timestamp: Math.round(new Date().getTime() / 1000)
            // callback: "JSONP"

        };
        var data = options.data || {};
        for (var k in _defaParams) {
            if (typeof data[k] === "undefined") {
                data[k] = _defaParams[k];
            }
        }
        var type = options.type || "GET";
        var api = options.api || '';
        var url = options.url || this.url + api;
        $.ajax({
            type: type,
            url: url,
            data: data,
            dataType: "json",
            success: function(data) {
                Unit.loading("close");
                successCallback(data);
            },
            error: function() {
                Unit.loading("close");
                if (errorCallback) {
                    errorCallback();
                } else {
                    // Unit.toast("服务正在升级中，请稍后再试");
                }
            },
            timeout: 8000
        });
    }
};

// 获取设备可视宽度
Unit.clientWidth = document.body.clientWidth;
// 获取设备可视高度
Unit.clientHeight = document.body.clientHeight;
/**
 * 加载层封装
 * msg[string]: 消息内容
 * type[number]: 加载层类型,若为0则不显示菊花
 * time[number]: 加载层存在时间
 */
Unit.loading = function(msg, type, time) {
    var tpl;
    var msg = msg || '';
    window.loadingDuration = '';
    var msk = ".loading-mask";
    if (window.loadingDuration) {
        clearTimeout(window.loadingDuration);
    }
    if (arguments[0] == "close") {
        $(msk).remove();
        return false;
    }
    if (arguments.length == 2) {
        time = arguments[1];
    }
    if (time > 0) {
        window.loadingDuration = setTimeout(function() {
            $(msk).animate({opacity: 0}, 500, 'ease-out', function() {
                $(msk).remove();
            });
        }, time)
    }
    if ($(msk).length > 0) {
        $(msk).remove();
    }
    if (type == 0) {
        tpl = '<div class="loading-mask">'
                +'<div class="loading">'
                    +'<div>'+msg+'</div>'
                    +'</div>'
                +'</div>';
    } else {
        var msgHtml = '';
        if (msg) {
            msgHtml = '<div class="mt5">'+msg+'</div>';
        }
        tpl = '<div class="loading-mask">'
                +'<div class="loading">'
                    +'<i style="width:40px; height:40px" class="preloader preloader-white"></i>'
                    + msgHtml
                +'</div>'
            +'</div>';
    }
    $("body").append(tpl);
};



/**
 * 获取日期
 * @param  {[string]} type [为'y'，获取现在的年份,为'ym',获取年月,为'm',获取月,为'w',获取周]
 * @return {[type]}      [description]
 */
Unit.getDate = function(type) {
    var date = new Date();
    var y = date.getFullYear();
    var m = fixTime(date.getMonth()+1);
    var w = date.getDay();
    var d = fixTime(date.getDate());
    var r = y +"/"+ m +"/"+ d;
    if (type == 'y') {
        r = y;
    } else if (type == 'ym') {
        r = y + '-' + m;
    } else if (type == 'm') {
        r = m;
    } else if (type == 'w') {
        r = '周' + '日一二三四五六'.charAt(w);
    }
    return r;
};

/**
 * 获取第n天的时间
 * @param n
 * @returns {string}
 * @constructor
 */
Unit.GetDateTime = function(date, n) {
    var dd = new Date(date);
    dd.setDate(dd.getDate()+n);
    var y = dd.getFullYear();
    var m = fixTime(dd.getMonth()+1);
    var d = fixTime(dd.getDate());
    return y+"/"+m+"/"+d;
};

/**
 * 获取地址栏所有参数
 * @return {[type]} [description]
 */
Unit.getSearch = function () {
    var search = window.location.search;
    if (search) {
        var queryArr = search.split('?')[1].split('&');
        var q = {};
        for (var k in queryArr) {
            var qArr = queryArr[k].split('=');
            q[qArr[0]] = qArr[1];
        }
        return q;
    } else {
        return null;
    }
};
/**
 * 加载页面组件
 * @param componentName 组件名称
 */
Unit.loadComponent = function(componentName) {
    // 获取页面参数
    var query = Unit.getSearch();
    require(['view/' + componentName], function(component) {
        component.render(query);
    });
}

function fixTime(d) {
    if (d < 10) {
        d = "0" +d;
    }
    return d;
}

module.exports = Unit;