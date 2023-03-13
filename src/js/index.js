const botoesCarrossel = document.querySelectorAll('.botao ');
const imagens = document.querySelectorAll('.imagem');

botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        
        desativarBotãoSelecionado();

        selecionarBotãoCarrossel(botao);

        esconderImagemAtiva();

        apresentarImagemDeFundo(indice);
    })
})

function apresentarImagemDeFundo(indice) {
    imagens[indice].classList.add('ativa');
}

function selecionarBotãoCarrossel(botao) {
    botao.classList.add('selecionado');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotãoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}
