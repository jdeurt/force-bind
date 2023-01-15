# force-bind

## Do not use this library it was made as a joke

```js
import { forceBind } from "force-bind";

const arrowFn = (a) => a + this.b;
const thisCtx = {
    b: 2,
};

const boundArrowFn = forceBind(arrowFn, thisCtx);

boundArrowFn(1); // returns 3
```
