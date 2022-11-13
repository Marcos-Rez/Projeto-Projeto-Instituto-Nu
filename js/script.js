

function criarElementos(roupa, preco) {

    var ul = document.createElement("ul");

    var li = document.createElement("li");

    var div1 = document.createElement("div");
    var h61 = document.createElement("h6");
    var small1 = document.createElement("small");
    var span1 = document.createElement("span");

    h61.textContent = roupa;
    span1.textContent = preco;

    li.appendChild(div1);
    li.appendChild(h61);
    li.appendChild(small1);
    li.appendChild(span1);
    
    var meuCarrinho = document.querySelector(".carrinho");
    meuCarrinho.appendChild(li);
  

}




var numItens = 0;
var total = 0;

var roupa = document.querySelector(".r1")
var preco = document.querySelector(".v1");
var preco = parseFloat(preco.textContent);

//-------------------------------------------------

function calculoDeValores(preco) {

    numItens += 1;
    total += preco;
    console.log("num itens: " + numItens);
    console.log("total: " + total);



}

//---------------------------------------


var botaoAdcionarCarrinho = document.querySelector(".btm-1")
botaoAdcionarCarrinho.addEventListener("click", function (event) {

    var roupa = document.querySelector(".r1")
    var preco = document.querySelector(".v1");

    var preco = parseFloat(preco.textContent);
    var roupa = roupa.textContent;

    console.log("-> "+roupa);
    console.log("-> "+preco);

    calculoDeValores(preco);
    criarElementos(roupa, preco);

})


var preco2 = document.querySelector(".v2");
var preco2 = parseFloat(preco2.textContent);

var botaoAdcionarCarrinho = document.querySelector(".btm-2")
botaoAdcionarCarrinho.addEventListener("click", function (event) {

    calculoDeValores(preco2);


})


