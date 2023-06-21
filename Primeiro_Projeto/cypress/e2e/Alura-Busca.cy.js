describe('Alura Busca Cursos', () => {
  beforeEach(() =>{
    cy.visit('https://alura.com.br');
  })
  it('Buscar Curso de Java', () => {
    cy.get('#header-barraBusca-form-campoBusca').type('Java');
    cy.get('.header-barraBusca-form-submit').click();
    cy.get(':nth-child(1) > .busca-resultado-link > .busca-resultado-container > .busca-resultado-nome')
    .should('have.text', 'Formação Certificação Java')

  })
})