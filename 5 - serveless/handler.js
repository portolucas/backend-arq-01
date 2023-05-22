export async function hello(event, context) {
  try {
    // Obter informações do evento recebido
    const { name } = JSON.parse(event.body);

    // Lógica de negócio
    const message = `Hello, ${name}!`;

    // Retornar a resposta
    return {
      statusCode: 200,
      body: JSON.stringify({ message }),
    };
  } catch (error) {
    // Lidar com erros
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal server error" }),
    };
  }
}
