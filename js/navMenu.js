$(function() {
    var navMenuModule = (function() {
        this.init = function($el, settings) {
            this.$el=$el;
            this.classid=$el.data("classid");
            this.navTitle=$('.one');
            this.settings=settings;
            bindings();
            addCurrent();
            currentListShow();
        };

        var bindings = function() {
            this.$el.on('click.navMenu','div.one',function(){
                if($(this).find('span')){
                    var $span=$(this).find('span');
                    if($span.hasClass('icon_open')){
                        $(this).next('ul').slideUp();
                        $span.removeClass('icon_open')
                    } else {
                        $(this).next('ul').slideDown();
                        $span.addClass('icon_open')
                    }
                }
            });
        };

        var addCurrent = function() {
            if(this.classid) {
                this.$el.find('#child'+this.classid).parent('li').addClass(this.settings.active);
            }
        };

        var currentListShow = function() {
            var $current=this.$el.find('.'+this.settings.active);
            this.$el.find('span').removeClass('icon_open');
            $current.parentsUntil(this.$el, 'ul').prev('div').children('span').addClass('icon_open');
            $('ul', this.$el.children('ul')).hide();
            $current.parentsUntil(this.$el, 'ul').show();
        };
        return this;
    }());

    navMenuModule.init($('.nav_menu'), {active: 'current'});
});