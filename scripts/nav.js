$('#home').caphButton({
    onFocused: function (event) {
	   	$(event.currentTarget).css({
	   	    'background-color': '#a71717',
	   		'color': '#FFF'
	    });
	   	
	   	console.log("opa")
    },
    onBlurred: function (event) {
	   	$(event.currentTarget).css({
	   	    'background-color': '#aaa3a3',
	   		'color': 'rgb(78, 72, 72)'
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
	     console.log("opa")
	    location.href = "../pages/home.html";
    }
});

$('#my-list').caphButton({
    onFocused: function (event) {
	   	$(event.currentTarget).css({
	   	    'background-color': '#a71717',
	   		'color': '#FFF'
	    });
	   	
	   	console.log("opa")
    },
    onBlurred: function (event) {
	   	$(event.currentTarget).css({
	   	    'background-color': '#aaa3a3',
	   		'color': 'rgb(78, 72, 72)'
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
	     console.log("opa")
	    location.href = "../pages/my-list.html";
    }
});

$('#search').caphButton({
    onFocused: function (event) {
	   	$(event.currentTarget).css({
	   	    'background-color': '#a71717',
	   		'color': '#FFF'
	    });
	   	
	   	console.log("opa")
    },
    onBlurred: function (event) {
	   	$(event.currentTarget).css({
	   	    'background-color': '#aaa3a3',
	   		'color': 'rgb(78, 72, 72)'
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
	     console.log("opa")
	     location.href = "../pages/search.html";
    }
});
