const { spy, assert, stub, mock } = require('sinon');
const { Database } = require('./database.js');
const { UsuariosController } = require('./controller.js');
const { expect, beforeAll } = require('@jest/globals');  
let respostaEsperada

describe('Controller de usuários', () => {

    beforeAll(()=>{
             respostaEsperada = [
            {
                id: 10,
                nome: 'João Carlos',
                email: 'email@teste.com'
            }
        ]
    })

    it('fake', () => {
       
        const fakeDatabase = {
            findAll(){
                return respostaEsperada
            }
        } 

        const controller = new UsuariosController(fakeDatabase)
        const response = controller.getAll()

        expect(response).toBe(respostaEsperada)

    })
    
    it('spy', () => {
        const findAll = spy(Database, 'findAll')
        const controller = new UsuariosController(Database)
        controller.getAll()

        assert.calledWith(findAll, 'usuarios')
        findAll.restore()
    })
    
    it('stub', () => {
        
        const findAll = stub(Database, 'findAll')
        findAll.withArgs('usuarios').returns(respostaEsperada)
        
        const controller = new UsuariosController(Database)
        const response = controller.getAll()

        assert.calledWith(findAll, 'usuarios')

        expect(response).toEqual(respostaEsperada)
        findAll.restore()
})
    it('mock', () => {

        const dbMock = mock(Database)
        dbMock.expects('findAll').once().withArgs('usuarios').returns(respostaEsperada)

        const controller = new UsuariosController(Database)
        const response = controller.getAll()
        
        
        expect(response).toEqual(respostaEsperada)

        dbMock.verify()
        dbMock.restore()

})
    //Novas Validações Jest 
    it('deve chamar o método getAll do controller', () => {

        const controller = new UsuariosController(Database)
        expect(typeof controller.getAll).toBe('function')

})
    //Novas Validações Jest 
    it('deve poder criar uma instância do controller', () => {

        const controller = new UsuariosController(Database)
        expect(controller).toBeInstanceOf(UsuariosController)

});
})