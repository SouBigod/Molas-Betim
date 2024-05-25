let cards = document.querySelector('.cards')

fetch('produtos.json')
  .then(resposta => resposta.json())
  .then(dados => {

    if (dados.produtos && Array.isArray(dados.produtos)) {
      dados.produtos.forEach((produto, indice) => {
        
        let card = document.createElement('div')
        card.classList.add('card')
        cards.appendChild(card)

        card.innerHTML = `
        <img src="src/img/${produto.imagem}" alt="" draggable="false" data-options="zoomPosition: inner" class="card__imagem MagicZoom">
        <h2 class="card__titulo">${produto.titulo}</h2>
        <h3 class="card__subtexto">${produto.texto}</h3>
        `
        
      });
    } 
  })

  document.querySelector('.orc__tela1').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Obtém os valores dos campos do formulário
    var nomeCompleto = document.querySelector('[name=nomeCompleto]').value;
    var nomeEmpresa = document.querySelector('[name=nomeEmpresa]').value;
    var descricaoPedido = document.querySelector('[name=descricaoPedido]').value;

    // Gera a mensagem com os dados do formulário
    var mensagem = "Olá! Me chamo " + nomeCompleto + ". ";
    if (nomeEmpresa.trim() !== "") {
        mensagem += "Sou da empresa " + nomeEmpresa + " e ";
    }
    mensagem += "gostaria de fazer o seguinte orçamento: " + descricaoPedido;

    // Codifica a mensagem para que possa ser passada como parâmetro na URL
    var mensagemCodificada = encodeURIComponent(mensagem);

    // Gera o link com a mensagem codificada para o WhatsApp
    var link = "https://api.whatsapp.com/send?phone=5531987986738&text=" + mensagemCodificada;

    // Abre o link em uma nova guia
    window.open(link, '_blank');

    document.querySelector('[name=nomeCompleto]').value = "";
    document.querySelector('[name=nomeEmpresa]').value = "";
    document.querySelector('[name=descricaoPedido]').value = "";
    
});


  document.addEventListener('DOMContentLoaded', function() {
    // Função para copiar o texto de um elemento quando clicado
    function copiarTexto(elemento) {
      // Seleciona o texto dentro do elemento
      var texto = elemento.innerText;

      // Cria um elemento de input temporário
      var inputTemp = document.createElement('input');
      inputTemp.setAttribute('type', 'text');
      inputTemp.setAttribute('value', texto);

      // Adiciona o input temporário à página
      document.body.appendChild(inputTemp);

      // Seleciona o texto dentro do input
      inputTemp.select();
      inputTemp.setSelectionRange(0, 99999); // Para dispositivos móveis

      // Copia o texto para a área de transferência
      document.execCommand('copy');

      // Remove o input temporário da página
      document.body.removeChild(inputTemp);

      // Alerta o usuário que o texto foi copiado
      alert('Texto copiado: ' + texto);
    }

    // Adiciona um evento de clique aos elementos que desejamos copiar
    document.querySelector('.orc__num').addEventListener('click', function() {
      copiarTexto(this);
    });

    document.querySelector('.orc__tell').addEventListener('click', function() {
      copiarTexto(this);
    });

    document.querySelector('.orc__emailic').addEventListener('click', function() {
      copiarTexto(this);
    });
  });


  document.getElementById('banner3').addEventListener('click', function() {
    document.querySelector('#Orc').scrollIntoView({
      behavior: 'smooth'
    });
  });


  	$(".chatpopup-icon-close").on('click', function(event) {
		event.preventDefault();
		$(".chatpopup-widget__body").hide(400);
	});

	$(".chatpopup-widget__trigger").on('click', function(event) {
		event.preventDefault();
		$(".chatpopup-widget__body").show(400);
	});
	
	$(".chatpopup-input-icon").on('click', function(event) {
		event.preventDefault();
		sendMessage();
	});

	$("input[name=message_to_send]").on('keydown', function(event) {
		console.log(event.which);
		if(event.which == 13){
			sendMessage();
		}
	});

	function sendMessage() {
		var number = "31987986738";
		var message = $("input[name=message_to_send]").val();

		if (message === undefined || message === "") {
			message = "Olá, eu visitei este link no seu site" + " "+ location.href + " "+ "e gostaria de fazer um orçamento..".replace(" ", "%20");
		} else{
			message += " " + location.href;
		}

		var url = "https://api.whatsapp.com/send?phone="+ number +"&text="+ message;

		$("input[name=message_to_send]").val("");
		window.open(url, '_blank');
	}


//   document.addEventListener('contextmenu', function(event) {
//     event.preventDefault(); // Impede a exibição do menu de contexto
// });
// document.addEventListener('keydown', function(event) {
//   // Bloqueia Ctrl + Shift + I (Windows/Linux) e Command + Option + I (Mac) - Chrome, Firefox, Edge
//   if ((event.ctrlKey && event.shiftKey && event.key === 'I') || (event.metaKey && event.altKey && event.key === 'I')) {
//       event.preventDefault(); // Impede o comportamento padrão
//   }
  
//   // Bloqueia Ctrl + Shift + C (Windows/Linux) e Command + Option + C (Mac) - Chrome, Firefox
//   if ((event.ctrlKey && event.shiftKey && event.key === 'C') || (event.metaKey && event.altKey && event.key === 'C')) {
//       event.preventDefault(); // Impede o comportamento padrão
//   }

//   // Bloqueia F12 - Todos os navegadores
//   if (event.key === 'F12') {
//       event.preventDefault(); // Impede o comportamento padrão
//   }
// });

document.getElementById("dropdownMenuLink").addEventListener("click", function() {
  document.getElementById("myDropdown").classList.toggle("show");
});
