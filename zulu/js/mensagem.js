document.getElementById("submit").addEventListener("click", function (e) {
    e.preventDefault(); // Evita o envio do formulário padrão
  
    // Captura os valores dos campos
    const name = document.getElementById("name").value.trim();
    const subject = document.getElementById("msg_subject").value.trim();
    const message = document.getElementById("message").value.trim();
  
    // Verifica se todos os campos estão preenchidos
    if (!name || !subject || !message) {
      alert("Por favor, preencha todos os campos antes de enviar.");
      return;
    }
  
    // Constrói o link do WhatsApp
    const phoneNumber = "+258870667152"; // Número de telefone no formato internacional
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      `Nome: ${name}\nAssunto: ${subject}\nMensagem: ${message}`
    )}`;
  
    // Redireciona para o WhatsApp
    window.open(whatsappLink, "_blank"); // Abre em uma nova aba
  });
  