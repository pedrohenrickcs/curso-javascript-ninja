(function () {
	'use-strict';

	/*
	Vamos desenvolver mais um projeto. A ideia é fazer uma mini-calculadora.
	As regras são:

	- Deve ter somente 1 input, mas não deve ser possível entrar dados nesse input
	diretamente;
	- O input deve iniciar com valor zero;
	- Deve haver 10 botões para os números de 0 a 9. Cada botão deve ser um número;
	- Deve haver 4 botões para as operações principais: soma (+), subtração(-),
	multiplicação(x) e divisão(÷);
	- Deve haver um botão de "igual" (=) que irá calcular os valores e um botão "CE"
	que irá limpar o input, deixando-o com valor 0;

	- A cada número pressionado, o input deve atualizar concatenando cada valor
	digitado, como em uma calculadora real;
	- Ao pressionar um botão com uma das 4 operações, deve aparecer o símbolo da
	operação no input. Se o último caractere no input já for um símbolo de alguma
	operação, esse caractere deve ser substituído pelo último pressionado.
	Exemplo:
	- Se o input tem os valores: "1+2+", e for pressionado o botão de
	multiplicação (x), então no input deve aparecer "1+2x".
	- Ao pressionar o botão de igual, o resultado do cálculo deve ser mostrado no
	input;
	- Ao pressionar o botão "CE", o input deve ficar zerado.
	*/

	var $numbers = document.querySelectorAll('[data-js="number"]');
	var $input = document.querySelector('input[type="text"]');
	var $operator = document.querySelectorAll('[data-js="operation"]');
	var $reset = document.querySelector('[data-js="reset"]');
	var $equal = document.querySelector('[data-js="equal"');

	Array.prototype.forEach.call($numbers, function (button) {
		button.addEventListener('click', handleClickNumber)
	});

	Array.prototype.forEach.call($operator, function (button) {
		button.addEventListener('click', handleClickOperation)
	});

	$reset.addEventListener('click', handleClickCE);

	$equal.addEventListener('click', handleClickEqual);

	function handleClickNumber() {
		$input.value += this.value;
	}

	function handleClickOperation() {
		$input.value = removeLastItemIsAnOperator($input.value);
		$input.value += this.value;
	}

	function isLastItemOperation(number) {

		var op = ['+', '-', 'x', '/'];
		var lastItem = number.split('').pop();

		return op.some(function (operator) {
			return operator === lastItem;
		})
	}

	function handleClickCE() {
		$input.value = 0;
	}

	function removeLastItemIsAnOperator(number) {
		if (isLastItemOperation(number)) {
			return number.slice(0, -1);
		}

		return number;
	}

	function handleClickEqual() {
		$input.value = removeLastItemIsAnOperator($input.value);

		var allValues = $input.value.match(/\d+[+x/-]?/g);

		var result = allValues.reduce(function (acumulado, atual, index) {
			var firstValue = acumulado.slice(0, -1);
			var operator = acumulado.split('').pop();
			var lastValue = removeLastItemIsAnOperator(atual);
			var lastOperator = isLastItemOperation(atual) ? atual.split('').pop() : '';

			switch (operator) {
				case '+':
					return  ( Number(firstValue) + Number(lastValue) ) + lastOperator;
				case '-':
					return ( Number(firstValue) - Number(lastValue) ) + lastOperator;
				case 'x':
					return  ( Number(firstValue) * Number(lastValue) ) + lastOperator;
				case '/':
					return  ( Number(firstValue) / Number(lastValue) ) + lastOperator;
			}
		});

		$input.value = result;

		console.log(result);
	}

})();
