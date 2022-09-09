describe("En este caso de prueba se realizaran pruebas sobre el sitio Women",function(){
    beforeEach(function(){
        cy.visit("http://automationpractice.com/index.php?id_category=3&controller=category")
    })
    it("Buscando tops en la seccion de ropa women", function(){
        cy.get('#layered_category_4').check()//check en la seccion tops
        cy.get('#layered_id_attribute_group_3').check()//check en la seccion large
        cy.get('#layered_id_attribute_group_3').uncheck()//desmarcamos la seccion large
    })
    it("En este caso de prueba estaremos ordenando por el precio mas alto",function(){
        cy.get('#selectProductSort').select('Price: Highest first');

    })
    it("En este caso de prueba estaremos ordenando por existencia del producto en stock",function(){
        cy.get('#selectProductSort').select('In stock');

    })
});
