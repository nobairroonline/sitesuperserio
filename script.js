document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const mensagem = document.getElementById('mensagem').value;

  if (nome && email && mensagem) {
    alert(`Obrigado pelo contato, ${nome}!`);
  } else {
    alert('Por favor, preencha todos os campos.');
  }
});
