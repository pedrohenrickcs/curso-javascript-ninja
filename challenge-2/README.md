# Desafio da semana #2

Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

```js
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.

function desafio(x, y) {
	return x + y;
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var result = desafio(2.5, 2.5);

// Qual o valor atualizado dessa variável?
5

// Declare uma nova variável, sem valor.
var empty;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function full(empty) {
	var empty = 5;

	return 'O valor da variável agora é' + empty +;
}

// Invoque a função criada acima.
full();

// Qual o retorno da função? (Use comentários de bloco).

O retorno é a string que foi declarada
chamada de 'O valor da variável agora é 5'

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/

function args(valor1, valor2, valor3) {
	if( valor1 === undefined || valor2 === undefined || valor3 === undefined) {
		return 'Preencha todos os valores corretamente!';
	}
	return (valor1 * valor2 * valor3) + 2;
}

// Invoque a função criada acima, passando só dois números como argumento.
args(5, 2);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).

Retornou 'Preencha todos os valores corretamente!'

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
args(5, 2, 3);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).

O resultado foi 32

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/

function novoValor(a, b, c) {
	if ( a !== undefined && b === undefined && c === undefined) {
		return a;
	} else if ( a !== undefined && b !== undefined && c === undefined ) {
		return a + b;
	} else if ( a !== undefined && b !== undefined && c !== undefined ) {
		return (a + b) / c;
	} else if ( a === undefined && b === undefined && c === undefined ) {
		return false;
	} else {
		return null;
	}
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.

novoValor();  		 // Invocando função com nenhum argumento
novoValor(5);        // Invocando função com um argumento
novoValor(5,5); 	 // Invocando função com dois argumentos
novoValor(10,20,10); // Invocando função com três argumentos

```