var playlist_id = '';

this.init();

function init() {
    let meuStorage = localStorage;
    playlist_id = meuStorage.getItem('playlist');
    meuStorage.setItem('music', 'empty');

    var url = API_DEEZER_URL + "/deezer/user/me/playlists";

    $.ajax({
        url: url,
        type: 'GET',
        success: function (result) {
            setResultFavorits(playlist_id, result.data);
        },
        error: function (e) {
            console.log(e.responseJSON.message)
        }
    });

    url = API_DEEZER_URL + `/deezer/playlist/${playlist_id}`;

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

function setResultFavorits(id, list) {
    list = list.map((item) => { return item.id })
    favorited = list.filter((item) => { return item == id })

    if (favorited.length > 0) {
        $('#favorite-list').css({
            "color": "#a71717",
        });

        $('#favorite-list').addClass('active');
    }
}

function setPlaylist(data) {
    this.setImage(data.picture_medium)
    this.setId(data.id)
    this.setName(data.title)
    this.setMusics(data.tracks.data)
    this.setMusicsFavorites(data.tracks.data)
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

    $(musics).each(function (index) {
        let html = `
            <li>
                <span focusable class="musics-tracks" id="${musics[index].id}">${musics[index].title}</span>
                <div focusable class="icon-list-music">
                    <i id="favorite-list" class="material-icons icon" _id=${musics[index].id}>favorite</i>
                </div>
            </li>
        `
        list.append(html);
    });

    $('.musics-tracks').caphButton({
        onFocused: function (event) {
            $(event.currentTarget).css({
                "background-color": "#a71717",
                "color": "#FFF"
            });
            console.log("focou item")
        },
        onBlurred: function (event) {
            $(event.currentTarget).css({
                "background-color": "#FFF",
                "color": "#000"
            });
            console.log("focou item")
        },
        toggle: true,
        onSelected: function (event) {
            let id = $(event.currentTarget).attr('id');
            let meuStorage = localStorage;
            meuStorage.setItem('music', id);
            console.log(id)
            location.href = `../pages/player.html`;
        }
    });

    $('.icon').caphButton({
        onFocused: function (event) {
            $(event.currentTarget).css({
                'transform': 'scale(1.3)',
                'border': '2px solid #FFF',
                'border-radius': '25px'
            });
            console.log("focou item")
        },
        onBlurred: function (event) {
            $(event.currentTarget).css({
                'transform': 'scale(1)',
                'border': 'none',
            });
            console.log("focou item")
        },
        toggle: true,
        onSelected: function (event) {
            let track_id = $(event.currentTarget).attr('_id');

            if (!$(event.currentTarget).hasClass('active')) {
                var url = API_DEEZER_URL + "/deezer/create/user/1458941346/tracks?track_id=" + track_id;

                $.ajax({
                    url: url,
                    type: 'POST',
                    success: function () {
                        console.log('Favoritou track')
                        $(event.currentTarget).css({
                            "color": "#a71717",
                        });
                    },
                    error: function (e) {
                        console.log(e.responseJSON.message)
                    }
                });
            } else {

                var url = API_DEEZER_URL + "/deezer/delete/user/1458941346/tracks?track_id=" + track_id;

                $.ajax({
                    url: url,
                    type: 'DELETE',
                    success: function () {
                        console.log('Des Favoritou track')
                        $(event.currentTarget).css({
                            "color": "#FFF",
                        });
                    },
                    error: function (e) {
                        console.log(e.responseJSON.message)
                    }
                });
            }
        }
    });
}

function setMusicsFavorites(musics) {
    var url = API_DEEZER_URL + "/deezer/playlist/2966492746";

    tracks = $.ajax({
        url: url,
        type: 'GET',
        success: function (result) {
            validTrack(musics, result.tracks.data)
        },
        error: function (e) {
            console.log(e.responseJSON.message)
        }
    });
}

function validTrack(musics, myTracks) {
    myTracks = myTracks.map((item) => { return item.id })

    musics.forEach(element => {
        favorited = myTracks.filter((item) => { return item == element.id })

        if (favorited.length > 0) {
            $("[_id=" + element.id + "]").css({
                "color": "#a71717",
            }).addClass('active');
        }
    });
}

$('#play-list').caphButton({
    onFocused: function (event) {
        $(event.currentTarget).css({
            'transform': 'scale(1.3)',
            'border': '2px solid #FFF',
            'border-radius': '25px'
        });
        console.log("focou item")
    },
    onBlurred: function (event) {
        $(event.currentTarget).css({
            'transform': 'scale(1)',
            'border': 'none',
        });
        console.log("focou item")
    },
    toggle: true,
    onSelected: function (event, selected) {
        location.href = `../pages/player.html`;;
    }
});

$('#favorite-list').caphButton({
    onFocused: function (event) {
        $(event.currentTarget).css({
            'transform': 'scale(1.3)',
            'border': '2px solid #FFF',
            'border-radius': '25px'
        });
        console.log("focou item")
    },
    onBlurred: function (event) {
        $(event.currentTarget).css({
            'transform': 'scale(1)',
            'border': 'none',
        });
        console.log("focou item")
    },
    toggle: true,
    onSelected: function (event) {
        if (!$(event.currentTarget).hasClass('active')) {
            var url = API_DEEZER_URL + "/deezer/create/user/1458941346/playlists?playlist_id=" + playlist_id;

            $.ajax({
                url: url,
                type: 'POST',
                success: function () {
                    console.log('Favoritou')
                    $(event.currentTarget).css({
                        "color": "#a71717",
                    });
                },
                error: function (e) {
                    console.log(e.responseJSON.message)
                }
            });
        } else {

            var url = API_DEEZER_URL + "/deezer/delete/user/1458941346/playlists?playlist_id=" + playlist_id;

            $.ajax({
                url: url,
                type: 'DELETE',
                success: function () {
                    console.log('Des Favoritou')
                    $(event.currentTarget).css({
                        "color": "#FFF",
                    });
                },
                error: function (e) {
                    console.log(e.responseJSON.message)
                }
            });
        }
    }
});

