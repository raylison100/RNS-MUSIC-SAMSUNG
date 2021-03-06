$('#btn-login').caphButton({
    onFocused: function (event) {
        $(event.currentTarget).css({
            'color': '#000',
            'background-color': '#FFF',
        });

    },
    onBlurred: function (event) {
        $(event.currentTarget).css({
            "background-color": "#000",
            "color": "#FFF",
        });

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
        let email = $('#inp-email').val()
        let password = $('#inp-password').val()

        let data = {
            email: email,
            password: password
        }

        console.log(data)

        let url = API_DEEZER_URL + "/autheticate/login";

        $.ajax({
            url: url,
            type: 'POST',
            data: data,
            success: function (data) {
                console.log(data);
                location.href = "./pages/home.html";
            },
            error: function (e) {
                alert(e.responseJSON[0].message)
                console.log(e.responseJSON[0].message)
            }
        });
    }
});

$('#btn-new-user').caphButton({
    onFocused: function (event) {
        $(event.currentTarget).css({
            'color': '#000',
            'background-color': '#FFF',
        });

    },
    onBlurred: function (event) {
        $(event.currentTarget).css({
            "background-color": "#3e3434", "color": "#FFF"
        });

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
        location.href = "./pages/signup.html";
    }
});

$('#inp-email').caphInput({
    onFocused: function (event, originalEvent) {
        $(event.currentTarget).css({
            border: '3px solid red'
        });
    },
    onBlurred: function (event, originalEvent) {
        $(event.currentTarget).css({
            border: ''
        });
    },
    onChanged: function (event, value) {
        console.log("value", value);
    },
    type: 'email',
    value: ''
});

$('#inp-password').caphInput({
    onFocused: function (event, originalEvent) {
        $(event.currentTarget).css({
            border: '3px solid red'
        });
    },
    onBlurred: function (event, originalEvent) {
        $(event.currentTarget).css({
            border: ''
        });
    },
    onChanged: function (event, value) {
        console.log("value", value);
    },
    type: 'password',
    value: ''
});


