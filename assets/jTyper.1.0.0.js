/*
    Plugin Name: jTyper
    Copyright (C) 2018 - Mohammad Esmaeilzadeh
    Author URL: http://www.bugless.ir/
    Author Email: bugless.ir@yahoo.com
    GitHub URL: https://github.com/buglessir
    This is a jQuery plugin for typing links
*/

$.fn.jTyper = function(options){

    var settings = $.extend({
        speed: 100,
        timeout: 3000
    }, options);

    var jTyperItems = [];

    this.find('li > a').each(function(index){
        let item = [];
        item[0] = $(this).attr('href');
        item[1] = $(this).text();
        jTyperItems.push(item);
    });

    if(jTyperItems)
    {

        this.addClass('jTyper');

        this.empty();

        this.append('<li><a href="" id="jTyperAnchor"></a></li>');

        var jTyperAnchorTag = $('#jTyperAnchor');

        var jTyperItem = 0;
        var jTyperTypingCounter = 0;
        var jTyperItemsLength = jTyperItems.length;


        function jTyperLoop(){

            var jTyperItemUrl = jTyperItems[jTyperItem][0];
            var jTyperItemText = jTyperItems[jTyperItem][1];

            jTyperAnchorTag.attr('href', jTyperItemUrl);

            var jTyperLoopInterval = setInterval(function(){

                if( jTyperTypingCounter <= jTyperItemText.length )
                {
                    jTyperAnchorTag.text( jTyperItemText.substring(0, jTyperTypingCounter) );
                    jTyperTypingCounter++;
                }
                else
                {

                    if( jTyperItem == jTyperItemsLength-1 )
                    {
                        jTyperItem = 0;
                    }
                    else
                    {
                        jTyperItem++;
                    }

                    jTyperTypingCounter = 0;
                    clearInterval(jTyperLoopInterval);
                    setTimeout(jTyperLoop, settings.timeout);

                }

            }, settings.speed);

        }

        jTyperLoop();

    }
    else
    {
        console.log('jTyper input is NULL');
    }

}
