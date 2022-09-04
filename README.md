<h1 align="center" color="white"><img height="40" valign="top" src="./src/favicon/android-chrome-144x144.png"/>  We<strong>Movie</strong>
<div align="center"><img src="https://user-images.githubusercontent.com/81888958/188335010-459b7d2b-df6a-41c3-87f2-5439a6967882.mp4" width="900"/></div>

### 📕 Sobre
O desafio consiste na criação de um site de e-commerce simplificado do zero, onde foram criado um fluxo com três telas.

#### São elas:
- Home: Onde ele terá que fazer uma requisição na API, trazendo assim, a lista de filmes que podem ser adicionados ao carrinho.
- Carinho: Onde ele poderá ver os itens que foram adicionados, somando o valor total com base em cada item adicionado, podendo remover um item do carrinho. Por padrão, se o carrinho tiver nenhum item adicionado, deverá aparecer a tela de empty com a opção de voltar para tela inicial.
- Compra realizada: Após confirmar o pedido na tela anterior, o usuário deverá ser encaminhado para a tela de pedido confirmado. Aqui o usuário também terá a opção de voltar para tela inicial.

### ⚙️ Features
- [x] Adicionar filmes no carrinho
- [x] Remove filmes no carrinho
- [x] Página de "Carrinho Vazio"  
- [x] Aumentar ou diminuir a quantidadde de Filmes no Carrinho
- [x] Limpar carrinho


### Pré Requisitos
```bash
  #### Clone esse respositório
  $ git clone https://github.com/uildez/filmcommerce.git
```

```bash
  #### Instale as Dependências
  $ npm install
```

```bash
  #### Rode o servidor
  $ npm run server
```

```bash
  #### Rode a aplicação
  $ npm run dev
```

### 🛠 Tecnologias
- [Json-server](https://www.npmjs.com/package/json-server) > Para simular um servidor
- [React-router](https://reactrouter.com/en/main) > Controle de páginas
- [TailwindCSS](https://tailwindcss.com/docs) > Estilização e organização do CSS
- [Axios](https://axios-http.com/docs/intro) > Consumir os dados do servidor local
