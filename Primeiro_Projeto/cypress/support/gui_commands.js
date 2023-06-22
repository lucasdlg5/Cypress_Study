Cypress.Commands.add('login', (nome,senha) => {
    cy.get('input[formcontrolname="userName"]').type(nome); //Type é para escrita, não tipo!!!
    cy.get('input[formcontrolname="password"]').type(senha); //Type é para escrita, não tipo!!!
    cy.get('button[type="submit"]').click();
});