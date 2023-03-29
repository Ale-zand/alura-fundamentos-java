// let x = "";
// console.log(x);
// x = "oi";          //não funciona pq o console.log veio antes da atribuição. Deve-se utilizar uma function

// DECLARAÇÃO DE FUNÇÃO



// 1) declara a função
                      //string
function imprimeTexto(texto){
    console.log(texto)
}

// 2) executa a função (1 ou + vezes)

imprimeTexto("oi");
imprimeTexto("outro texto")

// três formas de escrever funções

function soma(){
    return 2 + 2;
}

console.log(soma())

// função dentro de função

imprimeTexto(soma());
