  describe('En este caso de prueba se se concatenan instrucciones con cypress', function(){
    it('Concatenando instrucciones', function(){
      cy.visit('http://automationpractice.com/index.php')
      cy.get('#search_query_top').clear().type('dress').clear().type(' casual');//Buscamos por clase
      /*cy.get('#search_query_top').type(' casual');//Buscamos por ID
      cy.get('[name="search_query"]').type(' printed');//Buscamos por otras propiedades
      cy.get('[placeholder="Search"]').clear();
      cy.get('#searchbox > .btn').click();
      cy.get('.lighter').contains('dress');*/
    })
  })