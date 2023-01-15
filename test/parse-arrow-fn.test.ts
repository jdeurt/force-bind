import { parseArrowFn } from "../src/util/parse-arrow-fn";

const arrowFn = (a: number, b: number) => {
    return a + b;
};
const asyncArrowFn = async (a: number, b: number) => a + b;
const normalFn = function (a: number, b: number) {
    return a + b;
};

describe("Arrow function parser", () => {
    it("Should correctly parse arrow functions", () => {
        const parsedArrowFn = parseArrowFn(arrowFn);
        const parsedAsyncArrowFn = parseArrowFn(asyncArrowFn);

        expect(parsedArrowFn).toEqual({
            isAsync: false,
            isGroupedParams: true,
            isImplicitReturn: false,
            paramNames: ["a", "b"],
            body: "return a + b;",
            asString: arrowFn.toString(),
        });

        expect(parsedAsyncArrowFn).toEqual({
            isAsync: true,
            isGroupedParams: true,
            isImplicitReturn: true,
            paramNames: ["a", "b"],
            body: "return a + b",
            asString: asyncArrowFn.toString(),
        });
    });

    it("Should throw an error on non-arrow functions", () => {
        expect(() => parseArrowFn(normalFn)).toThrow();
    });
});
