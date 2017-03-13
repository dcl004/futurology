// Slider module
$(function() {
    var SliderModule = (function() {
        var pb = {};
        pb.el = $('#slider');
        pb.items = {
            panels: pb.el.find('.slider-wrapper > li')
        };

        // Initialize Slider intervals
        var SliderInterval,
            currentSlider = 0,
            nextSlider = 1,
            lengthSlider = pb.items.panels.length;

        // Construct the Slider
        pb.init = function(settings) {
            this.settings = settings || {duration: 8000};
            var items = this.items,
                lengthPanels = items.panels.length,
                output = '';

            // Insert buttons
            for(var i = 0; i < lengthPanels; i++) {
                if(i == 0) {
                    output += '<li class="active"></li>';
                } else {
                    output += '<li></li>';
                }
            }
            var ctrlBtn = $('#control-buttons');
            ctrlBtn.html(output);

            // Activate the Slider
            activateSlider();
            // Event (button) listener
            ctrlBtn.on('click', 'li', function() {
                var $this = $(this);
                if(!(currentSlider === $this.index())) {
                    changePanel($this.index());
                }
            });

        };

        // function: activateSlider()
        var activateSlider = function() {
            SliderInterval = setInterval(pb.startSlider, pb.settings.duration);
        };

        // function: startSlider()
        pb.startSlider = function() {
            var items = pb.items,
                controls = $('#control-buttons').find('li');
            // Last panel check to loop back to the first panel
            if(nextSlider >= lengthSlider) {
                nextSlider = 0;
                currentSlider = lengthSlider-1;
            }

            controls.removeClass('active').eq(nextSlider).addClass('active');
            items.panels.eq(currentSlider).fadeOut('slow');
            items.panels.eq(nextSlider).fadeIn('slow');

            // Update Slider data
            currentSlider = nextSlider;
            nextSlider += 1;
        };

        // function: changePanel()
        // Change on display panel via buttons
        var changePanel = function(id) {
            clearInterval(SliderInterval);
            var items = pb.items,
                controls = $('#control-buttons').find('li');
            // Check if ID exists between panels
            if(id >= lengthSlider) {
                id = 0;
            } else if(id < 0) {
                id = lengthSlider-1;
            }

            controls.removeClass('active').eq(id).addClass('active');
            items.panels.eq(currentSlider).fadeOut('slow');
            items.panels.eq(id).fadeIn('slow');

            // Update Slider data
            currentSlider = id;
            nextSlider = id+1;
            // Reactivate Slider
            activateSlider();
        };
        return pb;
    }());

    SliderModule.init({duration: 4000});

});