## Cenários de Teste (BDD / Gherkin)


### Funcionalidade: Aplicação web com busca e navegação entre páginas


Cenário: Navegar da Home para a página de detalhes


  Dado que o usuário está na página Home
  E vai para o menu 
  Quando ele clica no botão "Detalhes"
  Então ele deve ser redirecionado para a página de detalhes
  E a URL deve conter "pages/detalhes.html"

---

Cenário: Buscar um país válido e exibir resultados


  Dado que o usuário está na página de detalhes
  Quando ele digita "brazil" no campo de busca
  E clica no botão
  Então a mensagem de erro não deve ser exibida
  E os resultados da API devem aparecer na tela

  ---

Cenário: Exibir mensagem de erro ao não encontrar resultados


  Dado que o usuário está na página Detalhes
  Quando ele preenche o campo de input com um nome que não é um país
  Então uma mensagem de erro deve ser exibida
  E nenhum resultado da API deve ser exibido na tela