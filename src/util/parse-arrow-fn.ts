import { arrowFunctionRegex } from "./regex";

type ArrowFunctionRegexMatchArray = [
    full: string,
    asyncIndicator: string | undefined,
    params: string,
    body: string
];

export const parseArrowFn = <T extends (...args: any[]) => unknown>(fn: T) => {
    const match =
        (fn
            .toString()
            .match(
                arrowFunctionRegex
            ) as ArrowFunctionRegexMatchArray | null) ?? [];

    if (match.length === 0) {
        throw new Error("Could not parse arrow function");
    }

    const isAsync = match[1] !== undefined;

    const paramsStr = match[2];
    const bodyStr = match[3];

    const isGroupedParams =
        paramsStr.startsWith("(") && paramsStr.endsWith(")");
    const isImplicitReturn = !bodyStr.startsWith("{") && !bodyStr.endsWith("}");

    const paramNames = (isGroupedParams ? paramsStr.slice(1, -1) : paramsStr)
        .split(",")
        .map((name) => name.trim());
    const body = (
        isImplicitReturn ? `return ${bodyStr}` : bodyStr.slice(1, -1)
    ).trim();

    return {
        isAsync,
        isGroupedParams,
        isImplicitReturn,
        paramNames,
        body,
        asString: fn.toString(),
    };
};
