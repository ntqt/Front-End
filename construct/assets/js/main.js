;(function($) {
    'use strict'

    var wprtTheme = {

        // Main init function
        init : function() {
            this.config();
            this.events();
        },

        // Define vars for caching
        config : function() {
            this.config = {
                $window : $( window ),
                $document : $( document ),
            };
        },

        // Events
        events : function() {
            var self = this;

            // Run on document ready
            self.config.$document.on( 'ready', function() {
                // PreLoader
                self.preLoader();

                // Hero Section
                self.heroSection();

                // Scroll to Target
                self.scrollTarget();

                // Mobile Navigation
                self.mobileNav();

                // Search Icon
                self.searchIcon();

                // Retina Logos
                self.retinaLogo();

                // Header Fixed
                self.headerFixed();

                // Responsive Videos
                self.responsiveVideos();

                // Scroll to Top
                self.scrollToTop();

                // Detect Viewport
                self.inViewport();
            } );

            // Run on Window Load
            self.config.$window.on( 'load', function() {
                
            } );
        },

        // PreLoader
        preLoader: function() {
            if ( $().animsition ) {
                $('.animsition').animsition({
                    inClass: 'fade-in',
                    outClass: 'fade-out',
                    inDuration: 1500,
                    outDuration: 800,
                    loading: true,
                    loadingParentElement: 'body',
                    loadingClass: 'animsition-loading',
                    timeout: false,
                    timeoutCountdown: 5000,
                    onLoadEvent: true,
                    browser: [
                        '-webkit-animation-duration',
                        '-moz-animation-duration',
                        'animation-duration'
                        ],
                    overlay: false,
                    overlayClass: 'animsition-overlay-slide',
                    overlayParentElement: 'body',
                    transition: function(url){ window.location.href = url; }
                });
            }
        },

         heroSection: function() {
            $(window).on('load resize', function(){
                var
                hero = $('#hero-section'),
                heroContent = hero.find('.hero-content'),
                contentHeight = heroContent.height(),
                sliderHeight = $(window).height(),
                headerHeight = $('#site-header-wrap').height();

                if ( $('body').hasClass('header-sticky') )
                    headerHeight = headerHeight / 2;

                var contentMargin = (sliderHeight - contentHeight - headerHeight) / 2;

                hero.css({ height: sliderHeight + "px" });

                heroContent.css({ 
                   "margin-top" : headerHeight + contentMargin + "px",
                   "margin-bottom": contentMargin + "px"
                });
            })

            if ( $().vegas ) {
                $("#hero-section").each(function() {
                    var
                    $this = $(this),
                    number = $this.data('number'),
                    number = parseInt(number),
                    effect = $this.data('effect'),
                    i = 1,
                    slides = [];

                    while ( i <= number ) {
                        slides.push( {src:$this.data('image-'+i)} );
                        i++;
                    }

                    $this.vegas({
                        slides: slides,
                        overlay: true,
                        transition: effect
                    });
                });
            }

            if ( $().fitText ) {
                $('#hero-section .hero-title').each(function(){
                    var min = $(this).data("min");
                    var max = $(this).data("max");

                    $(this).children('h1').fitText(1.8, {
                        minFontSize: min,
                        maxFontSize: max
                    });
                });
            }

            if ( $('.hero-title').is('.scroll') ) {
                var
                current = 1,
                height = $('.hero-title').height(),
                numberDivs = $('.hero-title').children().length,
                first = $('.hero-title h1:nth-child(1)');

                setInterval(function() {
                    var number = current * -height;
                    
                    first.css('margin-top', number + 'px');
                    if ( current === numberDivs ) {
                        first.css('margin-top', '0px');
                        current = 1;
                    } else current++;
                }, 2500);
            }

            if ( $('.hero-title').is('.typing') ) {
                $('.hero-title').find('span').typed({
                    strings: ["FOCUS ON YOU", "HAVE EXPERIENCE"],
                    typeSpeed: 10,
                    loop:true,
                    backDelay: 2000
                });
            }
        },

        // Scroll Target
        scrollTarget: function() {
            $('.scroll-target').on('click',function() {
                var anchor = $(this).attr('href').split('#')[1];

                $(this).parent()
                    .addClass('current-menu-item')
                    .siblings()
                        .removeClass('current-menu-item');

                if ( anchor ) {
                    if ( $('#'+anchor).length > 0 ) {
                        var headerHeight = 0;

                        if ( $('body').hasClass('header-sticky') )
                            headerHeight = $('#site-header').height();

                        var target = $('#' + anchor).offset().top - headerHeight;

                        $('html,body').animate({scrollTop: target}, 1000, 'easeInOutExpo');
                   }
                }
                return false;
            })
        },

        // Mobile Navigation
        mobileNav: function() {
            var menuType = 'desktop';

            $(window).on('load resize', function() {
                var mode = 'desktop';
                var $wrapMenu = $('#site-header-inner .site-header-wrap-inner');

                if ( matchMedia( 'only screen and (max-width: 991px)' ).matches )
                    mode = 'mobile';

                if ( mode != menuType ) {
                    menuType = mode;

                    if ( mode == 'mobile' ) {
                        $('#main-nav').attr('id', 'main-nav-mobi')
                            .appendTo('#site-header')
                            .hide()
                                .find('li:has(ul)')
                                .children('ul')
                                    .removeAttr('style')
                                    .hide()
                                    .before('<span class="arrow"></span>');
                    } else {
                        $('#main-nav-mobi').attr('id', 'main-nav')
                            .removeAttr('style')
                            .prependTo($wrapMenu)
                            .find('ul')
                                .removeAttr('style')
                                .prev().remove();
                                
                        $('.mobile-button').removeClass('active');
                    }
                }
            });

            $(document).on('click', '.mobile-button', function() {
                $(this).toggleClass('active');
                $('#main-nav-mobi').slideToggle();
            })

            $(document).on('click', '#main-nav-mobi .arrow', function() {
                $(this).toggleClass('active').next().slideToggle();
            })
        },

        // Search Icon
        searchIcon: function() {
            $('.header-search-icon').on('click', function() {
                var searchForm = $(this).parent().find('.header-search-form'),
                    searchField = $(this).parent().find('.header-search-field');

                searchForm.stop().fadeToggle(function () {
                    searchField.focus();
                });

                return false;
            });
        },

        // Retina Logos
        retinaLogo: function() {
            var retina = window.devicePixelRatio > 1 ? true : false;
            var $logo = $('#site-logo img');
            var $logo_retina = $logo.data('retina');

            if ( retina && $logo_retina ) {
                $logo.attr({
                    src: $logo.data('retina'),
                    width: $logo.data('width'),
                    height: $logo.data('height')
                });
            }
        },

        // Header Fixed
        headerFixed: function() {
            if ( $('body').hasClass('header-fixed') ) {
                var nav = $('#site-header');

                if ( $('body').is('.header-style-2, .header-style-3') ) {
                    var nav = $('.site-navigation-wrap');
                }

                if ( nav.length ) {
                    var offsetTop = nav.offset().top,
                        headerHeight = nav.height(),
                        injectSpace = $('<div />', {
                            height: headerHeight
                        }).insertAfter(nav);

                    $(window).on('load scroll', function(){
                        if ( $(window).scrollTop() > offsetTop ) {
                            nav.addClass('is-fixed');
                            injectSpace.show();
                        } else {
                            nav.removeClass('is-fixed');
                            injectSpace.hide();
                        }
                    })
                }
            }     
        },

        // Scroll to Top
        scrollToTop: function() {
            $(window).scroll(function() {
                if ( $(this).scrollTop() > 800 ) {
                    $('#scroll-top').addClass('show');
                } else {
                    $('#scroll-top').removeClass('show');
                }
            });

            $('#scroll-top').on('click', function() {
                $('html, body').animate({ scrollTop: 0 }, 1000 , 'easeInOutExpo');
            return false;
            });
        },

        // Responsive Video
        responsiveVideos: function() {
            if ( $().fitVids ) {
                $('.wprt-container').fitVids();
            }
        },

        // Detect Viewport
        inViewport:  function() {
            $('[data-inviewport="yes"]').waypoint(function() {
                $(this).trigger('on-appear');
            }, { offset: '90%', triggerOnce: true });

            $(window).on('load', function() {
                setTimeout(function() {
                    $.waypoints('refresh');
                }, 100);
            });
        },

    };

    // Start things up
    wprtTheme.init();

})(jQuery);