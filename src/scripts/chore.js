import React from 'react'
import Store from './store'


const Chores = React.createClass({

	componentWillMount(){
		Store.on('dataUpdated', ()=>{
			this.setState(store.data)
		})
	},

	getInitialState:function(){
		return Store.data
	},

	render: function(){
		return(
			<div className='container'>
				<choresToDo />
				<choresResults />
			</div>
		)
	}
})

var choresTodo = React.createClass({
	render: function(){
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

var choresResults = React.createClass({
	render: function(){
		return(
			<div className='results'>
				<p>Strength: {this.props.Store.data.strength}</p>
				<p>Knowledge: {this.props.Store.data.knowledge}</p>
				<p>Clean Dishes: {this.props.Store.data.cleanDish}</p>
				<p>Healthiness: {this.props.Store.data.health}</p>
				<p>Chores Done so far: {this.props.Store.data.chores}</p>
			</div>

		)
	}
})

export default Chores