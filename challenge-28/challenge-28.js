(function () {
	'use-strict';
	/*
	No HTML:
	- Crie um formulário com um input de texto que receberá um CEP e um botão
	de submit;
	- Crie uma estrutura HTML para receber informações de endereço:
	"Logradouro, Bairro, Estado, Cidade e CEP." Essas informações serão
	preenchidas com os dados da requisição feita no JS.
	- Crie uma área que receberá mensagens com o status da requisição:
	"Carregando, sucesso ou erro."

	No JS:
	- O CEP pode ser entrado pelo usuário com qualquer tipo de caractere, mas
	deve ser limpo e enviado somente os números para a requisição abaixo;
	- Ao submeter esse formulário, deve ser feito um request Ajax para a URL:
	"https://viacep.com.br/ws/[CEP]/json/", onde [CEP] será o CEP passado
	no input criado no HTML;
	- Essa requisição trará dados de um CEP em JSON. Preencha campos na tela
	com os dados recebidos.
	- Enquanto os dados são buscados, na área de mensagens de status, deve mostrar
	a mensagem: "Buscando informações para o CEP [CEP]..."
	- Se não houver dados para o CEP entrado, mostrar a mensagem:
	"Não encontramos o endereço para o CEP [CEP]."
	- Se houver endereço para o CEP digitado, mostre a mensagem:
	"Endereço referente ao CEP [CEP]:"
	- Utilize a lib DOM criada anteriormente para facilitar a manipulação e
	adicionar as informações em tela.
	*/

	var ajax = new XMLHttpRequest();
	var $inputCep = document.querySelector('[data-js="insert-cep"]');
	var $button = document.querySelector('[data-js="button"]');

	var $address = document.querySelector('[data-js="logradouro"]');
	var $neighboor = document.querySelector('[data-js="bairro"]');
	var $state = document.querySelector('[data-js="estado"]');
	var $city = document.querySelector('[data-js="cidade"]');
	var $cep = document.querySelector('[data-js="cep"]');

	function initialize() {
		initEvents();
	}

	function initEvents() {
		$button.addEventListener('click', function (e) {
			e.preventDefault();
			consultApi();
		});
	}

	function renderElement() {
		var $body = document.body;
		var waitResponse = document.createElement('span');
		var $elementWait = document.querySelector('.wait-response');

		waitResponse.classList.add('wait-response');
		waitResponse.textContent = 'Carregando...';

		if (document.querySelector('.wait-response') === null) {
			$body.appendChild(waitResponse);
		}
	}

	function consultApi() {
		ajax.open('GET', `https://ws.apicep.com/cep/${$inputCep.value}.json`);
		ajax.send();

		ajax.response.map(function (items) {
			console.log('items', items);

		})

		console.log('ajax', ajax);

		var responseAjax = JSON.parse(ajax.response);
		renderElement();

		ajax.addEventListener('readystatechange', function () {

			if (statusOk()) {
				$address.textContent = responseAjax.address;
				$neighboor.textContent = responseAjax.district;
				$state.textContent = responseAjax.state;
				$city.textContent = responseAjax.city;
				$cep.textContent = responseAjax.code;
			}

			if (statusNotOk()) {
				console.log('status not ok');

				try {
					console.log('responseAjax', responseAjax);
				} catch (e) {
					console.log('catch', e);

					ajax.responseText;
				}
			}

		});
	}

	function statusOk() {
		return ajax.status === 200 && ajax.readyState === 4;
	}

	function statusNotOk() {
		return ajax.status === 404 && ajax.readyState === 4;
	}

	initialize();

})();
