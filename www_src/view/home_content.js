'use strict';
var React = require('react');
var Unit = require('lib/unit')
var Service = require('../service');

var HomeContent = React.createClass({
    getInitialState: function() {
        return {
            data: []
        }
    },
	render: function () {
        var dataList = this.state.data.map(function(data, index) {
            return (
                <li className="item-content">
                    <div className="item-inner">
                        <div className="item-title">{data.name}</div>
                        <div className="item-after">{data.age}</div>
                    </div>
                </li>    
            );
        });
        return (
            <div className="content-block">
            	这里是首页
            	<p>
            		<a href="view/router2.html?id=21">ajax加载新页面</a>
            	</p>
                <div className="list-block">
                    <ul>
                        {dataList}
                    </ul>
                </div>
            </div>
        );
    },
    // dom渲染后执行
    componentDidMount: function() {
        var that = this;
        Service.user(function(data) {
            that.setState({
                data: data
            });
        });
    }
});

module.exports = HomeContent;