
function playSonido (idElementoAudio)
{
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');


for( let contador = 0; contador < listaDeTeclas.length ; contador++)//bucle repetitivo optimizdo: length se refiere al tamaño de la lista
{
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla. classList[1];

    const idAudio = `#sonido_${instrumento}`;
    console.log(idAudio);

    tecla.onclick = function ()
    {
        playSonido(idAudio);
    };

    tecla.onkeydown = function(evento)
    {
        if (evento.code === 'Space' || evento.code === 'Enter'){ //la estricta igualdas "===" verifica el texto y el tipo de codigo
            tecla.classList.add('activa');
        }
    }

    tecla.onkeyup = function()
    {
        tecla.classList.remove('activa');
    }


}
