const buttonAttrs = [
	"disabled",
	"form",
	"formaction",
	"formenctype",
	"formmethod",
	"formnovalidate",
	"formtarget",
	"name",
	"popovertarget",
	"popovertargetaction",
	"type",
	"value",
];

export function Button({ children, ...props }) {
    const buttonConfig = {
        tag: "button",
        type: "button",
        attributes: buttonAttrs,
        backgroundColor: "#1f2937",
        borderRadius: ".5rem",
        color: "#fff",
        cursor: "pointer",
        fontSize: ".875rem",
        fontWeight: "500",
        lineHeight: "1.25rem",
        minHeight: "48px",
        padding: "0 24px",
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
