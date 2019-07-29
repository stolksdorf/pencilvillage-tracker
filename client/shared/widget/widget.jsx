require('./widget.less');
const React = require('react');


function Widget({ ...props }){
	return <div className={`Widget`} {...props}>
		Widget Component Ready.
	</div>;
};

module.exports = Widget;