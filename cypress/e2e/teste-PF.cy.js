describe('Jornada completa do usuário', () => {

  beforeEach(() => {
    // Certifique-se de que a porta 5500 está ativa
    cy.visit('http://127.0.0.1:5500/');
  });

  it('deve navegar da home para detalhes pelo menu', () => {
    cy.contains('Detalhes')
      .should('be.visible')
      .click();

    cy.url().should('include', 'pages/detalhes.html');
    cy.get('#input-pais').should('be.visible');
  });

  it('deve buscar um país e exibir resultados (sem erro)', () => {
    // CORREÇÃO: Adicionado '*' ao final da URL para capturar qualquer nome de país
    cy.intercept('GET', '**/v3.1/name/**', {
      statusCode: 200,
      body: [{
        name: { common: 'Brazil' },
        capital: ['Brasília'],
        region: 'Americas',
        population: 203000000,
        area: 8516000,
        latlng: [-10, -55],
        subregion: 'South America',
        continents: ['South America'],
        flags: { png: 'https://flagcdn.com/w320/br.png' }
      }]
    }).as('buscarPais');

    cy.visit('http://127.0.0.1:5500/pages/detalhes.html');

    cy.get('#input-pais').should('be.visible').type('brazil');

    cy.get('.btn-geog')
      .should('be.visible')
      .click();

    // Espera a requisição acontecer
    cy.wait('@buscarPais');

    // Validações
    cy.get('.resultado-1').should('contain', 'Brazil');
    cy.get('.resultado-2').should('contain', 'Área');
    cy.get('.resultado-3').find('img').should('have.attr', 'src').and('include', 'br.png');
  });

  it('deve exibir erro ao buscar país inválido', () => {
    // CORREÇÃO: Matcher flexível para erro
    cy.intercept('GET', '**/v3.1/name/**', {
      statusCode: 404,
      body: { message: "Not Found" }
    }).as('buscarPaisErro');

    cy.visit('http://127.0.0.1:5500/pages/detalhes.html');

    cy.get('#input-pais').should('be.visible').type('xxxxxxx');

    cy.get('.btn-geog').click();

    cy.wait('@buscarPaisErro');

    // Verifica se a mensagem de erro aparece na div correta
    cy.get('.msg-error')
      .should('be.visible')
      .and('not.be.empty');
  });

  it('deve voltar para a home', () => {
    cy.visit('http://127.0.0.1:5500/pages/detalhes.html');

    cy.contains('Voltar')
      .should('be.visible')
      .click();

    // Aceita tanto index.html quanto a raiz /
    cy.url().should('match', /index.html|5500\/$/);
  });
});