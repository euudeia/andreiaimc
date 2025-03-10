const calcular = document.getElementById('calcular');

function imc () {
	const nome = document.getElementById('nome').value; // ou seja pega o elemento cuja o id é nome- aqui estamos declarando que a variável é o elemento HTML. obs.: é o elemento e não o seu conteúdo
	const altura = document.getElementById('altura').value; // o .value serve para eu pegar o valor do elemento e não o seu elemento
	const peso = document.getElementById('peso').value;
	const resultado = document.getElementById('resultado');

	if (nome !== '' && altura !== '' && peso !== '') {
		const valorIMC = (peso / (altura * altura)).toFixed(2);
		let classificacao = '';
		if (valorIMC < 18.5){
			classificacao = 'abaixo do peso.';
		}else if (valorIMC < 25){
			classificacao = 'com peso ideal. Parabéns!!!';
		}else if (valorIMC <30) {
			classificacao = 'levemente acima do peso.';
		}else if (valorIMC <35){
			classificacao ='com obesidade grau I.';
		}else if (valorIMC < 40){
			classificacao = 'com obesidade grau II.';
		}else {
			classificacao ='com obesidade grau III. Cuidado!!';
		}
		resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao}`;
	}else {
		resultado.textContent = 'Preencha todos os campos!!!' //para div a gente vai usar o texto dentro da div, por isso o textcontet
	}

}

calcular.addEventListener('click', imc); // com o addEventListener eu peço para o programa escutar quando alguem clica, quando alguem clicar ele vai pegar e executar a função imc. a