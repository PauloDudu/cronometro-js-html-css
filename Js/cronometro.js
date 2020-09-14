(() => {
  let timer = document.querySelector('.numbers');
  let botaoIniciar = document.querySelector('.botaoIniciar');
  let botaoParar = document.querySelector('.botaoParar');
  let botaoZerar = document.querySelector('.botaoZerar');

  let HH = "00";
  let MM = "00";
  let SS = "00";

  let rodando = false;
  let intervalo;

  /* Iniciar a contagem */
  botaoIniciar.addEventListener('click', () => {
    botaoIniciar.innerText = 'Iniciar';
    if(!rodando) {
      intervalo = setInterval(contagemProgressiva, 1000);
      rodando = true;
    }
  })

  /* Parar  a contagem */
  botaoParar.addEventListener('click', () => {
    if(rodando) {
      botaoIniciar.innerText = "Continuar";
    }
    rodando = false;
    clearInterval(intervalo);
  })

  /* Zerar contagem */
  botaoZerar.addEventListener('click', () => {
    botaoIniciar.innerText = "Iniciar";
    clearInterval(intervalo);
    HH = "00";
    MM = "00";
    SS = "00";
    timer.textContent = `${HH}:${MM}:${SS}`;
    rodando = false;
    
  })

  function contagemProgressiva() {
    SS = parseInt(SS);
    SS++;
    verificarSegundos();
    if (SS >= 60) {
      SS = "00";
      MM = parseInt(MM);
      MM++;
      verificarMinutos();
    } else if (MM >= 60) {
      MM = "00";
      HH = parseInt(HH);
      HH++;
      verificarHoras();
    }

    timer.textContent = `${HH}:${MM}:${SS}`;
  }

  /* Funcoes para ajeitar a forma com sera mostrado o timer */
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