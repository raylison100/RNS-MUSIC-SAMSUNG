$('#home').caphButton({
    onFocused: function (event) {
        $(event.currentTarget).css({
            'background-color': '#a71717',
            'color': '#FFF'
        });
        console.log("focou home")
    },
    onBlurred: function (event) {
        $(event.currentTarget).css({
            'background-color': '#aaa3a3',
            'color': 'rgb(78, 72, 72)'
        });
        console.log("desfocou home");
    },
    focusOption: {
        name: "home",
        depth: 0,
        group: "menu",
        disabled: false,
        initialFocus: true
    },
    toggle: true,
    onSelected: function (event, originalEvent, selected) {
        location.href = "../pages/home.html";
        console.log("clicou home")
    }
});

$('#my-list').caphButton({
    onFocused: function (event) {
        $(event.currentTarget).css({
            'background-color': '#a71717',
            'color': '#FFF'
        });
        console.log("focou list")
    },
    onBlurred: function (event) {
        $(event.currentTarget).css({
            'background-color': '#aaa3a3',
            'color': 'rgb(78, 72, 72)'
        });
        console.log("desfocou list")
    },
    focusOption: {
        name: "list",
        depth: 0,
        group: "menu",
        disabled: false,
        initialFocus: false
    },
    toggle: true,
    onSelected: function (event, originalEvent, selected) {
        location.href = "../pages/my-list.html";
        console.log("clicou list")
    }
});

$('#search').caphButton({
    onFocused: function (event) {
        $(event.currentTarget).css({
            'background-color': '#a71717',
            'color': '#FFF'
        });
        console.log("focou buscar")
    },
    onBlurred: function (event) {
        $(event.currentTarget).css({
            'background-color': '#aaa3a3',
            'color': 'rgb(78, 72, 72)'
        });
        console.log("desfocou buscar")
    },
    focusOption: {
        name: "search",
        depth: 0,
        group: "menu",
        disabled: false,
        initialFocus: false
    },
    toggle: true,
    onSelected: function (event, originalEvent, selected) {
        console.log("opa")
        location.href = "../pages/search.html";
        console.log("clicou search")
    }
});

$('#account-icon').caphButton({
    onFocused: function (event) {
        $(event.currentTarget).closest('div').css({
            'background-color': '#a71717',
            'color': '#FFF'
        });
        console.log("focou account")
    },
    onBlurred: function (event) {
        $(event.currentTarget).closest('div').css({
            'background-color': '#aaa3a3',
            'color': 'rgb(78, 72, 72)'
        });
        console.log("desfocou account")
    },
    focusOption: {
        name: "account",
        depth: 0,
        group: "menu",
        disabled: false,
        initialFocus: false
    },
    toggle: true,
    onSelected: function (event, originalEvent, selected) {
        console.log("opa")
        location.href = "../index.html";
        console.log("clicou account")
    }
});
