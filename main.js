// Declaração de uma função chamada tocaSom que aceita o id do elemento de áudio a ser tocado
function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play(); // Toca o áudio correspondente ao id fornecido
}

// Seleciona todos os elementos com a classe 'tecla' e armazena em uma constante chamada listaDeTeclas
const listaDeTeclas = document.querySelectorAll('.tecla');

// Loop for para iterar sobre cada elemento na listaDeTeclas
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador]; // Obtém o elemento da lista atual
    const instrumento = tecla.classList[1]; // Obtém a segunda classe do elemento (o nome do instrumento)
    const idAudio = `#som_${instrumento}`; //template string

    // Define um evento de clique para a tecla atual
    tecla.onclick = function () {
        tocaSom(idAudio); // Chama a função tocaSom para tocar o áudio correspondente quando a tecla é clicada
    
    }

}
