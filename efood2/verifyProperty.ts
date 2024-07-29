// Função que verifica e acessa a propriedade 'isOpen' de um objeto desconhecido
function checkIsOpen(obj: unknown) {
  // Verifica se 'obj' é um objeto e se possui a propriedade 'isOpen'
  if (typeof obj === "object" && obj !== null && "isOpen" in obj) {
    // Converte 'obj' para o tipo que você espera
    let typedObj = obj as { isOpen: boolean };

    // Acessa e retorna o valor de 'isOpen'
    return typedObj.isOpen;
  } else {
    // Caso 'obj' não tenha a estrutura esperada, retorna um valor padrão ou lança um erro
    throw new Error("O objeto não possui a propriedade 'isOpen'");
  }
}

// Exemplos de uso:

// Objeto com a propriedade 'isOpen'
let objeto1: unknown = { isOpen: true };
try {
  console.log(checkIsOpen(objeto1)); // Saída: true
} catch (error) {
  console.error(error.message); // Apenas para exemplificação, pois o objeto possui 'isOpen'
}

// Objeto sem a propriedade 'isOpen'
let objeto2: unknown = { name: "Teste" };
try {
  console.log(checkIsOpen(objeto2)); // Tentativa de acessar 'isOpen' em objeto que não possui
} catch (error) {
  console.error(error.message); // Saída: "O objeto não possui a propriedade 'isOpen'"
}
