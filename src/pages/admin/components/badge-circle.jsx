import { Span } from "../../components/span";

export function BadgeCircle({ children, ...props }) {
    return (
        <Span
            border="1px solid #1f2937"
            padding="4px"
            borderRadius="50%"
            fontSize="0.75rem"
            width="24px"
            height="24px"
            display="inline-flex"
            alignItems="center"
            justifyContent="center"
            style={{
                ":hover": {
                    backgroundColor: "#1f2937",
                    color: "#fff",
                },
            }}
            {...props}
        >
            {children}
        </Span>
    );
}
