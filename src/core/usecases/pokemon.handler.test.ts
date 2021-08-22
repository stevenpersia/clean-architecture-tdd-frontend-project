import * as pokemon_handler from "./pokemon.handler"

// @ponicode
describe("all", () => {
    let inst: any

    beforeEach(() => {
        inst = new pokemon_handler.PokemonHandler({})
    })

    test("0", () => {
        let callFunction: any = () => {
            inst.all()
        }
    
        expect(callFunction).not.toThrow()
    })
})
