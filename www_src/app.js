'use strict';
window.Zepto = window.$ = require('webpack-zepto');
$.config = {
    autoInit: false,
    showPageLoadingIndicator: false // ajax加载页面关闭加载指示器
};
require('lib/sm.js');
require('lib/sm-extend.js');
require('lib/sm-city-picker.js');
var React = require('react');
var HomeContent = require('view/home_content');
var SortContent = require('view/sort_content');
var CartContent = require('view/cart_content');
var MeContent = require('view/me_content');
var Unit = require('lib/unit');

$(document).on('pageInit', function(e, pageId, $page) {
	// 加载子页面组件
    Unit.loadComponent(pageId);
});

// 首页
React.render(
    <HomeContent />,
    document.getElementById("home_content")
);

$('#home_content').on('show', function(e) {
    
});

// 分类
$('#sort_content').on('show', function(e) {
    React.render(
	    <SortContent />,
	    document.getElementById("sort_content")
	);
});

// 购物车
$('#cart_content').on('show', function(e) {
    React.render(
	    <CartContent />,
	    document.getElementById("cart_content")
	);
});

// 我的
$('#me_content').on('show', function(e) {
   	React.render(
	    <MeContent />,
	    document.getElementById("me_content")
	);
});