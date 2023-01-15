import { forceBind } from "../src/force-bind";

describe("Force bind", () => {
    it("Should forcefully bind arrow functions :)", () => {
        // @ts-ignore
        const fn = (a) => a + this.b;

        expect(forceBind(fn, { b: 2 })(1)).toEqual(3);
    });
});
