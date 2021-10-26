$(document).ready(function() {
    $.caph.focus.init(function(nearestFocusableFinderProvider, controllerProvider) {
        controllerProvider.onFocused(function(event, originalEvent) {
            $(event.currentTarget).css({
                border: '1px solid yellow'
            });
            console.log("aquiii");  
        });

        controllerProvider.onBlurred(function(event, originalEvent) {
            $(event.currentTarget).css({
                border: ''
            });
        });
    });
});