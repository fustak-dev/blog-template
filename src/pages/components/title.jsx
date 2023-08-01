export function Title({ children, ...props }) {
    return <U tag="h1" fontSize="32px" fontWeight="700" { ...props }>{children}</U>;
}