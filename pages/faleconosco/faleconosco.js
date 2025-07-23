emailjs.init("YOUR_PUBLIC_KEY");

document.getElementById("contato-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const statusMensagem = document.getElementById("status-mensagem");

  emailjs
    .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", this)
    .then(() => {
      statusMensagem.textContent = "Mensagem enviada com sucesso!";
      this.reset();
    })
    .catch((error) => {
      statusMensagem.textContent = "Erro ao enviar. Tente novamente.";
      console.error("Erro:", error);
    });
});