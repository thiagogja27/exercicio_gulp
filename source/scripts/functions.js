function cumprimentar(nome) {
    return `Olá, ${nome}! Bem-vindo(a)!`;
  }
  

  const mensagem = cumprimentar("João");
  console.log(mensagem); 



  function verificarParOuImpar(numero) {
    if (numero % 2 === 0) {
      return `${numero} é um número par.`;
    } else {
      return `${numero} é um número ímpar.`;
    }
  }
  

  const resultado = verificarParOuImpar(7);
  console.log(resultado); 
  
  

module.exports = somar; //para exportar uma função para outro arquivo js//


