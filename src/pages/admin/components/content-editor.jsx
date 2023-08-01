import { Banner } from "../components/banner";
import { Box } from "../../components/box";
import { Footer } from "../../components/footer";
import { Save } from "../components/save";
import { Svg } from "../../svg/svg";

export function ContentEditor({ content } = {}) {
    return (
        <Box
            className="edit-admin"
            display="grid"
            gridTemplateRows="auto auto 1fr auto"
            height="100%"
        >
            <Banner />
            <Save />
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
                    tag="main"
                    gridColumn="1 / -1"
                    style={{
                        "@media (min-width: 768px)": {
                            gridColumn: "3 / span 8 !important",
                        },
                    }}
                >
                    <div id="js-editor" />
                </Box>
            </Box>
            <Svg />
            <Footer />
            {content && (
                <script id="json-post" type="application/json">
                    {JSON.stringify(content)}
                </script>
            )}
        </Box>
    );
}
