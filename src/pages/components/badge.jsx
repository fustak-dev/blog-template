import { Span } from "./span";

export function Badge({ children, ...props }) {
    return (
        <Span
            backgroundColor="#fff"
            borderRadius=".25rem"
            border="1px solid #1f2937"
            color="#1f2937"
            fontSize=".75rem"
            fontWeight="500"
            lineHeight="1rem"
            paddingBottom=".125rem"
            paddingLeft=".625rem"
            paddingRight=".625rem"
            paddingTop=".125rem"
            {...props}
        >
            {children}
        </Span>
    );
}
