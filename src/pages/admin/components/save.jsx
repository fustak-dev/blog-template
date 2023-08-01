import { Box } from "../../components/box";
import { Button } from "../../components/button";
import { Switch } from "../../components/switch";

export function Save() {
    return (
        <Box
            className="grid-columns-container"
            margin="0 auto"
            padding="0 16px 32px"
            style={{
                "@media (min-width: 768px)": {
                    padding: "0 32px 32px !important",
                },
            }}
        >
            <Box
                alignItems="center"
                display="flex"
                justifyContent="space-between"
                lineHeight="0"
                gridColumn="1 / -1"
                style={{
                    "@media (min-width: 768px)": {
                        gridColumn: "3 / span 8 !important",
                    },
                }}
            >
                <Switch id="js-autosave" title="Autosave" />
                <Button id="js-save" type="button">
                    Save
                </Button>
            </Box>
        </Box>
    );
}
