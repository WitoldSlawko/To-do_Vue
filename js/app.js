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

// 0. If using a module system (e.g. via vue-cli), import Vue and VueRouter and then call Vue.use(VueRouter).

// 1. Define route components.
// These can be imported from other files
const Foo = { template: '<div>foo</div>' }
//const Bar = { template: '<div>bar</div>' }

var abc = '<div>abc123</div>'

const Bar = Vue.component('Bar', {
  template: abc
})

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// Vue.extend(), or just a component options object.
// We'll talk about nested routes later.
const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes // short for routes: routes
})

// 4. Create and mount the root instance.
// Make sure to inject the router with the router option to make the
// whole app router-aware.
const test_route = new Vue({
  router
}).$mount('#test_route')
