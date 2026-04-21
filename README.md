## QA-automacao-front-end (Atividade)

Projeto final da Unidade testes de automação-Front End

## 👥 Equipe:

- Daniel Richard
- Eloah Veiga
- João Pedro Fagundes Ernesto
- Luca Mendes Azevedo
- Mateus Chaves
- Saulo Farias

## 👓 Docente:

Jessica Arnaut Prado Machado

## 🔍 Objetivo e introdução:

Como uma equipe de Quality Assurance, foi solicitado que fizéssemos um site com navegação entre duas páginas que usasse de dados armazenados em uma API de acesso público. Ao final do projeto, deveriamos garantir a qualidade do produto entregue a partir de automação com Cypress e registro de documentação com BDD.

## 👤 Jornada do usuário:

É esperado que o usuário consiga navegar pela home do site encontrando detalhes do menu geral da interface inicial, conseguindo acesso a outras partes do site.

Após acessar uma das páginas do site, é possível esperar que o usuário acesse informações sobre os países registrados na API pública sem erros aparentes de navegação.

Caso algum país tenha seu nome digitado de maneira incorreta para os padões do site, uma mensagem de erro em vermelho é exibida.

Existe também a capacidade dada ao usuário de voltar para a página incial do site de maneira rápida e prática.

## 🏠 Interface inicial (home):

A página inicial apresenta uma interface limpa e minimalista mostrando para o cliente 5 (cinco) cards, quatro deles informativos, localizados do centro para a direita, e um deles sendo o único card interativo, à esquerda,  que leva o cliente para a partir de um botão para a segunda página do site, contendo as informações retiradas da API.

## 🌎 Segunda Tela:

A segunda tela apresenta a parte mais caracteristica do site, contendo informações retiradas diretamente de uma API online pública a partir de links integrados na sintaxe da programação. Entre essas informações estão a área em metros do território, continente, região, população e até a bandeira do estado selecionado. Vale lembrar que caso o a API pare de funcionar, por ser um armazenamento online, o nosso site também tende a perder sua funcionalidade por depender ativamente do banco de dados externo. Tal fato vale para qualquer site que dependa de API's públicas online.

## 🛠️ Testes em Cypress:

Para a testagem do site utilizamos o Cypress, que é uma ferramenta de testes automatizados para sites e sistemas web. Ele funciona simulando o comportamento de um usuário real no navegador, como abrir páginas, clicar em botões, digitar textos e verificar se algo aparece na tela. Você escreve esses passos em forma de código, e o Cypress executa tudo automaticamente para conferir se a aplicação está funcionando corretamente. Ele roda diretamente no navegador, o que torna os testes mais rápidos e confiáveis, além de conseguir acessar elementos da página, esperar carregamentos e identificar erros.
No caso do nosso site, os testes via Cypress foram de alta utilidade testando a maioria dos botões na interface inicial e sistemas de interatividade como hover e mudança de cor com passagem de cursor, e também com a responsividade dos botões para mudança de página.
