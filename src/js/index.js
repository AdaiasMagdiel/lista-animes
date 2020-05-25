document.addEventListener('DOMContentLoaded', function(){
	const url = '';
	const url_ = 'http://localhost:4200/FRONTEND/src/data/data.json';

	const app = new Vue({
		el: '#app',
		data: {
			indexes: 0,
			animes: {}
		},
		methods: {
			loadJSON(){
				axios.get(url).then(res => {
					this.animes = res.data;
				});
			},
			sliceObject(object, min, max){
				const sliced = Object.keys(object).slice(min, max).reduce((result, key) => {
                    result[key] = object[key];

                    return result;
                }, {});

                return sliced;
			},
			checkObjectTotal(object){
				return Object.keys(object).length;
			}
		},
		created(){
			this.loadJSON();
		},
	});
	
});