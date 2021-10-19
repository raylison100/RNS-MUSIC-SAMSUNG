$('#btn-space').caphButton({
    onFocused: function (event) {
        $(event.currentTarget).css("background-color", "#862a2a");

    },
    onBlurred: function (event) {
        $(event.currentTarget).css("background-color", "#ab8080");

    },
    focusOption: {
        name: "btn-login'",
        depth: 0,
        group: "btn-login'",
        disabled: false,
        initialFocus: true
    },
    toggle: true,
    onSelected: function (event, originalEvent, selected) {
    	location.href = "./pages/home.html";
    }
});

$('#btn-backspace').caphButton({
    onFocused: function (event) {
        $(event.currentTarget).css("background-color", "#862a2a");

    },
    onBlurred: function (event) {
        $(event.currentTarget).css("background-color", "#ab8080");

    },
    focusOption: {
        name: "btn-login'",
        depth: 0,
        group: "btn-login'",
        disabled: false,
        initialFocus: true
    },
    toggle: true,
    onSelected: function (event, originalEvent, selected) {
    	location.href = "./pages/home.html";
    }
});