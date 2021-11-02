
var items = [];

for(var i=0; i<20; i++){				
	items.push({
		id : i+1,
	});
	
	console.log(i);
}

$('#recomendationList').caphList({
	items : items,
	template: 'template1',
	containerClass: 'list-group',
	wrapperClass: 'wrapper',


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

$('#newsList').caphList({
	items : items,
	template: 'template1',

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

$('#popularList').caphList({
	items : items,
	template: 'template1',

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

$('.item-blocos-musics').caphButton({
    onFocused: function (event) {
		$(event.currentTarget).find('div').css({
			'transform': 'scale(1.2)',
			'background-color': '#FFF',
        });
        console.log("focou item")
    },
    onBlurred: function (event) {
		$(event.currentTarget).find('div').css({
            'transform': 'scale(1)',
			'background-color': '#000',
        });
        console.log("focou item")
    },
    toggle: true,
    onSelected: function (event, selected) {
	     location.href = "../pages/musics.html";
         console.log("clicou item")
    }
});



$('.blocos-musics').css({
		'width': '180px',
		'height' : '180px',
})