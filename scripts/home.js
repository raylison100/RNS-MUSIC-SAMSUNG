$('#btn-login').caphButton({
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
        //In toggle button, 'selected' is passed additionally. Through selected , you can check toggle button is selected or not.
        //In normal button, 'selected' isn't passed to select event handler
    }
});

$('#btn-new-user').caphButton({
    onFocused: function (event) {
        $(event.currentTarget).css("background-color", "#862a2a");

    },
    onBlurred: function (event) {
        $(event.currentTarget).css("background-color", "#3e3434");

    },
    focusOption: {
        name: "btn-new-user",
        depth: 0,
        group: "btn-new-user",
        disabled: false,
        initialFocus: true
    },
    toggle: true,
    onSelected: function (event, originalEvent, selected) {
        //In toggle button, 'selected' is passed additionally. Through selected , you can check toggle button is selected or not.
        //In normal button, 'selected' isn't passed to select event handler
    }
});


