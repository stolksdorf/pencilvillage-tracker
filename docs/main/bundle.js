(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.main = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({"C:\\Dropbox\\root\\Programming\\Javascript\\pencilvillage-tracker\\client\\main\\main.jsx":[function(require,module,exports){
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

require('./main.less');

const React = require('react');

const cx = require('classnames');

const times = (n, fn) => Array.from(new Array(n * 1), (v, i) => fn(i));

const {
  Title
} = require('vitreum/headtags'); // const useLocalStorage = (key, init)=>{
// 	const [val, setVal] = React.useState(()=>{
// 		try {
// 			return JSON.parse(window.localStorage.getItem(key));
// 		} catch (err){
// 			return init;
// 		}
// 	});
// 	return [val, (newVal)=>{
// 		window.localStorage.setItem(key, JSON.stringify(newVal));
// 		setVal(newVal);
// 	}];
// };


const useLocalStorage = (key, init) => {
  const [val, setVal] = React.useState(init);
  React.useEffect(() => {
    try {
      setVal(JSON.parse(window.localStorage.getItem(key)));
    } catch (err) {}
  }, []);
  return [val, newVal => {
    window.localStorage.setItem(key, JSON.stringify(newVal));
    setVal(newVal);
  }];
};

const rollD6 = () => ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅'][Math.floor(Math.random() * 5)];

const DiceSection = () => {
  const [dice1, setDice1] = React.useState('⚀');
  const [dice2, setDice2] = React.useState('⚀');
  const [dice3, setDice3] = React.useState('⚀');

  const roll = setDice => {
    const temp = setInterval(() => setDice(rollD6()), 45);
    setTimeout(() => clearInterval(temp), 600);
  };

  return React.createElement("div", {
    className: "DiceSection"
  }, React.createElement("div", {
    className: "d6",
    onClick: () => roll(setDice1)
  }, dice1), React.createElement("div", {
    className: "2d6",
    onClick: () => {
      roll(setDice2);
      roll(setDice3);
    }
  }, dice2, dice3));
};

function ResourceSection() {
  const [wood, setWood] = useLocalStorage('wood', 0);
  const [stone, setStone] = useLocalStorage('stone', 0);
  const [gold, setGold] = useLocalStorage('gold', 0);
  const [depot, setDepot] = useLocalStorage('depot', 0);
  const maxSize = 4 + 2 * depot;
  const rows = Math.ceil(maxSize / 4);

  const renderBlocks = (res, setRes, max) => {
    return times(max, idx => {
      const filled = res > idx;
      return React.createElement("div", {
        className: cx('block', {
          filled
        }),
        key: idx,
        onClick: () => {
          setRes(res + (filled ? -1 : 1));
        }
      }, React.createElement("div", null));
    });
  };

  return React.createElement("div", {
    className: "ResourceSection"
  }, React.createElement("h3", null, "Wood"), React.createElement("div", {
    className: "wood group",
    style: {
      height: `${rows * 3}em`
    }
  }, renderBlocks(wood, setWood, maxSize)), React.createElement("h3", null, "Stone"), React.createElement("div", {
    className: "stone group",
    style: {
      height: `${rows * 3}em`
    }
  }, renderBlocks(stone, setStone, maxSize)), React.createElement("h3", null, "Gold"), React.createElement("div", {
    className: "gold group",
    style: {
      height: `${rows * 3}em`
    }
  }, renderBlocks(gold, setGold, maxSize)), React.createElement("hr", null), React.createElement("h3", null, "Depots"), React.createElement("div", {
    className: "depots"
  }, renderBlocks(depot, setDepot, 4)));
}

;

function Main(_ref) {
  let props = _extends({}, _ref);

  return React.createElement("div", _extends({
    className: `Main`
  }, props), React.createElement(Title, null, "Pencilvillage Tracker"), React.createElement("h1", null, "Pencilvillage Tracker"), React.createElement(ResourceSection, null), React.createElement(DiceSection, null));
}

;
module.exports = Main;
},{"./main.less":1,"classnames":undefined,"react":undefined,"vitreum/headtags":undefined}],1:[function(require,module,exports){

},{}]},{},[])("C:\\Dropbox\\root\\Programming\\Javascript\\pencilvillage-tracker\\client\\main\\main.jsx")
});
