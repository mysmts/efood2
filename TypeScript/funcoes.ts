// Função de multiplicação
function multiplicar(x: number, y: number): number {
    return x * y;
  }
  
  // Função de saudação
  function saudacao(nome: string): string {
    return `Olá ${nome}`;
  }
  
  // Exemplos de uso
  const resultadoMultiplicacao = multiplicar(5, 3);
  const mensagemSaudacao = saudacao("João");
  
  console.log(resultadoMultiplicacao); // Saída: 15
  console.log(mensagemSaudacao);       // Saída: Olá João
  