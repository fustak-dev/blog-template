export function Table({ children, ...props }) {
    return <U tag="table" { ...props }>{children}</U>;
}