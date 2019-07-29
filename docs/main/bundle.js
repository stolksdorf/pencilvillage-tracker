(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.main = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({"C:\\Dropbox\\root\\Programming\\Javascript\\pencilvillage\\client\\main\\main.jsx":[function(require,module,exports){
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

},{}]},{},[])("C:\\Dropbox\\root\\Programming\\Javascript\\pencilvillage\\client\\main\\main.jsx")
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJjbGllbnQvbWFpbi9tYWluLmpzeCIsImNsaWVudC9tYWluL21haW4ubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxSEEiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJmdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG5yZXF1aXJlKCcuL21haW4ubGVzcycpO1xuXG5jb25zdCBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbmNvbnN0IGN4ID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG5jb25zdCB0aW1lcyA9IChuLCBmbikgPT4gQXJyYXkuZnJvbShuZXcgQXJyYXkobiAqIDEpLCAodiwgaSkgPT4gZm4oaSkpO1xuXG5jb25zdCB7XG4gIFRpdGxlXG59ID0gcmVxdWlyZSgndml0cmV1bS9oZWFkdGFncycpOyAvLyBjb25zdCB1c2VMb2NhbFN0b3JhZ2UgPSAoa2V5LCBpbml0KT0+e1xuLy8gXHRjb25zdCBbdmFsLCBzZXRWYWxdID0gUmVhY3QudXNlU3RhdGUoKCk9Pntcbi8vIFx0XHR0cnkge1xuLy8gXHRcdFx0cmV0dXJuIEpTT04ucGFyc2Uod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkpO1xuLy8gXHRcdH0gY2F0Y2ggKGVycil7XG4vLyBcdFx0XHRyZXR1cm4gaW5pdDtcbi8vIFx0XHR9XG4vLyBcdH0pO1xuLy8gXHRyZXR1cm4gW3ZhbCwgKG5ld1ZhbCk9Pntcbi8vIFx0XHR3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeShuZXdWYWwpKTtcbi8vIFx0XHRzZXRWYWwobmV3VmFsKTtcbi8vIFx0fV07XG4vLyB9O1xuXG5cbmNvbnN0IHVzZUxvY2FsU3RvcmFnZSA9IChrZXksIGluaXQpID0+IHtcbiAgY29uc3QgW3ZhbCwgc2V0VmFsXSA9IFJlYWN0LnVzZVN0YXRlKGluaXQpO1xuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBzZXRWYWwoSlNPTi5wYXJzZSh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSkpO1xuICAgIH0gY2F0Y2ggKGVycikge31cbiAgfSwgW10pO1xuICByZXR1cm4gW3ZhbCwgbmV3VmFsID0+IHtcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeShuZXdWYWwpKTtcbiAgICBzZXRWYWwobmV3VmFsKTtcbiAgfV07XG59O1xuXG5jb25zdCByb2xsRDYgPSAoKSA9PiBbJ+KagCcsICfimoEnLCAn4pqCJywgJ+KagycsICfimoQnLCAn4pqFJ11bTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNSldO1xuXG5jb25zdCBEaWNlU2VjdGlvbiA9ICgpID0+IHtcbiAgY29uc3QgW2RpY2UxLCBzZXREaWNlMV0gPSBSZWFjdC51c2VTdGF0ZSgn4pqAJyk7XG4gIGNvbnN0IFtkaWNlMiwgc2V0RGljZTJdID0gUmVhY3QudXNlU3RhdGUoJ+KagCcpO1xuICBjb25zdCBbZGljZTMsIHNldERpY2UzXSA9IFJlYWN0LnVzZVN0YXRlKCfimoAnKTtcblxuICBjb25zdCByb2xsID0gc2V0RGljZSA9PiB7XG4gICAgY29uc3QgdGVtcCA9IHNldEludGVydmFsKCgpID0+IHNldERpY2Uocm9sbEQ2KCkpLCA0NSk7XG4gICAgc2V0VGltZW91dCgoKSA9PiBjbGVhckludGVydmFsKHRlbXApLCA2MDApO1xuICB9O1xuXG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBjbGFzc05hbWU6IFwiRGljZVNlY3Rpb25cIlxuICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBjbGFzc05hbWU6IFwiZDZcIixcbiAgICBvbkNsaWNrOiAoKSA9PiByb2xsKHNldERpY2UxKVxuICB9LCBkaWNlMSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogXCIyZDZcIixcbiAgICBvbkNsaWNrOiAoKSA9PiB7XG4gICAgICByb2xsKHNldERpY2UyKTtcbiAgICAgIHJvbGwoc2V0RGljZTMpO1xuICAgIH1cbiAgfSwgZGljZTIsIGRpY2UzKSk7XG59O1xuXG5mdW5jdGlvbiBSZXNvdXJjZVNlY3Rpb24oKSB7XG4gIGNvbnN0IFt3b29kLCBzZXRXb29kXSA9IHVzZUxvY2FsU3RvcmFnZSgnd29vZCcsIDApO1xuICBjb25zdCBbc3RvbmUsIHNldFN0b25lXSA9IHVzZUxvY2FsU3RvcmFnZSgnc3RvbmUnLCAwKTtcbiAgY29uc3QgW2dvbGQsIHNldEdvbGRdID0gdXNlTG9jYWxTdG9yYWdlKCdnb2xkJywgMCk7XG4gIGNvbnN0IFtkZXBvdCwgc2V0RGVwb3RdID0gdXNlTG9jYWxTdG9yYWdlKCdkZXBvdCcsIDApO1xuICBjb25zdCBtYXhTaXplID0gNCArIDIgKiBkZXBvdDtcbiAgY29uc3Qgcm93cyA9IE1hdGguY2VpbChtYXhTaXplIC8gNCk7XG5cbiAgY29uc3QgcmVuZGVyQmxvY2tzID0gKHJlcywgc2V0UmVzLCBtYXgpID0+IHtcbiAgICByZXR1cm4gdGltZXMobWF4LCBpZHggPT4ge1xuICAgICAgY29uc3QgZmlsbGVkID0gcmVzID4gaWR4O1xuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICBjbGFzc05hbWU6IGN4KCdibG9jaycsIHtcbiAgICAgICAgICBmaWxsZWRcbiAgICAgICAgfSksXG4gICAgICAgIGtleTogaWR4LFxuICAgICAgICBvbkNsaWNrOiAoKSA9PiB7XG4gICAgICAgICAgc2V0UmVzKHJlcyArIChmaWxsZWQgPyAtMSA6IDEpKTtcbiAgICAgICAgfVxuICAgICAgfSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsKSk7XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogXCJSZXNvdXJjZVNlY3Rpb25cIlxuICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaDNcIiwgbnVsbCwgXCJXb29kXCIpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBjbGFzc05hbWU6IFwid29vZCBncm91cFwiLFxuICAgIHN0eWxlOiB7XG4gICAgICBoZWlnaHQ6IGAke3Jvd3MgKiAzfWVtYFxuICAgIH1cbiAgfSwgcmVuZGVyQmxvY2tzKHdvb2QsIHNldFdvb2QsIG1heFNpemUpKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImgzXCIsIG51bGwsIFwiU3RvbmVcIiksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogXCJzdG9uZSBncm91cFwiLFxuICAgIHN0eWxlOiB7XG4gICAgICBoZWlnaHQ6IGAke3Jvd3MgKiAzfWVtYFxuICAgIH1cbiAgfSwgcmVuZGVyQmxvY2tzKHN0b25lLCBzZXRTdG9uZSwgbWF4U2l6ZSkpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaDNcIiwgbnVsbCwgXCJHb2xkXCIpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBjbGFzc05hbWU6IFwiZ29sZCBncm91cFwiLFxuICAgIHN0eWxlOiB7XG4gICAgICBoZWlnaHQ6IGAke3Jvd3MgKiAzfWVtYFxuICAgIH1cbiAgfSwgcmVuZGVyQmxvY2tzKGdvbGQsIHNldEdvbGQsIG1heFNpemUpKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImhyXCIsIG51bGwpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaDNcIiwgbnVsbCwgXCJEZXBvdHNcIiksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogXCJkZXBvdHNcIlxuICB9LCByZW5kZXJCbG9ja3MoZGVwb3QsIHNldERlcG90LCA0KSkpO1xufVxuXG47XG5cbmZ1bmN0aW9uIE1haW4oX3JlZikge1xuICBsZXQgcHJvcHMgPSBfZXh0ZW5kcyh7fSwgX3JlZik7XG5cbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgX2V4dGVuZHMoe1xuICAgIGNsYXNzTmFtZTogYE1haW5gXG4gIH0sIHByb3BzKSwgUmVhY3QuY3JlYXRlRWxlbWVudChUaXRsZSwgbnVsbCwgXCJQZW5jaWx2aWxsYWdlIFRyYWNrZXJcIiksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoMVwiLCBudWxsLCBcIlBlbmNpbHZpbGxhZ2UgVHJhY2tlclwiKSwgUmVhY3QuY3JlYXRlRWxlbWVudChSZXNvdXJjZVNlY3Rpb24sIG51bGwpLCBSZWFjdC5jcmVhdGVFbGVtZW50KERpY2VTZWN0aW9uLCBudWxsKSk7XG59XG5cbjtcbm1vZHVsZS5leHBvcnRzID0gTWFpbjsiLCIiXX0=
