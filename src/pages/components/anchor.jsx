import { a as aAttrs } from "@fustak/s/attrs";

export function A({ children, ...props }) {
    return <U tag="a" {...{...props, attributes: aAttrs}}>{children}</U>;
}