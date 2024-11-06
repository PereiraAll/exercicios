
// Atividade 1 ---


// var qd2 = document.getElementById("qd1")

// qd2.addEventListener('click', function() { 
//     if(qd1.style.backgroundColor == "black") {
//         qd1.style.backgroundColor = "green"
//     } else {
//         qd1.style.backgroundColor = "black"
//     }
// })



// var qd3 = document.getElementById("qd10")

// qd3.addEventListener('click', function() { 

//     if(qd10.style.backgroundColor == "yellow") {
//         qd10.style.backgroundColor = "purple"
//     } else {
//         qd10.style.backgroundColor = "yellow"
//     }
// })



// var qd4 = document.getElementById("qd100")

// qd4.addEventListener('click', function() { 
//     if(qd100.style.backgroundColor == "gray") {
//         qd100.style.backgroundColor = "blue"
//     } else {
//         qd100.style.backgroundColor = "gray"
//     }
// })


// -------------------------------------------------------------------------------------------------------------------------------------------------



//  Atividade 2 ---


// let clicar = document.getElementById('clicar')
// let contador = document.getElementById('contador')
// let zerrar = document.getElementById('excluir')

// let contagem = 0

// clicar.addEventListener('click',function(){
//     contagem = contagem + 1
//     contador.innerText = contagem
// })
// zerrar.addEventListener('click',function(){
//    contagem = 0
//    contador.innerText = contagem
// })

    

// -------------------------------------------------------------------------------------------------------------------------------------------------


//  Atividade 3 ---


// var mnsg1 = document.getElementById("botao")
// var texto = document.getElementById("mnsg")

// mnsg1.addEventListener('click', function(){
//     if(mnsg.style.display == "none") {
//         mnsg.style.display = "block"
//     } else if(mnsg.style.display == "block"){
//         mnsg.style.display = "none"
//     }
// })



// -------------------------------------------------------------------------------------------------------------------------------------------------


//  Atividade 4 ---


// var texto = document.getElementById("textoPadrao")
// var mudar = document.getElementById("mudarTexto")

// mudar.addEventListener('click', function(){
//     let a = prompt("Digite um novo texto")
//     textoPadrao.innerText = a
// })



// -------------------------------------------------------------------------------------------------------------------------------------------------


//  Atividade 5 ---


// let texto = document.getElementById('texto')
 
// document.addEventListener('keydown', function(event){
 
//     texto.innerText = `Você digitou a tecla: ${event.key}`
// })
 



// -------------------------------------------------------------------------------------------------------------------------------------------------


//  Atividade 6 ---
 



// let votar = document.getElementById("votar")
// let imagemG = document.getElementById("generico")
 
// document.addEventListener("click",function(){
//     let pergunta = Number(prompt("Em qual canidato você quer votar: \n(12)Vitugo \n(21)Otto\n(8)Arnold \n(24)Arthur Juwer"))
//    switch (pergunta) {
//         case 12:
//             let confirmar1 = prompt("Você deseja confirmar seu voto no candidato vitugo: (S/N)")
//             if (confirmar1 == 'S'){
//                 alert("Você votou no candidato vitugo")  
//                 imagemG.setAttribute('src', '/Imagens/Image (5).jpg') 
//             }
//             else{
//             alert("Reinicie a pagina e escolha outro candidato")    
//         }
//         break
//         case 21:
//         let confirmar2 = prompt("Você deseja confirmar seu voto no candidato Otto: (S/N)")
//         if(confirmar2 == 'S'){
//             alert("Você votou no candidato Otto")
//             imagemG.setAttribute('src', '/Imagens/Image (6).jpg') 
//         }    
//         else{
//             alert("Reinicie a pagina e escolha outro candidato")    
//             }
//         break
//             case 8:
//         let confirmar3 = prompt("Você deseja confirmar seu voto no candidato Arnold: (S/N)")
//         if(confirmar3 == 'S'){
//             alert("Você votou no candidato Arnold")
//             imagemG.setAttribute('src', '/Imagens/Image (7).jpg') 
//         }    
//         else{
//             alert("Reinicie a pagina e escolha outro candidato")    
//             }
//         break
//             case 24:
//         let confirmar4 = prompt("Você deseja confirmar seu voto no candidato Arthur Juwer: (S/N)")
//         if(confirmar4 == 'S'){
//             alert("Você votou no candidato Arthur Juwer")
//             imagemG.setAttribute('src', '/Imagens/Image (8).jpg') 
//         }    
//         else{
//             alert("Reinicie a pagina e escolha outro candidato")    
//             }
//         break
//             case 69:
//                 alert("Você descobriu o candidato secreto Cidade")
//         let confirmar5 = prompt("Você deseja confirmar seu voto no candidato secreto Cidade: (S/N)")
//         if(confirmar5 == 'S'){
//             alert("Você votou no candidato secreto Cidade")
//             imagemG.setAttribute('src', '/Imagens/Cidade.jpg') 
//         }    
//         else{
//             alert("Reinicie a pagina e escolha outro candidato")    
//             }
//             break
 
//    }

// })