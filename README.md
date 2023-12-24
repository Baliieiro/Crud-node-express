Delivery Express
================

Bem-vindo ao projeto Delivery Express! Este é um mini projeto desenvolvido com o framework Express para criar uma aplicação web simples para serviços de entrega de comida.

Pré-requisitos
--------------

Certifique-se de ter o Node.js e o npm instalados em sua máquina.

*   [Node.js](https://nodejs.org/)
*   [npm](https://www.npmjs.com/)

Instalação
----------

1.  Clone o repositório:
    
    `git clone https://github.com/Baliieiro/Crud-node-express.git`
    
2.  Navegue até o diretório do projeto:
    
    `cd Crud-node-express`
    
3.  Instale as dependências:
    
    `npm install`
    
Uso
---

Inicie o servidor:

bashCopy code

`npm run dev`

Acesse a aplicação no navegador em `http://localhost:3000`.

Rotas
-----

*   `GET /order`: Lista todos os pedidos já feitos.
*   `POST /order`: Cria um novo pedido.
*   `GET /order/:id`: Retorna um pedido específico.
*   `PUT /order/:id`: Altera um pedido já feito (pode alterar um ou todos os dados do pedido).
*   `PATCH /order/:id`: Altera o status do pedido para "Pronto".
*   `DELETE /order/:id`: Deleta um pedido já feito.

Contribuindo
------------

Sinta-se à vontade para contribuir para o desenvolvimento deste projeto. Basta seguir as diretrizes de contribuição.

1.  Faça o fork do projeto
2.  Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3.  Faça commit das suas mudanças (`git commit -m 'Adiciona nova feature'`)
4.  Faça o push para a branch (`git push origin feature/nova-feature`)
5.  Abra um Pull Request
