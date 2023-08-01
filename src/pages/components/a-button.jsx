import { a as aAttrs } from "@fustak/s/attrs";

export function AButton({ children, ...props }) {
    const buttonConfig = {
        tag: "a",
        attributes: aAttrs,
        alignItems: "center",
        backgroundColor: "#1f2937",
        borderRadius: ".5rem",
        color: "#fff",
        cursor: "pointer",
        display: "flex",
        fontSize: ".875rem",
        fontWeight: "500",
        lineHeight: "1.25rem",
        minHeight: "48px",
        padding: "0 24px",
        textDecoration: "none",
        style: {
            ":focus": {
                background: "#000",
                color: "#fff",
            },
            ":hover": {
                background: "#000",
                color: "#fff",
            },
        },
        ...props,
    };

    return <U {...buttonConfig}>{children}</U>;
}
