import indexPage from '../Casos de prueba/index';
import articlesPage from'../Casos de prueba/articles';
describe('En este caso de prueba se realizara una consulta en la barra de busqueda', function(){
 before (function(){
  cy.log("Ejecutando precondiciones a las pruebas");
 })
 after(function(){
  cy.log("Ejecutando todas las precondiciones a las pruebas");
 })
 beforeEach(function(){
  cy.visit('http://automationpractice.com/index.php');
 })
 afterEach(function(){
  cy.log('Poniendo datos en su estado original');
 })
 it('Busqueda de la palabra dress', function(){
  indexPage.search('dress');
  cy.logSpecFormat('Searching for dresses')
  articlesPage.verifyArticle('"dress"');
})
  
  it('Busqueda de la palabra hat', function(){
    indexPage.search('hat');
   articlesPage.verifyArticle('"hat"');
  })
})