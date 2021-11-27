var music = '';
var index = 0;
var track = [];

const audio = document.querySelector('#audio');
const seekBar = $('.seek-bar');
const disk = $('.disk');
const currentTime = $('.current-time');
const musicDuration = $('.song-duration');
const playBtn = $('.play-btn');
const forwardBtn = $('.forward-btn');
const backwardBtn = $('.backward-btn');

this.init();

function init() {
    let meuStorage = localStorage;
    let playlist_id = meuStorage.getItem('playlist');
    music = meuStorage.getItem('music');

    url = API_DEEZER_URL + `/deezer/playlist/${playlist_id}`;

    $.ajax({
        url: url,
        type: 'GET',
        success: function (result) {
            start(result);
        },
        error: function (e) {
            console.log(e.responseJSON.message)
        }
    });
}

function start(data) {
    track = data.tracks.data;

    if (music == 'empty') {
        music = tracks[0]
    } else {
        selectMusic()
    }

    $('.artist-name').html(data.title);
    $('.disk').css('background-image', 'url(' + data.picture_medium + ')');

    setMusic(this.index);

    setInterval(() => {
        seekBar.val(audio.currentTime);
        currentTime.html(formatTime(audio.currentTime));
    }, 500)
}

function selectMusic() {
    track.forEach((element, index) => {
        if (element.id == music) {
            this.index = index
        }
    });
}

function setMusic(i) {
    seekBar.val(0); // set range slide value to 0;
    song = track[i];
    currentMusic = i;

    audio.src = song.preview;
    $('.music-name').html(song.title);

    currentTime.html('00:00');
    setTimeout(() => {
        seekBar.attr('max', song.duration);
        musicDuration.html(formatTime(song.duration));
    }, 300);
}

function formatTime(time) {
    let min = Math.floor(time / 60);
    if (min < 10) {
        min = `0${min}`;
    }
    let sec = Math.floor(time % 60);
    if (sec < 10) {
        sec = `0${sec}`;
    }
    return `${min} : ${sec}`;
}

function play() {

    if (playBtn.hasClass('pause')) {
        audio.play();
        playBtn.removeClass('pause');
        disk.addClass('play');
    } else {
        audio.pause();
        playBtn.addClass('pause');
        disk.removeClass('play');
    }
}

// forward and backward button
function forward() {
    if (currentMusic >= track.length - 1) {
        currentMusic = 0;
    } else {
        currentMusic++;
    }
    setMusic(currentMusic);
    playMusic();
}

function backward() {
    if (currentMusic <= 0) {
        currentMusic = track.length - 1;
    } else {
        currentMusic--;
    }
    setMusic(currentMusic);
    playMusic();
}


$('.play-btn').caphButton({
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
    onSelected: function () {
        play();
    }
});

$('.backward-btn').caphButton({
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
    onSelected: function () {
        backward();
    }
});

$('.forward-btn').caphButton({
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
    onSelected: function () {
        forward();
    }
});