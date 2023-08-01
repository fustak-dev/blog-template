import { Banner } from "../../components/banner.jsx";
import { Box } from "../../components/box.jsx";
import { Footer } from "../../components/footer.jsx";
import { Svg } from "../../svg/svg.jsx";

export function BlogContent(content) {
    return (
        <Box
            className="blog-page"
            display="grid"
            gridTemplateRows="auto 1fr auto"
            height="100%"
        >
            <Banner />
            <Box
                className="grid-columns-container"
                marginTop="16px"
                margin="32px auto 0"
                padding="0 16px 32px"
                style={{
                    "@media (min-width: 768px)": {
                        margin: "80px auto 0 !important",
                        padding: "0 32px 32px !important",
                    },
                }}
            >
                <Box
                    tag="main"
                    className="blog"
                    gridColumn="1 / -1"
                    style={{
                        "@media (min-width: 769px)": {
                            gridColumn: "2 / span 7 !important",
                        },
                    }}
                >
                    {content}
                </Box>
            </Box>
            <Svg />
            <Footer />
        </Box>
    );
}
