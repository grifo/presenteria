;(function($){

    var navigation = $('.navigation')

    $(document).on('scroll', function(){
        var hide = document.body.scrollTop < 300
        navigation.toggleClass('hide', hide)
    })

})(Rye)