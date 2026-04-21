### Cenários de Teste (BDD / Gherkin)


Funcionalidade: Aplicação web com busca e navegação entre páginas

Cenário: Realizar busca na página inicial
  Dado que o usuário está na página Home
  Quando ele digita um termo no campo de
  busca
  E clica no botão de buscar
  Então o botão deve ficar desabilitado durante a requisição
  E os resultados da API devem ser exibidos na tela

Cenário: Navegar da Home para a página de detalhes
  Dado que o usuário está na página Home
  Quando ele clica em um item da lista de resultados
  Então ele deve ser redirecionado para a página de detalhes
  E a URL deve conter "detalhes"

Cenário: Exibir mensagem ao não encontrar resultados
  Dado que o usuário está na página Home
  Quando ele realiza uma busca com um termo inválido
  Então deve ser exibida uma mensagem de erro ou "nenhum resultado encontrado"
  E nenhum resultado deve ser exibido na tela
