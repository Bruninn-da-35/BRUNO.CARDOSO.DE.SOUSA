/**
 * @jest-environment jsdom
 */


//Tive que colocar essa maracutaia pra simular o window.alert para que não cause erros (tava dando um monte de erro sem isso kk)
global.alert = jest.fn();


// Importa o cód que vai testado
const fs = require('fs');
const path = require('path');

// Carrega o conteúdo  da parte HTML do meu cód
const html = fs.readFileSync(path.resolve(__dirname, './jogos.html'), 'utf8');

// Simula o DOM carregado
document.body.innerHTML = html;
require('./js/jogo.js');  // Importa as funções do meu arquivo JS


describe('TESTE DAS FUNCIONALIDADES DE TROCA DE IMAGEM E EXIBIÇÃO DE TEXTO CORRETO AO CLICAR NOS BOTÕES CORRESPONDENTES!', () => {

  test('Deve exibir o texto correto ao clicar no botão do jogo Borderlands 3', () => {
    const button1 = document.getElementById('btn1');
    button1.click();

    const texto1 = document.getElementById('texto1');
    expect(texto1.style.display).toBe('block');
    expect(texto1.textContent).toContain('Borderlands 3 é, sem dúvida, um dos meus jogos mais nostálgicos');
  });

  test('Deve exibir o texto correto ao clicar no botão do jogo Dead By Daylight', () => {
    const button2 = document.getElementById('btn2');
    button2.click();

    const texto2 = document.getElementById('texto2');
    expect(texto2.style.display).toBe('block');
    expect(texto2.textContent).toContain('Dead by Daylight é um jogo que me marcou muito, especialmente durante a pandemia');
  });

  test('Deve exibir o texto correto ao clicar no botão do jogo Life is Strange', () => {
    const button3 = document.getElementById('btn3');
    button3.click();

    const texto3 = document.getElementById('texto3');
    expect(texto3.style.display).toBe('block');
    expect(texto3.textContent).toContain('Life is Strange é um jogo mais narrativo, e a história dele é, sem dúvida, uma das mais incríveis que já vi');
  });

  test('Deve alterar o fundo corretamente ao clicar no botão do jogo Borderlands 3', () => {
    const button1 = document.getElementById('btn1');
    button1.click();

    expect(document.body.style.backgroundImage).toBe('url(BORDERLANDS3.jpg)');
    expect(document.getElementById('texto1').style.display).toBe('block');
  });

  test('Deve alterar o fundo corretamente ao clicar no botão do jogo Dead By Daylight', () => {
    const button2 = document.getElementById('btn2');
    button2.click();

    expect(document.body.style.backgroundImage).toBe('url(DEADBYDAYLIGHT.jpg)');
    expect(document.getElementById('texto2').style.display).toBe('block');
  });

  test('Deve alterar o fundo corretamente ao clicar no botão do jogo Life is Strange', () => {
    const button3 = document.getElementById('btn3');
    button3.click();

    expect(document.body.style.backgroundImage).toBe('url(LIS2.jpg)');
    expect(document.getElementById('texto3').style.display).toBe('block');
  });

});
