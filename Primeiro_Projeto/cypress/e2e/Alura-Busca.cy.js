describe('Alura Busca Cursos', () => {
  beforeEach(() =>{
    cy.visit('https://alura.com.br');
  })
  it('Buscar Curso de Java', () => {
    cy.get('#header-barraBusca-form-campoBusca').type('Java');
    cy.get('.header-barraBusca-form-submit').click();
    cy.get('h4.busca-resultado-nome')
    .should('contain', 'Formação Certificação Java')

  })
})