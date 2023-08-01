export function Text({ children, ...props }) {
    return (
        <U tag="p" fontSize="16px" lineHeight="32px" {...props}>
            {children}
        </U>
    );
}
