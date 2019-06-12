$( document ).ready(function() {

    $('.card').click(function() {
        cardID = '#' + $(this).attr('id');
        $(cardID).clone().appendTo('.highlighted');
        $('.highlighted').fadeIn();
        return false;
    })

    $('.highlighted').click(function(){
        $(this).fadeOut();
        $(this).children().remove();
        return false;
    });

});