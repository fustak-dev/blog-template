export function Ol({ children, ...props }) {
    return (
        <U tag="ol" margin="0" {...props}>
            {children}
        </U>
    );
}
