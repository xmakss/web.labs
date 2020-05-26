(function (window, document) {
    window.onload = init;

    function init() {
        var input_value, result_value='';
        var elemToStyle = document.getElementById("stylize");
        var selector = document.getElementById("id_elem");
        var text_input = document.getElementById("txt");
        elemToStyle.addEventListener('mouseover', set_style, true);
        elemToStyle.addEventListener('mouseout', clear_styles, true);
        text_input.addEventListener('change', set_input_value, true);
        selector.addEventListener('change', element_changed, true);

        function set_input_value(){
            input_value = text_input.value;
            result_value += input_value.split(';').join(';')
        }
        function clear_styles(cur_tr){
            cur_tr.target.setAttribute("style" , "")
        }
        function element_changed() {
            elemToStyle.removeEventListener('mouseover', set_style, true);
            elemToStyle.removeEventListener('mouseout', clear_styles, true);
            elemToStyle = document.getElementById(selector.value);
            elemToStyle.addEventListener('mouseover', set_style, true);
            elemToStyle.addEventListener('mouseout', clear_styles, true);
        }

        function set_style(cur_tr)
        {
            cur_tr.target.setAttribute("style" , result_value)
        }
    }
})(window, document);