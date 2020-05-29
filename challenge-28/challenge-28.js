(function (DOM) {
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

	function app() {
		var ajax = new XMLHttpRequest();
		var $formCep = new DOM('[data-js="form-cep"]');
		var $inputCep = new DOM('[data-js="insert-cep"]');
		var $logradouro = new DOM('[data-js="logradouro"]');
		var $bairro = new DOM('[data-js="bairro"]');
		var $estado = new DOM('[data-js="estado"]');
		var $cidade = new DOM('[data-js="cidade"]');
		var $cep = new DOM('[data-js="cep"]');

		function initialize() {
			initEvents();
		}

		function initEvents() {
			$formCep.on('submit', handleSubmitFormCep);
		}

		function handleSubmitFormCep(e) {
			e.preventDefault();

			var url = getUrl();
			ajax.open('GET', url);
			ajax.send();
			getMessage('loading');
			ajax.addEventListener('readystatechange', handleReadyStateChange);
		}

		function handleReadyStateChange() {

			if (isRequestOk()) {
				fillCEPFields();
				getMessage('ok');
			}
		}

		function clearData() {
			return {
				logradouro: '-',
				bairro: '-',
				estado: '-',
				cidade: '-',
				cep: '-'
			}
		}

		function fillCEPFields(result) {
			var data = parseData();

			if (!data) {
				getMessage('error');
				data = clearData();
			}

			$logradouro.get()[0].textContent = data.address;
			$bairro.get()[0].textContent = data.district;
			$estado.get()[0].textContent = data.state;
			$cidade.get()[0].textContent = data.city;
			$cep.get()[0].textContent = data.code;

		}

		function parseData() {
			var result;
			try {
				result = JSON.parse(ajax.responseText);
			} catch (e) {
				result = null
			}

			return result;
		}

		function clearCep() {
			return `${$inputCep.get()[0].value.replace(/\D/g, '')}`;
		}

		function getMessage(type) {
			var cep = clearCep();

			var messages = {
				loading: `Buscando informações para o CEP ${cep}`,
				ok: `Endereço referente ao CEP ${cep}:`,
				error: `Não encontramos o endereço para o CEP ${cep}.`
			}
			var $status = new DOM('[data-js="status"]');
			$status.get()[0].textContent = messages[type];
		}

		function isRequestOk() {
			return ajax.status === 200 && ajax.readyState === 4;
		}

		function getUrl() {
			return `https://ws.apicep.com/cep/${clearCep()}.json`
		}

		initialize();

	}

	app();

})(window.DOM);
