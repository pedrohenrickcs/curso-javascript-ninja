(function(DOM) {
  'use strict';

  /*
  Vamos estruturar um pequeno app utilizando módulos.
  Nosso APP vai ser um cadastro de carros. Vamos fazê-lo por partes.
  A primeira etapa vai ser o cadastro de veículos, de deverá funcionar da
  seguinte forma:
  - No início do arquivo, deverá ter as informações da sua empresa - nome e
  telefone (já vamos ver como isso vai ser feito)
  - Ao abrir a tela, ainda não teremos carros cadastrados. Então deverá ter
  um formulário para cadastro do carro, com os seguintes campos:
    - Imagem do carro (deverá aceitar uma URL)
    - Marca / Modelo
    - Ano
    - Placa
    - Cor
    - e um botão "Cadastrar"

  Logo abaixo do formulário, deverá ter uma tabela que irá mostrar todos os
  carros cadastrados. Ao clicar no botão de cadastrar, o novo carro deverá
  aparecer no final da tabela.

  Agora você precisa dar um nome para o seu app. Imagine que ele seja uma
  empresa que vende carros. Esse nosso app será só um catálogo, por enquanto.
  Dê um nome para a empresa e um telefone fictício, preechendo essas informações
  no arquivo company.json que já está criado.

  Essas informações devem ser adicionadas no HTML via Ajax.

  Parte técnica:
  Separe o nosso módulo de DOM criado nas últimas aulas em
  um arquivo DOM.js.

  E aqui nesse arquivo, faça a lógica para cadastrar os carros, em um módulo
  que será nomeado de "app".
  */

  console.log('dom', DOM);

	var ajax = new XMLHttpRequest;

	function initialize() {
		handleSubmit();
	}

  	function handleSubmit() {
		var url = 'company.json';

		ajax.open('GET', url)
		ajax.send();
		ajax.addEventListener('readystatechange', handleBasicInfos);
	}


	function handleReadyStateChange() {
		var result;

		try {
			result = JSON.parse(ajax.responseText);
		} catch (e) {
			result = null;
		}

		return result;

	}

	function handleBasicInfos() {
		var data = handleReadyStateChange();
		var $company = new DOM('[data-js="company"]');
		var $phone = new DOM('[data-js="phone"]');

		$company.get()[0].textContent = data.name;
		$phone.get()[0].textContent = data.phone;
	}

	var $register = document.querySelector('button');


	$register.addEventListener('click', function (e) {
		e.preventDefault();

		console.log('submit');

		sendAllInfos();
	});


	function sendAllInfos() {

		var $image = new DOM('[data-js="image"]');
		var $brand = new DOM('[data-js="brand"]')
		var $year = new DOM('[data-js="year"]');
		var $board = new DOM('[data-js="board"]');
		var $color = new DOM('[data-js="color"]');

		console.log('image', $image.get()[0].value);
	}

	initialize();

})(window.DOM);
