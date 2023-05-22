Serveless example

Neste exemplo, temos uma função hello que recebe um evento e um contexto. O evento contém informações enviadas para a função, como o corpo da solicitação HTTP. O contexto fornece informações sobre o ambiente de execução.

A função processa o evento, realiza alguma lógica de negócio (neste caso, apenas concatenando uma mensagem de saudação com o nome fornecido) e retorna uma resposta HTTP com a mensagem.