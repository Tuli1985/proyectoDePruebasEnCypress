describe('En este caso de prueba vamos seleccionar una seccion especifica', function(){
    beforeEach(function(){
            cy.visit('http://automationpractice.com/index.php');
    })
    it("Vamos a la seccion Women",function(){
        cy.get('[class=sf-with-ul]').eq(0).click();  
    })
    it("Vamos a la seccion Dresses",function(){
        cy.get('[class=sf-with-ul]').eq(3).click();//eq nos devuelve el indice 
    })
})