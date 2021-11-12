document.addEventListener('DOMContentLoaded', function(event) {
    if (document.title == "Home") {
        var dataText = ["Conheça: Cloud Computing"];
    } else if (document.title == "Quem Somos") {
        var dataText = ["Quem Somos"];
    } else if (document.title == "O papel da Web") {
        var dataText = ["O papel da Web"]
    } else if (document.title == "Segurança na Nuvem") {
        var dataText = ["Segurança na nuvem"]
    }

    function typeWriter(text, i, fnCallback) {
        if (i < (text.length)) {
            document.querySelector(".typedtext").innerHTML = text.substring(0, i + 1) + '<span id="cursor" aria-hidden="true"></span>';

            setTimeout(function() {
                typeWriter(text, i + 1, fnCallback)
            }, 100);
        } else if (typeof fnCallback == 'function') {
            setTimeout(fnCallback, 700);
        }
    }

    function StartTextAnimation(i) {
        if (typeof dataText[i] == 'undefined') {
            setTimeout(function() {
                StartTextAnimation(0);
            }, 20000);
        }
        if (i < dataText[i].length) {
            typeWriter(dataText[i], 0, function() {
                StartTextAnimation(i + 1);
            });
        }
    }
    StartTextAnimation(0);
});