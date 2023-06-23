describe('Buscar fotos e dados', () => {
    it('Buscar Fotos do Flávio', () => {
        cy.request({
            method: 'GET',
            url: 'https://apialurapic.herokuapp.com/flavio/photos'
        }).then((res) => {
            expect(res.status).to.be.equal(200); //Espero que o status seja 200
            expect(res.body).is.not.empty; //Espero que o BODY não esteja vazio
            expect(res.body[0]).to.have.property('description') //Espero que o primeiro item tenha uma descrição
            expect(res.body[0].description).to.be.equal('Farol iluminado'); //Como eu tenho uma description (teste acima), vou testar o que tem na descricao 
        });
    })
})