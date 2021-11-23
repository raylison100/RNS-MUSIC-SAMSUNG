this.init();

function init() {
    let meuStorage = localStorage;
    let id = meuStorage.getItem('playlist');
    console.log(id)

    var url = API_DEEZER_URL + `/deezer/playlist/${id}`;

    $.ajax({
        url: url,
        type: 'GET',
        success: function (result) {
            setPlaylist(result);
        },
        error: function (e) {
            console.log(e.responseJSON.message)
        }
    });
}

function setPlaylist(data) {
    this.setImage(data.picture_medium)
    this.setId(data.id)
    this.setName(data.title)
    this.setMusics(data.tracks.data)
}

function setImage(link) {
    $('.blocos-musics').find('img').attr('src', link)
}

function setId(id) {
    $('#favorite-list').attr('_id', id)
}

function setName(name) {
    $('#playlist-name').html(name)
}

function setMusics(musics) {
    let list = $('#list').find('ul');

    console.log(musics.length)

    $(musics).each(function (index) {
        let html = `
            <li>
                <a class="musics-tracks" id="${musics[index].id}" href="../pages/player.html">${musics[index].title}</a>
                <div focusable class="icon-list-music">
                    <i id="favorite-list" class="material-icons">favorite</i>
                </div>
            </li>
        `
        list.append(html);
    });
}

