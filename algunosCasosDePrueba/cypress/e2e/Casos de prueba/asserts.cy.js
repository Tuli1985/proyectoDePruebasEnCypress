describe('Cuentas',function(){
    var a=1;
    it('Vamos a ver una igualdad', function(){
        expect(1==1,"Aqui hay un error").to.equal(true);
    })
    it('Vamos a ver una desigualdad',function(){
       expect(1==2).to.equal(false); 
    })
    it('Vamos a comprobar una resta', function(){
        expect(1-1).to.equal(0);
    })
    it('Vamos a ver que una resta no este bien', function(){
       expect(1-1).to.equal(2); 
    })
    it('Tiene que ser verdadero', function(){
        expect(2==2).to.be.true;
    })
    it('Tiene que ser falso', function(){
        expect(2==1).to.be.false;
    })
    it('Comprobar la existencia de la variable a',function(){
        expect(a).to.exist;
    })
    it('Comprobar que la variable a es menor a 10',function(){
        expect(a).to.be.lessThan(10)
    })
    it('Comprobar que la variable a es mayor a 10',function(){
        expect(25).to.be.greaterThan(10)
    })
})