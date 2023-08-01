import { Button } from "./button";

export function ButtonTransparent({ ...props }) {
    return (
        <Button
            backgroundColor="transparent"
            backgroundRepeat="no-repeat"
            border="none"
            borderRadius="0"
            color="#000"
            fontSize="inherit"
            fontWeight="inherit"
            overflow="hidden"
            outline="none"
            padding="0"
            style={{
                ":active": {
                    background: "transparent",
                },
                ":focus": {
                    background: "transparent",
                },
                ":hover": {
                    background: "transparent",
                },
            }}
            {...props}
        >
            {props.children}
        </Button>
    );
}
