# Automação de Testes E2E com Cypress - KaBuM!

## Autor

**Nome:** Kaylany Rfaela

**RA:** 2409585

## Descrição do Projeto

Este projeto tem como objetivo realizar a automação de testes End-to-End (E2E) utilizando o framework Cypress no site KaBuM! (https://www.kabum.com.br).

Os testes simulam ações reais realizadas por usuários em um ambiente de comércio eletrônico, validando funcionalidades essenciais do sistema.

## Tecnologias Utilizadas

* Cypress
* JavaScript
* Node.js
* Visual Studio Code

## Estrutura do Projeto

```text
cypress/
│
├── e2e/
│   ├── home.cy.js
│   ├── busca.cy.js
│   ├── produto.cy.js
│   ├── carrinho.cy.js
│   └── carrinho-acesso.cy.js
│
├── fixtures/
├── support/
│   └── e2e.js
│
├── cypress.config.js
├── package.json
└── package-lock.json
```

## Casos de Teste Implementados

### CT01 - Acessar Página Inicial

Objetivo:
Verificar se a página inicial da KaBuM é carregada corretamente.

Resultado Esperado:
Página carregada com sucesso.

---

### CT02 - Pesquisar Produto

Objetivo:
Pesquisar o produto "mouse gamer".

Resultado Esperado:
A página de busca deve exibir resultados relacionados ao termo pesquisado.

---

### CT03 - Abrir Página de Produto

Objetivo:
Abrir a página de detalhes de um produto encontrado na busca.

Resultado Esperado:
A URL deve conter "/produto/".

---

### CT04 - Adicionar Produto ao Carrinho

Objetivo:
Adicionar um produto ao carrinho de compras.

Resultado Esperado:
Produto adicionado com sucesso.

---

### CT05 - Validar Item no Carrinho

Objetivo:
Validar a existência de item adicionado ao carrinho.

Resultado Esperado:
Quantidade de itens exibida corretamente.

---

### CT06 - Pesquisa Inválida

Objetivo:
Pesquisar um produto inexistente.

Resultado Esperado:
O sistema deve processar a busca sem apresentar erros.

---

### CT07 - Acessar Carrinho

Objetivo:
Acessar a página do carrinho de compras.

Resultado Esperado:
A URL deve conter "/carrinho".

## Como Executar o Projeto

### Instalar Dependências

```bash
npm install
```

### Executar Cypress em Modo Interativo

```bash
npx cypress open
```

### Executar Todos os Testes

```bash
npx cypress run
```

## Resultados Obtidos

Todos os testes foram executados com sucesso.

Resumo da execução:

* Total de testes executados: 6
* Testes aprovados: 6
* Testes reprovados: 0

## Conclusão

A automação desenvolvida permitiu validar funcionalidades essenciais do site KaBuM!, garantindo o correto funcionamento dos principais fluxos de navegação, busca de produtos e operações relacionadas ao carrinho de compras.

O uso do Cypress demonstrou ser uma ferramenta eficiente para a automação de testes E2E, proporcionando maior confiabilidade e qualidade ao processo de validação da aplicação.
