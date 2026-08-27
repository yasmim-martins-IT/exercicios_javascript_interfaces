// Lição da Semana 2 — Operadores, decisões, laços e funções

// 1. Recebe a nota de um aluno e retorna sua situação.
function verificarSituacao(nota) {
  if (nota >= 7) {
    return 'Aprovado';
  } else if (nota >= 5) {
    return 'Recuperação';
  } else {
    return 'Reprovado';
  }
}

console.log('Exercício 1:');
console.log(verificarSituacao(8));
console.log(verificarSituacao(6));
console.log(verificarSituacao(4));

// 2. Exibe todos os números pares de 0 a 20.
console.log('\nExercício 2:');
for (let numero = 0; numero <= 20; numero++) {
  if (numero % 2 === 0) {
    console.log(numero);
  }
}

// 3. Recebe dois números e retorna o maior deles.
const encontrarMaior = (numero1, numero2) => {
  if (numero1 > numero2) {
    return numero1;
  } else if (numero2 > numero1) {
    return numero2;
  } else {
    return 'Os números são iguais';
  }
};

console.log('\nExercício 3:');
console.log(encontrarMaior(15, 9));
console.log(encontrarMaior(4, 12));
console.log(encontrarMaior(7, 7));

// 4. Exibe o dia da semana correspondente a um número de 1 a 7.
function exibirDiaDaSemana(numeroDoDia) {
  switch (numeroDoDia) {
    case 1:
      console.log('Domingo');
      break;
    case 2:
      console.log('Segunda-feira');
      break;
    case 3:
      console.log('Terça-feira');
      break;
    case 4:
      console.log('Quarta-feira');
      break;
    case 5:
      console.log('Quinta-feira');
      break;
    case 6:
      console.log('Sexta-feira');
      break;
    case 7:
      console.log('Sábado');
      break;
    default:
      console.log('Número inválido. Digite um número de 1 a 7.');
  }
}

console.log('\nExercício 4:');
exibirDiaDaSemana(3);

// 5. Exibe, com while, a tabuada de um número de 1 a 10.
const numeroEscolhido = 7;
let multiplicador = 1;

console.log('\nExercício 5:');
while (multiplicador <= 10) {
  const resultado = numeroEscolhido * multiplicador;
  console.log(numeroEscolhido + ' x ' + multiplicador + ' = ' + resultado);
  multiplicador++;
}
