import { Span } from "./span.jsx";

export function Tooltip({ children, style = {}, tooltipText, ...props }) {
    return (
        <Span
            className="tooltip"
            position="relative"
            display="inline-flex"
            style={{
                ".tooltip:hover  > .tooltip-text": {
                    display: "block",
                },
                ".tooltip:hover  > .tooltip-text > .tooltip-arrow": {
                    display: "block",
                },
                ...style,
            }}
            {...props}
        >
            {children}
            <Span
                className="tooltip-text"
                backgroundColor="#1f2937"
                borderRadius="4px"
                border="1px dotted #fff"
                bottom="100%"
                color="#fff"
                display="none"
                fontSize=".75rem"
                fontWeight="500"
                left="50%"
                lineHeight="1"
                padding="8px 16px"
                position="absolute"
                textAlign="center"
                transform="translateX(-50%)"
                width="max-content"
                zIndex="1"
            >
                {tooltipText}
                <Span
                    className="tooltip-arrow"
                    borderColor="#1f2937 transparent transparent transparent"
                    borderStyle="solid"
                    borderWidth="8px 8px 0 8px"
                    bottom="-8px"
                    display="none"
                    height="0"
                    left="50%"
                    position="absolute"
                    width="0"
                />
            </Span>
        </Span>
    );
}
