import { arrowFunctionRegex } from "../src/util/regex";

const goodFnStrings = [
    "() => {console.log(1) }",
    "x => x + 1",
    "(x, y) => x + y",
    "(a,   b   ,  c) => { return a + b / c }",
];

const badFnStrings = [
    "=> { return true }",
    "(x,,   y) => x + y",
    "(1a, b, c)=>aaaa",
    "(a, b, c,)=> a + b + c",
];

describe("Internal regular expressions", () => {
    it("Should match arrow functions correctly", () => {
        for (const str of goodFnStrings) {
            expect(arrowFunctionRegex.test(str)).toEqual(true);
        }

        for (const str of badFnStrings) {
            expect(arrowFunctionRegex.test(str)).toEqual(false);
        }
    });
});
