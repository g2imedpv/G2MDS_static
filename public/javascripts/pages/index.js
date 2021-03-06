/*
 * Plugin intialization
 */
$( document ).ready(function() {

    $('#pagepiling').pagepiling({
        verticalCentered: false,
        css3: true,
        navigation: {
            'textColor': '#ffffff',
            'bulletsColor': '#909295',
            'position': 'right',
            // 'tooltips': ['section1', 'section2', 'section3', 'section4']
        },
        onLeave: function (index, nextIndex, direction) {

            $('.section').eq(nextIndex - 1).find('#sc2text').addClass('animated bounceInLeft');
            $('.section').eq(index - 1).find('#sc2text').removeClass('animated bounceInLeft');
            $('.section').eq(nextIndex - 1).find('#sc2pic').addClass('animated bounceInRight');
            $('.section').eq(index - 1).find('#sc2pic').removeClass('animated bounceInRight');

            $('.section').eq(nextIndex - 1).find('#fea').addClass('animated fadeInUp');
            $('.section').eq(index - 1).find('#fea').removeClass('animated fadeInUp');
            
            $('.section').eq(nextIndex - 1).find('#sec4').addClass('color-change-2x');
            
            $('.section').eq(nextIndex - 1).find('#endTitle').addClass('animated fadeInUp delay-3s');

            //fading out the txt of the leaving section
            $('.section').eq(index - 1).find('h1, p').fadeOut(700, 'easeInQuart');

            //fading in the text of the destination (in case it was fadedOut)
            $('.section').eq(nextIndex - 1).find('h1, p').fadeIn(700, 'easeInQuart');


            //reaching our last section? The one with our normal site?
            if (nextIndex == 4) {
                $('#arrow').hide();

                //fading out navigation bullets
                $('#pp-nav').fadeOut();

                $('#section4').find('.content').animate({
                    top: '0%'
                }, 700, 'easeInQuart');
            }

            //leaving our last section? The one with our normal site?
            if (index == 4) {
                $('#arrow').delay(800).fadeIn();

                //fadding in navigation bullets
                $('#pp-nav').fadeIn();

                $('#section4 .content').animate({
                    top: '100%'
                }, 700, 'easeInQuart');
            }
        },
    });

    $('#arrow, #learn').click(function () {
        $.fn.pagepiling.moveSectionDown();
    });

});
