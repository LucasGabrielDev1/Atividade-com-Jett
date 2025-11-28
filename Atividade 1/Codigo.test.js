const {soma, dobro, divisao, porcentagem} = require('./Codigo')
describe('funções matemáticas' , ()=>{
    beforeAll(()=>{
        console.log('antes de tudo')
    })
    
    afterAll(()=>{
        console.log('depois de tudo')
    })
    
    it('Soma de dois valores', () => {
        expect(soma(2,5)).toBe(7)
        expect(soma(2,4)).toBe(6)
        expect(soma(21,44)).toBe(65)
})
    it('dobro de um valor', () => {
        expect(dobro(4)).toBe(8)
})

    it('a divisao entre dois numeros',() => {       // Novos testes criados e testados com Jest
        expect(divisao(5,10)).toBe(0.5)
    })

    it('a porcentagem de valores', () => {         // Novos testes criados e testados com Jest
        expect(porcentagem(10, 100)).toBe(10);
    });
})