var Testo = ('../components/Testo.vue');

var test = new Vue ({
	el:'#test',
	render: (function (h) {
  	return h(Testo);
	})
})