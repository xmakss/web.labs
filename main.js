(function (window, document) {
    window.onload = init;

    function init() {
        var elemToStyle = document.getElementById("stylize");
        var selector = document.getElementById("id_elem");
        var text_input = document.getElementById("txt");
        var input_value = text_input.value;
        elemToStyle.addEventListener('mouseover', set_style, true);
        elemToStyle.addEventListener('mouseout', clear_styles, true);
        text_input.addEventListener('change', set_input_value, true);
        selector.addEventListener('change', element_changed, true);

        function set_input_value(){
            input_value = text_input.value;
        }
        function clear_styles(cur_tr){
            cur_tr.target.setAttribute("style" , "")
        }
        function element_changed() {
            console.log(selector.value)
            elemToStyle.removeEventListener('mouseover', set_style, true);
            elemToStyle = document.getElementById(selector.value);
            elemToStyle.addEventListener('mouseover', set_style, true);
        }

        function set_style(cur_tr)
        {
            cur_tr.target.setAttribute("style" , input_value)
        }
    }
})(window, document);