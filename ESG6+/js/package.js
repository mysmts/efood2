// Array de objetos representando alunos
const alunos = [
  { nome: 'João', nota: 8 },
  { nome: 'Maria', nota: 5 },
  { nome: 'Carlos', nota: 7 },
  { nome: 'Ana', nota: 6 },
  { nome: 'Pedro', nota: 9 },
];

// Função que retorna apenas os alunos com nota maior ou igual a 6
const alunosAprovados = (arrayAlunos) => {
  return arrayAlunos.filter(aluno => aluno.nota >= 6);
};

// Chamando a função e exibindo os alunos aprovados
const alunosAprovadosArray = alunosAprovados(alunos);
console.log('Alunos aprovados:', alunosAprovadosArray);

Alunos aprovados: [ { nome: 'João', nota: 8 },
                     { nome: 'Carlos', nota: 7 },
                     { nome: 'Ana', nota: 6 },
                     { nome: 'Pedro', nota: 9 } ]

