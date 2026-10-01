const mecanismo= document.getElementById("carousel");
const telacarousel = document.getElementById("carousel");
const bntEsquerda = document.querySelector('#btnEsquerda');
const bntDireita = document.querySelector('#btnDireita');

const cores = [
    'var(--azul-300)',
    'var(--rosa)',
    'var(--vermelho-vinho)'
];

/*variavel acumuladora de valor*/
let indiceAtual = 0;
function atualizarCarrossel() {
    telacarousel.style.backgroundColor = cores[indiceAtual];
}
bntDireita.addEventListener("click",() =>{
    indiceAtual++;
    if(indiceAtual>cores.length){
        indiceAtual=0;
    }
});

bntEsquerda.addEventListener("click",() =>{
    indiceAtual--;
    if(indiceAtual<0){
        indiceAtual=cores.length-1;
    }
    atualizarCarrossel();
});
atualizarCarrossel();