(function() {

	// Envolva todo o código desse arquivo em uma IIFE (incluindo esse comentário).

	/*
	Crie uma variável chamada `once`, que recebe `false` como seu valor.
	Crie um loop que execute enquanto essa variável for verdadeira. Dentro do
	loop, mostre no console a mensagem:
	'Entrou ao menos uma vez!'
	Qual loop você deve usar para que essa mensagem seja mostrada no console?
	*/
	//

	var once = false;

	do {
		console.log('Entrou ao menos uma vez');

	} while (once);

	/*
	Crie um objeto chamado `person`, que receba as seguintes propriedades:
	- 'name', 'age', 'weight' e 'birthday'. Preencha com os valores corretos
	para o nome, idade, peso e data de nascimento dessa pessoa.
	*/
  //

  var person = {
    name: 'Pedro',
    age: 27,
    weight: 1.72,
    birthday: '21/08/1993'
  }

	/*
	Use um loop para percorrer o objeto criado acima, mostrando no console
	a frase:
	'The [PROPERTY] of person is [VALUE]'
	Aproveite e crie uma variável `counter` que vai contar quantas propriedades
	esse objeto tem.
	Após o loop, mostre a frase:
	'The person has [COUNTER] properties'
	*/
  //

  var counter = person;

  for (const key in person) {
    console.log('The ' + key + ' is ' + person[key] );
  }

  console.log('counter', counter);


	/*
	Crie uma função chamada `moreThan`, que vai verificar se a pessoa (objeto
	criado acima) é mais velha que a idade passada por parâmetro.
	Se verdadeiro, retornar `true`. Senão, retornar false.
	Após a função, mostrar a mensagem no console:
	'The person has more than 25 years old? [TRUE/FALSE]'
	*/
	//
	function moreThan(age) {

    var validAge = person.age > age ? true : false;

		return 'The person has more than 25 years old ' + validAge;
  }

  moreThan();

	/*
	Faça um loop de 0 a 20, que adicione cada número como um item de um
	array chamado `numbers`. Se o contador for maior que 10, saia do loop.
	Mostre no console os números no array.
	*/
	console.log( 'De 0 a 10:' );
  //

  for (let numbers = 0; numbers <= 20; numbers++) {

    if (numbers > 10) {

      break;
    }
    console.log('numbers', numbers);
  }

	/*
	Faça outro loop de 0 a 20, que adicione a um array chamado `numbers` (já
	criado acima, só precisa ser reiniciado) números de 0 a 20, inclusive
	esses. Se o número for ímpar, pular para o próximo número.
	Mostrar no console os números do array.
  */

   for (let numbers = 0; numbers <= 20; numbers++) {
     if (numbers % 2 !== 0) {
       continue;
     }

     console.log( 'Pares de 0 a 20:', numbers);
   }

	// ?
})();
