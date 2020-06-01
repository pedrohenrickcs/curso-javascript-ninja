(function($) {
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

	var app = (function() {
		return {
			init: function init() {
				this.getCompanyInfo();
				this.companyInfo();
				this.initEvents();
			},

			initEvents: function initEvents() {
				$('[data-js="form"]').on('submit', this.handleSubmit)
			},

			handleSubmit: function (e) {
				e.preventDefault();

				var $tablecar = document.querySelector('[data-js="result"');
				$tablecar.appendChild(app.createNewCar());
			},

			createNewCar: function createNewCar() {
				var $fragment = document.createDocumentFragment();
				var $tr = document.createElement('tr');
				var $tdImage = document.createElement('td');
				var $image = document.createElement('img');
				var $tdBrand = document.createElement('td');
				var $tdBoard = document.createElement('td');
				var $tdYear = document.createElement('td');
				var $tdColor = document.createElement('td');

				$image.setAttribute('src', $('[data-js="image"]').get().value);
				$tdImage.appendChild($image);

				$tdImage.textContent = $('[data-js="image"]').get().value;
				$tdBrand.textContent = $('[data-js="brand"]').get().value;
				$tdYear.textContent = $('[data-js="year"]').get().value;
				$tdBoard.textContent = $('[data-js="board"]').get().value;
				$tdColor.textContent = $('[data-js="color"]').get().value;

				$tr.appendChild($tdImage);
				$tr.appendChild($tdBrand);
				$tr.appendChild($tdYear);
				$tr.appendChild($tdBoard);
				$tr.appendChild($tdColor);

				return $fragment.appendChild($tr);
			},

			companyInfo: function companyInfo() {
				var ajax = new XMLHttpRequest();
				var url = 'company.json';

				ajax.open('GET', url)
				ajax.send();
				ajax.addEventListener('readystatechange', this.getCompanyInfo);
			},

			getCompanyInfo: function getCompanyInfo() {
				if (!app.isReady.call(this))
				return;

				var data = JSON.parse(this.responseText);
				var $company = $('[data-js="company"]').get();
				var $phone = $('[data-js="phone"]').get();

				$company.textContent = data.name;
				$phone.textContent = data.phone;

			},

			isReady: function isReady() {
				return this.readyState === 4 && this.status === 200;
			}
		}
	})();

	app.init();

})(window.DOM);
