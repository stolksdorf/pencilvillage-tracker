require('./main.less');
const React = require('react');
const cx = require('classnames');
const times = (n, fn)=>Array.from(new Array(n * 1), (v, i)=>fn(i));
const { Title } = require('vitreum/headtags');

// const useLocalStorage = (key, init)=>{
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


const useLocalStorage = (key, init)=>{
	const [val, setVal] = React.useState(init);
	React.useEffect(()=>{
		try {
			setVal(JSON.parse(window.localStorage.getItem(key)));
		} catch (err){
		}
	}, []);
	return [val, (newVal)=>{
		window.localStorage.setItem(key, JSON.stringify(newVal));
		setVal(newVal);
	}];
};



const rollD6 = ()=>['⚀', '⚁', '⚂', '⚃', '⚄', '⚅'][Math.floor(Math.random() * 5)];

const DiceSection = ()=>{
	const [dice1, setDice1] = React.useState('⚀');
	const [dice2, setDice2] = React.useState('⚀');
	const [dice3, setDice3] = React.useState('⚀');

	const roll = (setDice)=>{
		const temp = setInterval(()=>setDice(rollD6()), 45);
		setTimeout(()=>clearInterval(temp), 600);
	};

	return <div className='DiceSection'>
		<div className='d6' onClick={()=>roll(setDice1)}>
			{dice1}
		</div>
		<div className='2d6'onClick={()=>{roll(setDice2);roll(setDice3);}}>
			{dice2}
			{dice3}
		</div>
	</div>;
};



function ResourceSection(){
	const [wood, setWood] = useLocalStorage('wood', 0);
	const [stone, setStone] = useLocalStorage('stone', 0);
	const [gold, setGold] = useLocalStorage('gold', 0);
	const [depot, setDepot] = useLocalStorage('depot', 0);

	const maxSize = 4 + 2 * depot;

	const rows = Math.ceil(maxSize / 4);


	const renderBlocks = (res, setRes, max)=>{
		return times(max, (idx)=>{
			const filled = res > idx;
			return <div className={cx('block', { filled })} key={idx} onClick={()=>{
				setRes(res + (filled ? -1 : 1));
			}}><div /></div>;
		});
	};


	return <div className='ResourceSection'>
		<h3>Wood</h3>
		<div className='wood group' style={{ height : `${rows * 3}em` }}>
			{renderBlocks(wood, setWood, maxSize)}
		</div>
		<h3>Stone</h3>
		<div className='stone group' style={{ height : `${rows * 3}em` }}>
			{renderBlocks(stone, setStone, maxSize)}
		</div>
		<h3>Gold</h3>
		<div className='gold group' style={{ height : `${rows * 3}em` }}>
			{renderBlocks(gold, setGold, maxSize)}
		</div>

		<hr />

		<h3>Depots</h3>
		<div className='depots'>
			{renderBlocks(depot, setDepot, 4)}
		</div>

	</div>;

};


function Main({ ...props }){

	return <div className={`Main`} {...props}>
		<Title>Pencilvillage Tracker</Title>

		<h1>Pencilvillage Tracker</h1>

		<ResourceSection />

		<DiceSection />

	</div>;
};

module.exports = Main;