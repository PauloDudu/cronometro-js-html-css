(() => {
    let HH = document.querySelector('.hora');
    let MM = document.querySelector('.minuto');
    let SS = document.querySelector('.segundo');

    let botao = document.querySelector('.btnIniciar');
    let timer = document.querySelector('.timer');

    var hora;
    var minuto;
    var segundo;

    botao.addEventListener('click', () => {
        setInterval(contagemRegressiva, 1000);
    })

    function contagemRegressiva() {
        hora = HH.value;
        minuto = MM.value;
        segundo = SS.value;

        reduzirSegundo(segundo);
        if (hora <= 0 && minuto <= 0 && segundo <= 0) {
            hora = "00";
            minuto = "00";
            segundo = "00";
            /* clear interval aqui */
        } else if (hora <= 0 && minuto <= 0) {
            hora = "00";
            minuto = "00";
            segundo--;
        }


        timer.textContent = `${hora}:${minuto}:${segundo}`
    }



    function reduzirHora(hora) {
        
    }

    function reduzirMinuto(minuto) {
        
    }

    function reduzirSegundo(segundo) {
        segundo--;
        if(segundo <= 0 && segundo != "00") {
            minuto--;
            segundo = 59;
        }
    }

    function verificarSegundos() {
        (SS < 10) ? SS = "0" + SS : SS = SS;
    }

    function verificarMinutos() {
        (MM < 10) ? MM = "0" + MM : MM = MM;
    }

    function verificarHoras() {
        (HH < 10) ? HH = "0" + HH : HH = HH;
    }
})()