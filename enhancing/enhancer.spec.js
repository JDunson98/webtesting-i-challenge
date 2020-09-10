const enhancer = require('./enhancer.js');
// test away!

describe("item enhancement tests", () => {
    it("repairs", () => {
        expect(enhancer.repair({
            name: "Sword",
            durability: 20,
            enhancement: 15
        })
        ).toEqual({
            name: "Sword",
            durability: 100,
            enhancement: 15
        })
    })

    it("successfully enhances", () => {
        expect(enhancer.success({
            name: "Mace",
            durability: 55,
            enhancement: 14
        })
        ).toEqual({
            name: "Mace",
            durability: 55,
            enhancement: 15
        })
    })
    
    it("fails to enhance", () => {
        expect(enhancer.fail({
            name: "Staff",
            enhancement: 18,
            durability: 100
        })
        ).toEqual({
            name: "Staff",
            enhancement: 17,
            durability: 90
        })
    })
})


