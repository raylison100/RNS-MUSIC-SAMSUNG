
var items = [];

for(var i=0; i<20; i++){				
	items.push({
		id : i+1,
	});
	
	console.log(i);
}

$('#recomendation-list').caphList({
	items : items,
	template: 'template1',

	onFocused: function (event) {
		$(event.currentTarget).css({
			'background-color': '#a71717',
	 	});
	 console.log("focou item")
 	},
	 
	onFocusItemView: function(context) {
		console.log('focus', context);
		context.onFocused
	},
	onReachStart: function(context) {
		console.log('reach start', context);
	},
	onReachEnd: function(context) {
		console.log('reach end', context);
	},
	onScrollStart: function(context) {
		console.log('scroll start!', context);
	},
	onScrollFinish: function(context) {
		console.log('scroll finish!', context);
	}
});