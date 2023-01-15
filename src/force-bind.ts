import { parseArrowFn } from "./util/parse-arrow-fn";

export function forceBind<T extends (...args: any[]) => unknown>(
    fn: T,
    thisArg: unknown
) {
    const parsedFn = parseArrowFn(fn);

    // eslint-disable-next-line @typescript-eslint/no-implied-eval
    return new Function(...parsedFn.paramNames, parsedFn.body).bind(
        thisArg
    ) as T;
}
