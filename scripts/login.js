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
    	location.href = "./pages/home.html";
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
    	location.href = "./pages/signup.html";
    }
});

$('#inp-email').caphInput({
    onFocused :function(event,originalEvent){
    	 $(event.currentTarget).css({
             border : '3px solid red'
         });
    },
    onBlurred :function(event,originalEvent){
        $(event.currentTarget).css({
            border : ''
        });
    },
    onChanged :function(event,value){
    	console.log("value", value);
    },
  	type : 'email',
		value:''
});

$('#inp-password').caphInput({
    onFocused :function(event,originalEvent){
    	 $(event.currentTarget).css({
             border : '3px solid red'
         });
    },
    onBlurred :function(event,originalEvent){
        $(event.currentTarget).css({
            border : ''
        });
    },
    onChanged :function(event,value){
    	console.log("value", value);
    },
  	type : 'password',
		value:''
});


