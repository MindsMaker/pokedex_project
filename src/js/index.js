alert("Olá! Seja bem vindo(a)! Esse é o PokéDex criado pelo Dev Matheus Abreu Damasceno. Divirta-se!");
/* 
    Ao clicar no botão troca de tema, terá que trocar o tema de claro para escuro e o ícone do botão.

    - Objetivo 1 - Quando clicar no botão troca de tema, adicionar a classe modo-escuro no body para que os estilos de modo escuro sejam aplicados e mudar a imagem para lua.

        Passo 1 - Pegar no JS o elemento HTML correspondente ao botão de troca de tema;
        Passo 2 - Dar um jeito de pegar no JS o elemento HTML correspondente ao body;
        Passo 3 - Dar um jeito de identificar o clique do usuário no botão de troca de tema;
        Passo 4 - Verificar se o body já tem a classe modo-escuro;
        Passo 5 - Adicionar a classe modo escuro no body;
        Passo 6 - Alterar a imagem do botão de troca de tema de sol para lua.

    - Objetivo 2 - Quando clicar no botão de troca de tema novamente, remover a classe modo-escuro e mudar para a classe modo-claro e trocar a imagem de lua para sol.
        
        Passo 7 - Remover a classe modo-escuro do body
        Passo 8 - Alterar a imagem do botão de troca de tema de lua para sol.

*/

const botaoAlterarTema = document.getElementById("botao-alterar-tema");

console.log(botaoAlterarTema);

const body = document.querySelector("body");
console.log(body);

const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao");

botaoAlterarTema.addEventListener("click", () => {
    console.log("clicou no botão");

    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

    body.classList.toggle("modo-escuro");

    if (modoEscuroEstaAtivo) {
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png");

    } else {
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png");
    }
})