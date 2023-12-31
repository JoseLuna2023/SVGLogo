// imports "./circle.js"
import Circle from "./circle.js"

// creates test for circle; ran by jest
describe("circle", () => {
    test("creates blue circle", () => {
        const expected = `<circle cx="150" cy="100" r="80" fill="blue" />`
        const shape = new Circle();
        shape.setColor("blue")
        const tester = shape.render()
        expect(tester).toEqual(expected)
    })
})