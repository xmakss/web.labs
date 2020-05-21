(function (window, document) {
    window.onload = init;

    function init() {
        var input_value, result_value='';
        var elemToStyle = document.getElementById("stylize");
        elemToStyle.addEventListener('mouseover', set_style, true);
        document.getElementById("btn").onclick = set_input_value;
        document.getElementById("btn_clear").onclick = clear_styles;

        function set_input_value(){
            input_value = document.getElementById("txt").value;
            result_value += input_value.split(';').join(';')
        }
        function clear_styles(){
            elemToStyle.setAttribute("style", "")
            document.getElementById("txt").value=''
            result_value=''
            for (var i=0; i<elemToStyle.childNodes.length; i++)
            {
                if(elemToStyle.childNodes[i].innerHTML){elemToStyle.childNodes[i].setAttribute("style", "")}
            }
        }

        function set_style(cur_tr)
        {
            cur_tr.target.setAttribute("style" , result_value)
        }
    }
})(window, document);