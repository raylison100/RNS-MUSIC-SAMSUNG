function search(search) {
    var url = API_DEEZER_URL + "/deezer/search/playlist?q=" + search;

    $.ajax({
        url: url,
        type: 'GET',
        success: function (result) {
            setResultSearch(result.data);
        },
        error: function (e) {
            console.log(e.responseJSON.message)
        }
    });
}

function setResultSearch(result) {

    $('#list').empty()

    if (result.length > 5) {
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

    $.each(result, function (index) {
        $('#list').append(`
			<div class="item-blocos-musics" focusable data-focusable-depth="0" data-focusable-group="list">
				<a  href="../pages/musics.html">
					<div class="blocos-musics" id=${result[index].id}>
                    <img class="capa" src="${result[index].picture_medium}" width="200" height="200">
                    </div>
				</a>
                <div class="title">
                    <span>
                        ${result[index].title.slice(0, 15)}
                    </span>
                </div>  
			</div>  
		`)
    });

    $('.item-blocos-musics').caphButton({
        onFocused: function (event) {
            $(event.currentTarget).find('div').css({
                'transform': 'scale(1.2)',
            });
            console.log("focou item")
        },
        onBlurred: function (event) {
            $(event.currentTarget).find('div').css({
                'transform': 'scale(1)',
            });
            console.log("focou item")
        },
        toggle: true,
        onSelected: function (event, selected) {
            let id = $(event.currentTarget).find('.blocos-musics').attr('id');
            let meuStorage = localStorage;
            meuStorage.setItem('playlist', id);
            console.log(id)
            location.href = `../pages/musics.html`;
            console.log("clicou item")
        }
    });
}



$('#btn-a').caphButton({
    onFocused: function (event) {

        $(event.currentTarget).find('span').css({
            'transform': 'scale(1.7)',
            'background-color': 'rgb(0, 0, 0)',
            'color': 'rgb(116, 9, 9)',
            'animation': 'reverse'
        });

        console.log("a")
    },
    onBlurred: function (event) {
        $(event.currentTarget).find('span').removeAttr("style")
    },
    onSelected: function (event, originalEvent, selected) {
        let inp = $('#inp-search').val() + 'a';
        $('#inp-search').val(inp);
        console.log("clicou a")
        search(inp)
    }
});

$('#btn-b').caphButton({
    onFocused: function (event) {
        $(event.currentTarget).find('span').css({
            'transform': 'scale(1.7)',
            'background-color': 'rgb(0, 0, 0)',
            'color': 'rgb(116, 9, 9)',
            'animation': 'reverse'
        });
        console.log("b")
    },
    onBlurred: function (event) {
        $(event.currentTarget).find('span').removeAttr("style")
    },
    onSelected: function (event, originalEvent, selected) {
        let inp = $('#inp-search').val() + 'b';
        $('#inp-search').val(inp);
        console.log("clicou b")
        search(inp)
    }
});

$('#btn-c').caphButton({
    onFocused: function (event) {
        $(event.currentTarget).find('span').css({
            'transform': 'scale(1.7)',
            'background-color': 'rgb(0, 0, 0)',
            'color': 'rgb(116, 9, 9)',
            'animation': 'reverse'
        });
        console.log("c")
    },
    onBlurred: function (event) {
        $(event.currentTarget).find('span').removeAttr("style")
    },
    onSelected: function (event, originalEvent, selected) {
        let inp = $('#inp-search').val() + 'c';
        $('#inp-search').val(inp);
        console.log("clicou c")
        search(inp)
    }
});

$('#btn-d').caphButton({
    onFocused: function (event) {
        $(event.currentTarget).find('span').css({
            'transform': 'scale(1.7)',
            'background-color': 'rgb(0, 0, 0)',
            'color': 'rgb(116, 9, 9)',
            'animation': 'reverse'
        });
        console.log("d")
    },
    onBlurred: function (event) {
        $(event.currentTarget).find('span').removeAttr("style");
    },
    onSelected: function (event, originalEvent, selected) {
        let inp = $('#inp-search').val() + 'd';
        $('#inp-search').val(inp);
        console.log("clicou d")
        search(inp)
    }
});


$('#btn-e').caphButton({
    onFocused: function (event) {
        $(event.currentTarget).find('span').css({
            'transform': 'scale(1.7)',
            'background-color': 'rgb(0, 0, 0)',
            'color': 'rgb(116, 9, 9)',
            'animation': 'reverse'
        });
        console.log("e")
    },
    onBlurred: function (event) {
        $(event.currentTarget).find('span').removeAttr("style")
    },
    onSelected: function (event, originalEvent, selected) {
        let inp = $('#inp-search').val() + 'e';
        $('#inp-search').val(inp);
        console.log("clicou e")
        search(inp)
    }
});


$('#btn-f').caphButton({
    onFocused: function (event) {
        $(event.currentTarget).find('span').css({
            'transform': 'scale(1.7)',
            'background-color': 'rgb(0, 0, 0)',
            'color': 'rgb(116, 9, 9)',
            'animation': 'reverse'
        });
        console.log("f")
    },
    onBlurred: function (event) {
        $(event.currentTarget).find('span').removeAttr("style")
    },
    onSelected: function (event, originalEvent, selected) {
        let inp = $('#inp-search').val() + 'f';
        $('#inp-search').val(inp);
        console.log("clicou f")
        search(inp)
    }
});


$('#btn-g').caphButton({
    onFocused: function (event) {
        $(event.currentTarget).find('span').css({
            'transform': 'scale(1.7)',
            'background-color': 'rgb(0, 0, 0)',
            'color': 'rgb(116, 9, 9)',
            'animation': 'reverse'
        });
        console.log("g")
    },
    onBlurred: function (event) {
        $(event.currentTarget).find('span').removeAttr("style")
    },
    onSelected: function (event, originalEvent, selected) {
        let inp = $('#inp-search').val() + 'g';
        $('#inp-search').val(inp);
        console.log("clicou g")
        search(inp)
    }
});


$('#btn-h').caphButton({
    onFocused: function (event) {
        $(event.currentTarget).find('span').css({
            'transform': 'scale(1.7)',
            'background-color': 'rgb(0, 0, 0)',
            'color': 'rgb(116, 9, 9)',
            'animation': 'reverse'
        });
        console.log("h")
    },
    onBlurred: function (event) {
        $(event.currentTarget).find('span').removeAttr("style")
    },
    onSelected: function (event, originalEvent, selected) {
        let inp = $('#inp-search').val() + 'h';
        $('#inp-search').val(inp);
        console.log("clicou h")
        search(inp)
    }
});

$('#btn-i').caphButton({
    onFocused: function (event) {
        $(event.currentTarget).find('span').css({
            'transform': 'scale(1.7)',
            'background-color': 'rgb(0, 0, 0)',
            'color': 'rgb(116, 9, 9)',
            'animation': 'reverse'
        });
        console.log("i")
    },
    onBlurred: function (event) {
        $(event.currentTarget).find('span').removeAttr("style")
    },
    onSelected: function (event, originalEvent, selected) {
        let inp = $('#inp-search').val() + 'i';
        $('#inp-search').val(inp);
        console.log("clicou i")
        search(inp)
    }
});

$('#btn-j').caphButton({
    onFocused: function (event) {
        $(event.currentTarget).find('span').css({
            'transform': 'scale(1.7)',
            'background-color': 'rgb(0, 0, 0)',
            'color': 'rgb(116, 9, 9)',
            'animation': 'reverse'
        });
        console.log("j")
    },
    onBlurred: function (event) {
        $(event.currentTarget).find('span').removeAttr("style")
    },
    onSelected: function (event, originalEvent, selected) {
        let inp = $('#inp-search').val() + 'j';
        $('#inp-search').val(inp);
        console.log("clicou j")
        search(inp)
    }
});

$('#btn-k').caphButton({
    onFocused: function (event) {
        $(event.currentTarget).find('span').css({
            'transform': 'scale(1.7)',
            'background-color': 'rgb(0, 0, 0)',
            'color': 'rgb(116, 9, 9)',
            'animation': 'reverse'
        });
        console.log("k")
    },
    onBlurred: function (event) {
        $(event.currentTarget).find('span').removeAttr("style")
    },
    onSelected: function (event, originalEvent, selected) {
        let inp = $('#inp-search').val() + 'k';
        $('#inp-search').val(inp);
        console.log("clicou k")
        search(inp)
    }
});

$('#btn-l').caphButton({
    onFocused: function (event) {
        $(event.currentTarget).find('span').css({
            'transform': 'scale(1.7)',
            'background-color': 'rgb(0, 0, 0)',
            'color': 'rgb(116, 9, 9)',
            'animation': 'reverse'
        });
        console.log("l")
    },
    onBlurred: function (event) {
        $(event.currentTarget).find('span').removeAttr("style")
    },
    onSelected: function (event, originalEvent, selected) {
        let inp = $('#inp-search').val() + 'l';
        $('#inp-search').val(inp);
        console.log("clicou l")
        search(inp)
    }
});

$('#btn-m').caphButton({
    onFocused: function (event) {
        $(event.currentTarget).find('span').css({
            'transform': 'scale(1.7)',
            'background-color': 'rgb(0, 0, 0)',
            'color': 'rgb(116, 9, 9)',
            'animation': 'reverse'
        });
        console.log("m")
    },
    onBlurred: function (event) {
        $(event.currentTarget).find('span').removeAttr("style")
    },
    onSelected: function (event, originalEvent, selected) {
        let inp = $('#inp-search').val() + 'm';
        $('#inp-search').val(inp);
        console.log("clicou m")
        search(inp)
    }
});

$('#btn-n').caphButton({
    onFocused: function (event) {
        $(event.currentTarget).find('span').css({
            'transform': 'scale(1.7)',
            'background-color': 'rgb(0, 0, 0)',
            'color': 'rgb(116, 9, 9)',
            'animation': 'reverse'
        });
        console.log("n")
    },
    onBlurred: function (event) {
        $(event.currentTarget).find('span').removeAttr("style")
    },
    onSelected: function (event, originalEvent, selected) {
        let inp = $('#inp-search').val() + 'n';
        $('#inp-search').val(inp);
        console.log("clicou n")
        search(inp)
    }
});

$('#btn-o').caphButton({
    onFocused: function (event) {
        $(event.currentTarget).find('span').css({
            'transform': 'scale(1.7)',
            'background-color': 'rgb(0, 0, 0)',
            'color': 'rgb(116, 9, 9)',
            'animation': 'reverse'
        });
        console.log("o")
    },
    onBlurred: function (event) {
        $(event.currentTarget).find('span').removeAttr("style")
    },
    onSelected: function (event, originalEvent, selected) {
        let inp = $('#inp-search').val() + 'o';
        $('#inp-search').val(inp);
        console.log("clicou o")
        search(inp)
    }
});

$('#btn-p').caphButton({
    onFocused: function (event) {
        $(event.currentTarget).find('span').css({
            'transform': 'scale(1.7)',
            'background-color': 'rgb(0, 0, 0)',
            'color': 'rgb(116, 9, 9)',
            'animation': 'reverse'
        });
        console.log("p")
    },
    onBlurred: function (event) {
        $(event.currentTarget).find('span').removeAttr("style")
    },
    onSelected: function (event, originalEvent, selected) {
        let inp = $('#inp-search').val() + 'p';
        $('#inp-search').val(inp);
        console.log("clicou p")
        search(inp)
    }
});

$('#btn-q').caphButton({
    onFocused: function (event) {
        $(event.currentTarget).find('span').css({
            'transform': 'scale(1.7)',
            'background-color': 'rgb(0, 0, 0)',
            'color': 'rgb(116, 9, 9)',
            'animation': 'reverse'
        });
        console.log("q")
    },
    onBlurred: function (event) {
        $(event.currentTarget).find('span').removeAttr("style")
    },
    onSelected: function (event, originalEvent, selected) {
        let inp = $('#inp-search').val() + 'q';
        $('#inp-search').val(inp);
        console.log("clicou q")
        search(inp)
    }
});

$('#btn-r').caphButton({
    onFocused: function (event) {
        $(event.currentTarget).find('span').css({
            'transform': 'scale(1.7)',
            'background-color': 'rgb(0, 0, 0)',
            'color': 'rgb(116, 9, 9)',
            'animation': 'reverse'
        });
        console.log("r")
    },
    onBlurred: function (event) {
        $(event.currentTarget).find('span').removeAttr("style")
    },
    onSelected: function (event, originalEvent, selected) {
        let inp = $('#inp-search').val() + 'r';
        $('#inp-search').val(inp);
        console.log("clicou r")
        search(inp)
    }
});

$('#btn-s').caphButton({
    onFocused: function (event) {
        $(event.currentTarget).find('span').css({
            'transform': 'scale(1.7)',
            'background-color': 'rgb(0, 0, 0)',
            'color': 'rgb(116, 9, 9)',
            'animation': 'reverse'
        });
        console.log("s")
    },
    onBlurred: function (event) {
        $(event.currentTarget).find('span').removeAttr("style")
    },
    onSelected: function (event, originalEvent, selected) {
        let inp = $('#inp-search').val() + 's';
        $('#inp-search').val(inp);
        console.log("clicou s")
        search(inp)
    }
});

$('#btn-t').caphButton({
    onFocused: function (event) {
        $(event.currentTarget).find('span').css({
            'transform': 'scale(1.7)',
            'background-color': 'rgb(0, 0, 0)',
            'color': 'rgb(116, 9, 9)',
            'animation': 'reverse'
        });
        console.log("t")
    },
    onBlurred: function (event) {
        $(event.currentTarget).find('span').removeAttr("style")
    },
    onSelected: function (event, originalEvent, selected) {
        let inp = $('#inp-search').val() + 't';
        $('#inp-search').val(inp);
        console.log("clicou t")
        search(inp)
    }
});


$('#btn-u').caphButton({
    onFocused: function (event) {
        $(event.currentTarget).find('span').css({
            'transform': 'scale(1.7)',
            'background-color': 'rgb(0, 0, 0)',
            'color': 'rgb(116, 9, 9)',
            'animation': 'reverse'
        });
        console.log("u")
    },
    onBlurred: function (event) {
        $(event.currentTarget).find('span').removeAttr("style")
    },
    onSelected: function (event, originalEvent, selected) {
        let inp = $('#inp-search').val() + 'u';
        $('#inp-search').val(inp);
        console.log("clicou u")
        search(inp)
    }
});


$('#btn-v').caphButton({
    onFocused: function (event) {
        $(event.currentTarget).find('span').css({
            'transform': 'scale(1.7)',
            'background-color': 'rgb(0, 0, 0)',
            'color': 'rgb(116, 9, 9)',
            'animation': 'reverse'
        });
        console.log("v")
    },
    onBlurred: function (event) {
        $(event.currentTarget).find('span').removeAttr("style")
    },
    onSelected: function (event, originalEvent, selected) {
        let inp = $('#inp-search').val() + 'v';
        $('#inp-search').val(inp);
        console.log("clicou v")
        search(inp)
    }
});

$('#btn-w').caphButton({
    onFocused: function (event) {
        $(event.currentTarget).find('span').css({
            'transform': 'scale(1.7)',
            'background-color': 'rgb(0, 0, 0)',
            'color': 'rgb(116, 9, 9)',
            'animation': 'reverse'
        });
        console.log("w")
    },
    onBlurred: function (event) {
        $(event.currentTarget).find('span').removeAttr("style")
    },
    onSelected: function (event, originalEvent, selected) {
        let inp = $('#inp-search').val() + 'w';
        $('#inp-search').val(inp);
        console.log("clicou w")
        search(inp)
    }
});

$('#btn-x').caphButton({
    onFocused: function (event) {
        $(event.currentTarget).find('span').css({
            'transform': 'scale(1.7)',
            'background-color': 'rgb(0, 0, 0)',
            'color': 'rgb(116, 9, 9)',
            'animation': 'reverse'
        });
        console.log("x")
    },
    onBlurred: function (event) {
        $(event.currentTarget).find('span').removeAttr("style")
    },
    onSelected: function (event, originalEvent, selected) {
        let inp = $('#inp-search').val() + 'x';
        $('#inp-search').val(inp);
        console.log("clicou x")
        search(inp)
    }
});

$('#btn-y').caphButton({
    onFocused: function (event) {
        $(event.currentTarget).find('span').css({
            'transform': 'scale(1.7)',
            'background-color': 'rgb(0, 0, 0)',
            'color': 'rgb(116, 9, 9)',
            'animation': 'reverse'
        });
        console.log("y")
    },
    onBlurred: function (event) {
        $(event.currentTarget).find('span').removeAttr("style")
    },
    onSelected: function (event, originalEvent, selected) {
        let inp = $('#inp-search').val() + 'y';
        $('#inp-search').val(inp);
        console.log("clicou y")
        search(inp)
    }
});

$('#btn-z').caphButton({
    onFocused: function (event) {
        $(event.currentTarget).find('span').css({
            'transform': 'scale(1.7)',
            'background-color': 'rgb(0, 0, 0)',
            'color': 'rgb(116, 9, 9)',
            'animation': 'reverse'
        });
        console.log("z")
    },
    onBlurred: function (event) {
        $(event.currentTarget).find('span').removeAttr("style")
    },
    onSelected: function (event, originalEvent, selected) {
        let inp = $('#inp-search').val() + 'z';
        $('#inp-search').val(inp);
        console.log("clicou z")
        search(inp)
    }
});

$('#btn-0').caphButton({
    onFocused: function (event) {
        $(event.currentTarget).find('span').css({
            'transform': 'scale(1.7)',
            'background-color': 'rgb(0, 0, 0)',
            'color': 'rgb(116, 9, 9)',
            'animation': 'reverse'
        });
        console.log("0")
    },
    onBlurred: function (event) {
        $(event.currentTarget).find('span').removeAttr("style")
    },
    onSelected: function (event, originalEvent, selected) {
        let inp = $('#inp-search').val() + '0';
        $('#inp-search').val(inp);
        console.log("clicou 0")
        search(inp)
    }
});

$('#btn-1').caphButton({
    onFocused: function (event) {
        $(event.currentTarget).find('span').css({
            'transform': 'scale(1.7)',
            'background-color': 'rgb(0, 0, 0)',
            'color': 'rgb(116, 9, 9)',
            'animation': 'reverse'
        });
        console.log("1")
    },
    onBlurred: function (event) {
        $(event.currentTarget).find('span').removeAttr("style")
    },
    onSelected: function (event, originalEvent, selected) {
        let inp = $('#inp-search').val() + '1';
        $('#inp-search').val(inp);
        console.log("clicou 1")
        search(inp)
    }
});

$('#btn-2').caphButton({
    onFocused: function (event) {
        $(event.currentTarget).find('span').css({
            'transform': 'scale(1.7)',
            'background-color': 'rgb(0, 0, 0)',
            'color': 'rgb(116, 9, 9)',
            'animation': 'reverse'
        });
        console.log("2")
    },
    onBlurred: function (event) {
        $(event.currentTarget).find('span').removeAttr("style")
    },
    onSelected: function (event, originalEvent, selected) {
        let inp = $('#inp-search').val() + '2';
        $('#inp-search').val(inp);
        console.log("clicou 2")
        search(inp)
    }
});

$('#btn-3').caphButton({
    onFocused: function (event) {
        $(event.currentTarget).find('span').css({
            'transform': 'scale(1.7)',
            'background-color': 'rgb(0, 0, 0)',
            'color': 'rgb(116, 9, 9)',
            'animation': 'reverse'
        });
        console.log("3")
    },
    onBlurred: function (event) {
        $(event.currentTarget).find('span').removeAttr("style")
    },
    onSelected: function (event, originalEvent, selected) {
        let inp = $('#inp-search').val() + '3';
        $('#inp-search').val(inp);
        console.log("clicou 3")
        search(inp)
    }
});

$('#btn-4').caphButton({
    onFocused: function (event) {
        $(event.currentTarget).find('span').css({
            'transform': 'scale(1.7)',
            'background-color': 'rgb(0, 0, 0)',
            'color': 'rgb(116, 9, 9)',
            'animation': 'reverse'
        });
        console.log("4")
    },
    onBlurred: function (event) {
        $(event.currentTarget).find('span').removeAttr("style")
    },
    onSelected: function (event, originalEvent, selected) {
        let inp = $('#inp-search').val() + '4';
        $('#inp-search').val(inp);
        console.log("clicou 4")
        search(inp)
    }
});

$('#btn-5').caphButton({
    onFocused: function (event) {
        $(event.currentTarget).find('span').css({
            'transform': 'scale(1.7)',
            'background-color': 'rgb(0, 0, 0)',
            'color': 'rgb(116, 9, 9)',
            'animation': 'reverse'
        });
        console.log("5")
    },
    onBlurred: function (event) {
        $(event.currentTarget).find('span').removeAttr("style")
    },
    onSelected: function (event, originalEvent, selected) {
        let inp = $('#inp-search').val() + '5';
        $('#inp-search').val(inp);
        console.log("clicou 5")
        search(inp)
    }
});

$('#btn-6').caphButton({
    onFocused: function (event) {
        $(event.currentTarget).find('span').css({
            'transform': 'scale(1.7)',
            'background-color': 'rgb(0, 0, 0)',
            'color': 'rgb(116, 9, 9)',
            'animation': 'reverse'
        });
        console.log("6")
    },
    onBlurred: function (event) {
        $(event.currentTarget).find('span').removeAttr("style")
    },
    onSelected: function (event, originalEvent, selected) {
        let inp = $('#inp-search').val() + '6';
        $('#inp-search').val(inp);
        console.log("clicou 6")
        search(inp)
    }
});

$('#btn-7').caphButton({
    onFocused: function (event) {
        $(event.currentTarget).find('span').css({
            'transform': 'scale(1.7)',
            'background-color': 'rgb(0, 0, 0)',
            'color': 'rgb(116, 9, 9)',
            'animation': 'reverse'
        });
        console.log("7")
    },
    onBlurred: function (event) {
        $(event.currentTarget).find('span').removeAttr("style")
    },
    onSelected: function (event, originalEvent, selected) {
        let inp = $('#inp-search').val() + '7';
        $('#inp-search').val(inp);
        console.log("clicou 7")
        search(inp)
    }
});

$('#btn-8').caphButton({
    onFocused: function (event) {
        $(event.currentTarget).find('span').css({
            'transform': 'scale(1.7)',
            'background-color': 'rgb(0, 0, 0)',
            'color': 'rgb(116, 9, 9)',
            'animation': 'reverse'
        });
        console.log("8")
    },
    onBlurred: function (event) {
        $(event.currentTarget).find('span').removeAttr("style")
    },
    onSelected: function (event, originalEvent, selected) {
        let inp = $('#inp-search').val() + '8';
        $('#inp-search').val(inp);
        console.log("clicou 8")
        search(inp)
    }
});

$('#btn-9').caphButton({
    onFocused: function (event) {
        $(event.currentTarget).find('span').css({
            'transform': 'scale(1.7)',
            'background-color': 'rgb(0, 0, 0)',
            'color': 'rgb(116, 9, 9)',
            'animation': 'reverse'
        });
        console.log("9")
    },
    onBlurred: function (event) {
        $(event.currentTarget).find('span').removeAttr("style")
    },
    onSelected: function (event, originalEvent, selected) {
        let inp = $('#inp-search').val() + '9';
        $('#inp-search').val(inp);
        console.log("clicou 9")
        search(inp)
    }
});

$('#btn-space').caphButton({
    onFocused: function (event) {
        $(event.currentTarget).css({
            'transform': 'scale(1.7)',
            'background-color': 'rgb(0, 0, 0)',
            'color': 'rgb(116, 9, 9)',
            'animation': 'reverse'
        });

    },
    onBlurred: function (event) {
        $(event.currentTarget).removeAttr("style")
    },
    onSelected: function (event, originalEvent, selected) {
        let inp = $('#inp-search').val() + ' ';
        $('#inp-search').val(inp);
        console.log("clicou a")
        search(inp)
    }
});

$('#btn-backspace').caphButton({
    onFocused: function (event) {
        $(event.currentTarget).css({
            'transform': 'scale(1.7)',
            'background-color': 'rgb(0, 0, 0)',
            'color': 'rgb(116, 9, 9)',
            'animation': 'reverse'
        });

    },
    onBlurred: function (event) {
        $(event.currentTarget).removeAttr("style")
    },
    onSelected: function (event, originalEvent, selected) {
        let inp = $('#inp-search').val();
        inp = inp.substring(0, inp.length - 1);
        $('#inp-search').val(inp);
        search(inp)
    }
});