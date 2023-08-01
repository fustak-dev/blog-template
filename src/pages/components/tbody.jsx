export function Tbody({ children, ...props }) {
    return (
        <U tag="tbody" {...props}>
            {children}
        </U>
    );
}
