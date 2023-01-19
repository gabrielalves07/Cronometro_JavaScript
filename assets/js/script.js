const timer = document.querySelector('p');
const iniciar = document.querySelector('#iniciar');
const pausar = document.querySelector('#pausar');
const zerar = document.querySelector('#zerar');

// criando instancia do Objeto 'Date' e setando hora para 00:00:00
const data = new Date();
data.setHours(0, 0, 0);

let reiniciar = true; // essa váriavel não permite que o usuário clique loucamente
// no botão "iniciar", deixando o sistema com bugs.

iniciar.addEventListener('click', function(event){
    if (reiniciar === true){
        start();
        reiniciar = false;
    }
});

pausar.addEventListener('click', function(event){
    if (reiniciar === false){
        pause();
        reiniciar = true;
    }
});

zerar.addEventListener('click', function(event){
    clear();
    reiniciar = true;
});

let pausarCronometro;

function start(){
    let sec, min, hou;
    timer.style.color = 'black';
    pausarCronometro = setInterval(function(){
        data.setSeconds(data.getSeconds()+1); // atualiza o horário
        sec = data.getSeconds(), min = data.getMinutes(), hou = data.getHours();
        
        // adiciona um zero a esquerda caso o segundo/minuto/hora seja menor ou igual a zero
        if(data.getSeconds() <= 9) sec = `0${data.getSeconds()}`;
        if(data.getMinutes() <= 9) min = `0${data.getMinutes()}`;
        if(data.getHours() <= 9) hou = `0${data.getHours()}`;

        timer.innerHTML = `${hou}:${min}:${sec}`;
    }, 1*1000);
}

function pause(){
    clearInterval(pausarCronometro);
    timer.style.color = 'tomato';
}

function clear(){
    clearInterval(pausarCronometro);
    timer.style.color = 'black';
    timer.innerHTML = '00:00:00';
    data.setHours(0, 0, 0);
}