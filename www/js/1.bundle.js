webpackJsonp([1],{

/***/ 164:
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./cart_content": 165,
		"./cart_content.js": 165,
		"./home_content": 162,
		"./home_content.js": 162,
		"./me_content": 166,
		"./me_content.js": 166,
		"./router2": 167,
		"./router2.js": 167,
		"./sort_content": 168,
		"./sort_content.js": 168
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 164;


/***/ },

/***/ 167:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var Unit = __webpack_require__(163);
	
	module.exports = {
	    render: function render(query) {
	
	        console.log(query.id);
	        /*React.render(
	            <Bedlist code={query} />,
	            document.getElementById("home_content")
	        );*/
	    }
	};

/***/ }

});
//# sourceMappingURL=1.bundle.js.map