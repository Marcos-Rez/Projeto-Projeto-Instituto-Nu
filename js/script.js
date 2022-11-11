console.log("Carregado em um arquivo esterno")
//var roupa = document.querySelector("#r1");
//var preco =  document.querySelector("#v1");
/*
function botaoX () {
    botaoAdcionarCarrinho.addEventListener("click", function(event){
        numItens += 1;
        total = numItens * precoItem_1;
        console.log("num itens: "+numItens);
        console.log("total: "+total);
        console.log(preco2.textContent);
    })
}
*/

//Criar uma função que cria <li></li> dentro da <ul></ul>


var numItens = 0;
var total = 1;

function calculoDeValores(preco, total){
    
    numItens += 1;
    total = numItens * preco;

    console.log("num itens: "+numItens);
    console.log("total: "+total);
}
//---------------------------------------

var preco = document.querySelector(".v1");
var preco = parseFloat(preco.textContent);

var botaoAdcionarCarrinho = document.querySelector(".btm-1")
botaoAdcionarCarrinho.addEventListener("click", function(event){

    calculoDeValores(preco);
    //function CriarLI();
   
})


var preco2 =  document.querySelector(".v2");
var preco2 = parseFloat(preco2.textContent);
console.log(preco2);

var botaoAdcionarCarrinho = document.querySelector(".btm-2")
botaoAdcionarCarrinho.addEventListener("click", function(event){

    calculoDeValores(preco2, total);
   
})


