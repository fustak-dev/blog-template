import { img as imgAttrs } from "@fustak/s/attrs";

export function Image({ ...props }) {
    return <U tag="img" {...{...props, attributes: imgAttrs}} />;
}