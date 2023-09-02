var saldo = 100.5; //Variavel Global
		

		function inicio() {
			//ESCOPO
			//Variavel Local
			var escolha = parseInt(prompt('Selecione uma opção: (1 - SALDO) (2 - DEPOSITO) (3 - SAQUE) (4 - SAIR)'));
				
			if (escolha === 1) {
				ver_saldo();
			} else if (escolha === 2) {
				fazer_deposito();
			} else if (escolha === 3) {
				fazer_saque();
			} else if (escolha === 4) {
				sair();
			} else {
				erro();
			}
		}

		function ver_saldo() {
			alert('Seu saldo atual é: ' + saldo);
			inicio();
		}

		function fazer_deposito() {
			
			var deposito = parseFloat(prompt('Qual o valor para depósito?'));
			
			// Not a Number --> Isso é um não-número?
			if (isNaN(deposito) || deposito === '') {
				alert('Por favor, informe um número.');
				fazer_deposito();
			} else {
				saldo += deposito;
				//saldo = saldo + deposito;
				ver_saldo();
			}
		}

		function fazer_saque() {
			
			var saque = parseFloat(prompt('Qual o valor para saque?'));
			
			if (isNaN(saque) || saque === '') {
				alert('Por favor, informe um número.');
				fazer_saque();
			} else {
				saldo -= saque;
				//saldo = saldo - saque;
				ver_saldo();
			}
		}

		function erro() {
			alert('Por favor, informe um número entre 1 e 4.');
			inicio();
		}

		function sair() {
			var confirma = confirm('Você deseja sair?');
			if (confirma) {
				window.close();
			} else {
				inicio();
			}
		}

		inicio();