// Funçãozinha marota para alterar a imagem de fundo
function alterarFundo(caminhoImagem) {
    document.body.style.backgroundImage = `url(${caminhoImagem})`;
}

// Função para exibir o texto e esconder os outros
function exibirTexto(textoId) {

    // Esconder todas as caixas de texto
    document.querySelectorAll('.caixa-texto').forEach(function (caixa) {

        caixa.style.display = 'none';

    });

    // Exibir o texto correspondente
    document.getElementById(textoId).style.display = 'block';
}

// Adicionar eventos de clique para os botões
document.getElementById('btn1').addEventListener('click', function () {

    alterarFundo('BORDERLANDS3.jpg'); 

    exibirTexto('texto1');      
});

document.getElementById('btn2').addEventListener('click', function () {

    alterarFundo('DEADBYDAYLIGHT.jpg'); 

    exibirTexto('texto2');       

});

document.getElementById('btn3').addEventListener('click', function () {

    alterarFundo('LIS2.jpg'); 

    exibirTexto('texto3');       

});

alert ('Opa! Essa página apresenta 3 dos meus jogos preferidos que me marcaram bastante. Aperte o botão correspondente ao jogo para saber um pouco da minha história com eles!')