const filtro = require('./filtro')

const contatos = [
    {
        "nome":"paulo",
        "sobrenome":"camargo",
    },
    {
        "nome":"matheus",
        "sobrebome":"camargo"
    }
]

const encontrado =     {
    "nome":"paulo",
    "sobrenome":"camargo",
}

describe('Filtro', ()=>{
    test('Pesquisar nome que existe na base', ()=>{
        expect(
            filtro(contatos,"paulo")
        )
        .toEqual(encontrado)
    })

    test('Pesquisar um nome que nao existe na base',()=>{
        expect(
            filtro(contatos, "xtopde")
        )
        .toBeUndefined()
    })

})// describe