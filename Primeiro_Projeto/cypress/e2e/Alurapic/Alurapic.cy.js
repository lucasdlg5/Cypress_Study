describe('Login e registro Alurapic', () => {
    beforeEach(() => {
        cy.visit('https://alura-fotos.herokuapp.com')
    })

    it('Verifica mensagems validacao', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Email is required!').should('be.visible');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'User name is required!').should('be.visible');
        cy.contains('ap-vmessage', 'Password is required!').should('be.visible');
        cy.contains('ap-vmessage', 'Full name is required!').should('be.visible');
    })

    it('Verifica mensagem de e-mail invalido', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="email"]').type('Lusga'); //Type é para escrita, não tipo!!!
        cy.contains('ap-vmessage', 'Invalid e-mail').should('be.visible');
        
    })

    it('Verifica mensagem de Nome de usuario invalido', () => {
        cy.contains('a', 'Register now').click();
        cy.get('input[formcontrolname="userName"]').type('a'); //Type é para escrita, não tipo!!!
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Mininum length is 2').should('be.visible');
        
    })

    it('Verifica mensagem de Nome de usuario invalido - Extrapolado', () => {
        cy.contains('a', 'Register now').click();
        cy.get('input[formcontrolname="userName"]').type('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'); //Type é para escrita, não tipo!!!
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Maximun length is 30').should('be.visible');
        
    })

    it('Verifica mensagem de Nome de usuario invalido - Usuario ja utilizado', () => {
        cy.contains('a', 'Register now').click();
        cy.get('input[formcontrolname="userName"]').type('teste'); //Type é para escrita, não tipo!!!
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Username already taken').should('be.visible');
        
    })

    it('Verifica mensagem de Senha invalido', () => {
        cy.contains('a', 'Register now').click();
        cy.get('input[formcontrolname="password"]').type('a'); //Type é para escrita, não tipo!!!
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Mininum length is 8').should('be.visible');
        
    })

    it('Verifica mensagem de Senha invalido - Extrapolado', () => {
        cy.contains('a', 'Register now').click();
        cy.get('input[formcontrolname="password"]').type('aaaaaaaaaaaaaaaaaaa'); //Type é para escrita, não tipo!!!
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Maximun length is 18').should('be.visible');
        
    })
})