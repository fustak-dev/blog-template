import { ButtonTransparent } from "./button-transparent";

export function CopyToClipboard({ children = "", ...props }) {
    return (
        <ButtonTransparent
            tag="button"
            className="js-copy-to-clipboard"
            height="48px"
            padding="0"
            position="absolute"
            right="0"
            top="0"
            width="32px"
            style={{
                ":hover > .svg-color": { fill: "#fff" },
                ":active > .svg-color": { fill: "#666" },
                ":focus": { background: "transparent" },
                ":hover": { background: "transparent" },
            }}
            {...props}
        >
            <span className="sr-only">Copy to clipboard</span>
            <svg height="24" width="24" fill="#000" className="svg-color">
                <title>Copy to clipboard</title>
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M15 20H5V7c0-.55-.45-1-1-1s-1 .45-1 1v13c0 1.1.9 2 2 2h10c.55 0 1-.45 1-1s-.45-1-1-1zm5-4V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2zm-2 0H9V4h9v12z" />
            </svg>
        </ButtonTransparent>
    );
}
