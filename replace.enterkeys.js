(function ($) {
    $.fn.replaceEnters = function () {

        function checkForEnter(event) {
            if (event.keyCode == 13) {
                //validation
                try {
                    if (!$(this).valid()) {
                        return true;
                    }
                } catch (e) {

                }

                var inputs = $(":input").not(":hidden").not(":button").not(":submit");
                var currentInputNumber = inputs.index(this);
                var input;
                if (inputs[currentInputNumber + 1] != null) {
                    input = inputs[currentInputNumber + 1];
                    selectInput(input);
                } else if (inputs.length > 0) {
                    input = inputs[0];
                    selectInput(input);
                }
                event.preventDefault();
                return false;
            }
        }
        function selectInput(input) {
            input.focus();
            //Can go wrong on select inputs  
            try {
                input.select();
            } catch (ex) {
            }
        }

        return this.each(function () {


            if ($(this).is(":input")) {
                if ($.browser.mozilla) {
                    $(this).keypress(checkForEnter);
                } else {
                    $(this).keydown(checkForEnter);
                }
            }


        });
    };
})(jQuery);