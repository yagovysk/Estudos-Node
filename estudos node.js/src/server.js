import http from 'node:http';

// 2 - Estrutura da aplicação: Trabalhar com rotas
// - Criar usuário
// - Listagem de usuários
// - Edição de usuários
// - Remoção de usuários

// - HTTP
//   - Método HTTP
//   - URL
// GET, POST, PUT, PATCH, DELETE esses vão ser os mais utilizados

// GET => Buscar uma informação do back-end
// POST => Criar uma informação no back-end
// PUT => Editar ou atualizar um recurso no back-end (Atualizar muitas informações ao mesmo tempo)
// PATCH => Atualizar uma informação única ou específica de um recurso no back-end
// DELETE => Deletar um recurso do back-end

// GET /users => buscando usuários do back-end
// POST /users => Criar um usuário no back-end

// 1 - Iniciando com Node.js: através do req conseguimos obter informações por exemplo, Criar um usuário (name, e-mail, senha).
// res é para devolver a resposta de quem está chamando nosso servidor.

// Iremos fazer uma aplicação Stateful, irão ser rmazenados localmente na memória

// HTTP status codes, mandar resposta para o front para explciar se houve algum erro, o porque e etc.

const users = []; // criamos uma constante para ter informações dos usuários, por isso o array vazio.

const server = http.createServer((req, res) => {
  const { method, url } = req;

  if (method == 'GET' && url == '/users') {
    return res
      .setHeader('Content-type', 'application/json')
      .end(JSON.stringify(users)); // com o return não precisa usar um else
  }

  if (method == 'POST' && url == '/users') {
    users.push({
      id: 1,
      name: 'Vitória Barrocas', //gosto de testar com o nome da minha namorada rsrs
      email: 'Vitoria@example.com',
    });

    return res.end('Criação de usuário');
  }

  return res.end('Hello Togyro Group Victory');
});

server.listen(3333);

// localhost:3333
