// Importar as bibliotecas necessárias
import express from "express";
import EventEmitter from "events";

// Inicializar o aplicativo Express
const app = express();

// Criar um emitter de eventos
const eventEmitter = new EventEmitter();

// Rota para acionar o evento e enviar o e-mail
app.get("/enviar-email", (req, res) => {
  // Emitir o evento 'enviarEmail' com os detalhes do e-mail
  eventEmitter.emit("enviarEmail", {
    destinatario: "destinatario@example.com",
    assunto: "Exemplo de EDA",
    mensagem: "Olá, isso é um exemplo de EDA!",
  });
  res.send("E-mail enviado!");
});

// Listener para o evento 'enviarEmail'
eventEmitter.on("enviarEmail", (email) => {
  // Lógica para enviar o e-mail usando um serviço de e-mail
  console.log(
    `Enviando e-mail para ${email.destinatario} com assunto "${email.assunto}" e mensagem "${email.mensagem}"`
  );
});

// Iniciar o servidor
app.listen(3000, () => {
  console.log("Servidor iniciado na porta 3000");
});
