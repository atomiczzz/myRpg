import Backbone from 'backbone'

var  Store = Object.assign({},Backbone.Events,{
	data:{
		strength: 0,
		knowledge: 0,
		cleanDish: 0,
		health: 0,
		chores: 0
	},

	sum: function(objKey){
		this.data[objKey] += 1
		this.data.chores +=1
		this.data = Object.assign(this.data, this.data[objKey], this.data.choresDone)
		this.trigger('dataUpdated')
	}
})


export default Store
