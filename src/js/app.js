const btnEsquerda = document.querySelector('#btnEsquerda');
const btnDireita = document.querySelector('#btnDireita');
const telaCarrosel = document.getElementById('carousel'); 

const imagens = [
    "url('./images/selwyn_kane.webp')",
    "url('./images/cardan02.jpg')",
    "url('./images/wriothesley.jpg')"
];

let indiceatual = 0;

function atualizarCarrosel(){
    if (telaCarrosel) {
        // 2. MUDANÇA: Mudamos de backgroundColor para backgroundImage
        telaCarrosel.style.backgroundImage = imagens[indiceatual]; 
    }
}

btnDireita.addEventListener("click", () => {
    indiceatual++;
    if(indiceatual >= imagens.length){
        indiceatual = 0;
    }
    atualizarCarrosel();
});

btnEsquerda.addEventListener("click", () => {
    indiceatual--;
    if(indiceatual < 0){
        indiceatual = imagens.length - 1;
    }
    atualizarCarrosel();
});

// Inicializa a primeira imagem logo de cara assim que a página carregar
atualizarCarrosel();