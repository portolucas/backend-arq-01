Event-driven (EDA)

Neste exemplo, temos um aplicativo Express que possui uma rota /enviar-email. Quando essa rota é acessada, um evento enviarEmail é emitido, passando os detalhes do e-mail como um objeto. Em seguida, um listener é definido para esse evento, que executa a lógica de envio de e-mail, no caso, apenas exibindo uma mensagem no console.
