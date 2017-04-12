var app = new Vue({
	el: '#app',
	data: {
		todo: {
			title: '',
			text: '',
			assign: ''
		},
		todos: [
			{
				title: 'Learn JS',
				text: "What is JS?"
			},
			{
				title: 'Learn vue',
				text: "Vue has nice docs!"
			},
			{
				title: 'Build something',
				text: "what to build?"
			}
    ]
	},
	methods: {
		AddTodo: function (item) {
			this.todos.push(this.todo)
			this.todo = {title:'', text:'', assign:''}
		}
	}
})
