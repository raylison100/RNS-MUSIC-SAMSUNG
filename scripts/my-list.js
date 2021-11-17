init();

function init(){
	favorits()
}

function favorits(){
	var url = API_DEEZER_URL + "/deezer/user/me/playlists";

	$.ajax({
		url: url,
		type: 'GET',
		success: function (result) {
			setResultFavorits(result.data);
		},
		error:function (e) {
			console.log(e.responseJSON.message)
		}
	});
}

function setResultFavorits(favorits){
	if(favorits.length > 5){
		for (var i = 0; i < 5; i++) {
			$('#list').append(`
				<div style='display: none;' class="item-blocos-musics" focusable data-focusable-depth="0" data-focusable-group="list">
					<a  href="../pages/musics.html">
						<div class="blocos-musics"></div>
					</a>  
				</div>  
			`)
		}
	}

	$.each( favorits, function() {
		$('#list').append(`
			<div class="item-blocos-musics" focusable data-focusable-depth="0" data-focusable-group="list">
				<a  href="../pages/musics.html">
					<div class="blocos-musics"></div>
				</a>  
			</div>  
		`)
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
}

