import { sgex } from "sgex";

const fnArg = /[A-Z_a-z]\w*/;
const fnArgsGroup = /\((?:[A-Z_a-z]\w*(?:,\s*[A-Z_a-z]\w*\s*)*)?\)/;

export const arrowFunctionRegex = sgex("s")`^
    (?:(async)\s+)?(
        ${fnArgsGroup}|${fnArg}
    )\s*=>\s*(
        {.*}
        |.*
    )
$`;
