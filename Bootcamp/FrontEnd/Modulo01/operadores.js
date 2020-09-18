//      >       Maior
//      <       Menor
//      >=      Maior igual a 
//      <=      Menor igual a
//      ==      Igual a 
//      ===     Igual e do mesmo tipo 
//      !=      Diferente de 
//      !==     Diferente, inclusive do tipo 

// ======================================

// teste de conceitos 
console.log( 5 > 4 )  // true 
console.log( 5 < 4 )  // false 
console.log( 5 >= 4 ) // true 
console.log( 4<=4 )  // true 


console.log( 4 == "4" )  // true 
console.log( 4 === "4" )  // false 
console.log( 4 != "5" ) // true 
console.log( 4 !=="5" )  // true 

// DESAFIO 1 
const idade = 17

// verificar se a pessoa é maior igual a 18 anos 
// Se sim, deixar entrar , se não, bloquear a entrada
 if (idade >=18) {
     console.log("Deixar entrar")
 } else {

     console.log("Bloquear a entrada")
 }

 // Se a pessoa tiver 17 anos 
 // avisar para voltar quanto tiver 18 anos 
 if (idade ===17) {

    console.log ("voltar quando tiver 18 anos")
 }
