document.addEventListener('DOMContentLoaded', function(){
	const app = new Vue({
		el: '#app',
		data: {
			limit: 0,
			total: 0,
			initialData: {},
			animes: {},
			end: false
		},
		methods: {
			loadJSON(){
				let oldLimit = this.limit;
				let limit = 3;

				if(this.limit + limit > this.total){
					this.limit = this.total;
					this.end = true;
				} else {
					this.limit += limit;
				}

				let newAnimes = this.sliceObject(this.initialData, oldLimit, this.limit);
				this.animes = {...this.animes, ...newAnimes}
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
			axios.get('https://raw.githubusercontent.com/AdaiasMagdiel/lista-animes/master/src/data/data.json').then(res => {
				this.animes = res.data;
				//this.initialData = res.data;
				//this.total = this.checkObjectTotal(this.initialData);
				//this.loadJSON();
			});
		},
	});
	
});
