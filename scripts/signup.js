$('#btn-signup').caphButton({
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

        let name = $('#inp-name').val()
        let email = $('#inp-email').val()
        let password = $('#inp-password').val()
        let confirm_password = $('#inp-re-password').val()


        if(password != confirm_password){
            alert('Confirmação de senha deve ser igual!')
        }

        let data = {
            name : name,
            email: email,
            password: password
        }

        console.log(data)

        let url = API_DEEZER_URL + "/autheticate/create-user";

        $.ajax({
            url: url,
            type: 'POST',
            data: data,
            success: function (data) {
                console.log(data);
                location.href = "../pages/home.html";
            },
            error:function (e) {
                console.log(e.responseJSON.message)
            }
        });
    }
});

$('#btn-cancel').caphButton({
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
    	location.href = "../index.html";
    }
});

$('#inp-name').caphInput({
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
  	type : 'text',
		value:''
});

$('#inp-name').caphInput({
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
  	type : 'text',
		value:''
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
$('#inp-re-password').caphInput({
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


