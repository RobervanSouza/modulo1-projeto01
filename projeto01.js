console.clear(); 
 const prompt = require('prompt-sync')();  
const continua = " Dê ENTER para responder um questionario!!! " // variavel para responder as perguntas
 prompt(`"Minha história... Olá eu sou Robervan Sousa, tenho 32 anos, sou Piauiense, casado com Auriene e
 tenho duas filhas, Alice e Beatriz. Aos 17 anos de idade fui para São Paulo onde morei por 07 anos, 
 trabalhei na NovaKoasin, Trexcon, e tercerizado na Petrobras. Depois fui para Fortaleza-Ce, casei-me 
 com a Auriene e trabalhei na Grendene por 04 anos e me formei em técnico mecatrônica. Lá nasceu 
 a minha primeira filha Alice, depois de um tempo voltei para o Piauí, onde estou até hoje. 
 Aqui nasceu a minha segunda filha Beatriz. Meu namoro com a Auriene foi pelo facebook, por onde 
 começamos a conversar e depois nos casamos. Esse é um resumo da minha história. " \n\n ${continua}`);
 
 let Respostas = 0; // contador de respostas
let resposta = "RESPOSTA INVALIDA ";
console.log();

 let pergunta1 = prompt(`Você ama sua esposa? `);// usei o toLowerCase para o programa aceitar palavras maiúsculas ou minúsculas.
 while( pergunta1!== "sim" && pergunta1!== "nao" ) { // usei o while para aceitar so o que Sim ou Nao, Obs; não aceita numeros nem outras palavras.
  pergunta1 = prompt(` ${resposta}   " Digite sim ou nao"   Você ama sua esposa? `)// caso não tenha digitado sim ou não retorna a pergunta
} if (pergunta1 === "sim") {
    Respostas ++ } // contador de sim onde armazenas as respostas 
 
 
    console.log();
let pergunta2 = prompt(`Você quer ter um filho homem?  `)
while( pergunta2!== "sim" && pergunta2!== "nao" ){
    pergunta2 = prompt(` ${resposta}  "digite sim ou nao"  Você quer ter um filho homem?  `)
}    if (pergunta2 === "sim") {
    Respostas ++ }


   console.log();
    let  pergunta3 = prompt("Suas filhas dão muito trabalho em casa? ")
    while( pergunta3!== "sim" && pergunta3!== "nao" ) {
        pergunta3 = prompt(`${resposta}  "digite sim ou nao"  Suas filhas dão muito trabalhe em casa? `)
    }    if (pergunta3 === "sim") {
        Respostas ++ }


        console.log();
let pergunta4 = prompt(" Você gostou de morar em São Paulo?  ")
while( pergunta4 !== "sim" && pergunta4!== "nao" ) {
    pergunta4= prompt(`${resposta} "digite sim ou nao"   Você gostou de morar em São Paulo? `)
} if (pergunta4 === "sim") {
    Respostas ++ }


 console.log();
 let pergunta5 = prompt(" Você gostou de morar em Fortaleza? ")
 while( pergunta5 !== "sim" &&  pergunta5 !== "nao" ) {
    pergunta5 = prompt(`${resposta}  "digite sim ou nao"  Você gostou de morar em Fortaleza?  `)
} if ( pergunta5 === "sim") {
    Respostas ++ }

console.log(Respostas);
 


if(Respostas == 0)// variaveis para comprara as respostas e apresentar uma descrição conforme as respostas. 
{
  console.log(" Você falha miseravelmente ")
}
else if(Respostas == 1 || Respostas == 2)
{
  console.log("Você falha, mas ainda consegue fugir da situação ")
}
else if(Respostas == 3)
{
  console.log("Você chega perto de conseguir alcançar seu objetivo, mas acaba falhando por pouco ")
}
else if (Respostas == 4){
    console.log('Depois de muito esforço você conquista seu objetivo, embora não de maneira perfeita.')
}
else if (Respostas == 5) {
    console.log(" Você triunfa de maneira inquestionável e seus feitos serão lembrados por muitas gerações.\n")
}
console.log("Fim do questionario!!!"); 