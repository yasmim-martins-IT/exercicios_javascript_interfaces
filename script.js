
let nome = 'Maria';
let idade = 18;
let matriculada = true;

console.log('Nome:', nome);
console.log('Idade:', idade);
console.log('Está matriculada:', matriculada);

console.log('Tipo da variável nome:', typeof nome);
console.log('Tipo da variável idade:', typeof idade);
console.log('Tipo da variável matriculada:', typeof matriculada);

const PI = 3.14159;
console.log('Valor de PI:', PI);


console.log(
    `Meu nome é ${nome}, tenho ${idade} anos e minha matrícula está ativa: ${matriculada}.`
);


const resultados = document.querySelector('#resultados');

resultados.innerHTML = `
    <h2>Resultados</h2>
    <p><strong>Nome:</strong> ${nome}</p>
    <p><strong>Idade:</strong> ${idade}</p>
    <p><strong>Está matriculada:</strong> ${matriculada ? 'Sim' : 'Não'}</p>
    <p><strong>Tipo da variável nome:</strong> ${typeof nome}</p>
    <p><strong>Tipo da variável idade:</strong> ${typeof idade}</p>
    <p><strong>Tipo da variável matriculada:</strong> ${typeof matriculada}</p>
    <p><strong>Valor de PI:</strong> ${PI}</p>
    <p><strong>Apresentação:</strong> Meu nome é ${nome}, tenho ${idade} anos e minha matrícula está ativa.</p>
`;
