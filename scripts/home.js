init();

function init() {
	recommendations()
	news()
	popular()
}


function recommendations() {
	var url = API_DEEZER_URL + "/deezer/user/me/recommendations/playlists";

	$.ajax({
		url: url,
		type: 'GET',
		success: function (result) {
			setResultRecommendation(result.data);
		},
		error: function (e) {
			console.log(e.responseJSON.message)
		}
	});
}

function news() {
	var url = API_DEEZER_URL + "/deezer/genre/0/artists";

	$.ajax({
		url: url,
		type: 'GET',
		success: function (result) {
			setResultNews(result.data);
		},
		error: function (e) {
			console.log(e.responseJSON.message)
		}
	});
}

function popular() {
	var url = API_DEEZER_URL + "/deezer/chart";

	$.ajax({
		url: url,
		type: 'GET',
		success: function (result) {
			setResultPopular(result.playlists.data);
		},
		error: function (e) {
			console.log(e.responseJSON.message)
		}
	});
}


function setResultRecommendation(recomendacions) {
	if (recomendacions.length > 10) {
		recomendacions = recomendacions.slice(0, 10)
	}

	$('#recomendationList').caphList({
		items: recomendacions,
		template: 'template1',
		containerClass: 'list-group',
		wrapperClass: 'list-wrapper',
		onFocusItemView: function (context) {
			console.log('focus', context);
		},
	});

	let albuns = $('#recomendationList').find('.capa');

	albuns.each(function (index) {
		$(this).attr("src", recomendacions[index].picture_medium);
	});

	$('.item-blocos-musics').caphButton({
		onFocused: function (event) {
			let div = $(event.currentTarget).find('div');
			div.css({
				'transform': 'scale(1.2)',
				'background-color': '#FFF',
			});
			console.log("focou item")
		},
		onBlurred: function (event) {
			$(event.currentTarget).find('div').css({
				'transform': 'scale(0.9)',
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
}

function setResultNews(news) {
	if (news.length > 10) {
		news = news.slice(0, 10)
	}

	$('#newsList').caphList({
		items: news,
		template: 'template1',
		containerClass: 'list-group',
		wrapperClass: 'list-wrapper',
	});

	let albuns = $('#newsList').find('.capa');

	albuns.each(function (index) {
		$(this).attr("src", news[index].picture_medium);
	});

	$('.item-blocos-musics').caphButton({
		onFocused: function (event) {
			let div = $(event.currentTarget).find('div');
			div.css({
				'transform': 'scale(1.2)',
				'background-color': '#FFF',
			});
			console.log("focou item")
		},
		onBlurred: function (event) {
			$(event.currentTarget).find('div').css({
				'transform': 'scale(0.9)',
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
}

function setResultPopular(popular) {
	if (popular.length > 10) {
		popular = popular.slice(0, 10)
	}

	$('#popularList').caphList({
		items: popular,
		template: 'template1',
		containerClass: 'list-group',
		wrapperClass: 'list-wrapper',
	});

	let albuns = $('#popularList').find('.capa');

	albuns.each(function (index) {
		$(this).attr("src", popular[index].picture_medium);
	});

	$('.item-blocos-musics').caphButton({
		onFocused: function (event) {
			let div = $(event.currentTarget).find('div');
			div.css({
				'transform': 'scale(1.2)',
				'background-color': '#FFF',
			});
			console.log("focou item")
		},
		onBlurred: function (event) {
			$(event.currentTarget).find('div').css({
				'transform': 'scale(0.9)',
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
}