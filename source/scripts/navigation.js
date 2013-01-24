;(function($){

    var navigation = $('.navigation')

    $(document).on('scroll', function(){
    	var offtop = document.body.scrollTop
          , hide = offtop < 200
          , height = document.height
          , viewport = document.documentElement.clientHeight

        navigation.toggleClass('hide', hide)

        if(offtop > height - (viewport*2)){
        	$.publish('scrolledBottom')
        }
    })

})(Rye)