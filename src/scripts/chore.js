import React from 'react'
import Store from './store.js'


const Chores = React.createClass({

	componentWillMount(){
		Store.on('dataUpdated', ()=>{
			this.setState(Store.data)
		})
	},

	getInitialState:function(){
		return Store.data
	},

	render: function(){
		console.log('render function in chores')
		return(
			<div className='container'>
				<ChoresToDo />
				<ChoresResults statInfo={Store.data}/>
			</div>
		)
	}
})

var ChoresToDo = React.createClass({
	render: function(){
		console.log('chores ToDo render function')

		return(
			<div className='buttons'>
				<button type='button' onClick={()=>{Store.sum('strength')}}> Do push ups </button>
				<button type='button' onClick={()=>{Store.sum('knowledge')}}> Read a book </button>
				<button type='button' onClick={()=>{Store.sum('cleanDish')}}> Clean Dishes </button>
				<button type='button' onClick={()=>{Store.sum('health')}}> Eat vegetables </button>
			</div>
		)
	}
})

var ChoresResults = React.createClass({
	render: function(){
		console.log('choresresult render function')
		return(
			<div className='results'>
				<p>Strength: {this.props.statInfo.strength}</p>
				<p>Knowledge: {this.props.statInfo.knowledge}</p>
				<p>Clean Dishes: {this.props.statInfo.cleanDish}</p>
				<p>Healthiness: {this.props.statInfo.health}</p>
				<p>Chores Done so far: {this.props.statInfo.chores}</p>
			</div>

		)
	}
})

export default Chores