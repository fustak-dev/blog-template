import { A } from "../../components/anchor";
import { Box } from "../../components/box";
import { Li } from "../../components/li";
import { Nav } from "../../components/nav";
import { Ol } from "../../components/ol";

export function Banner() {
    return (
        <Box
            className="banner grid-columns-container"
            role="banner"
            background-color="#fafafa"
            padding-bottom="32px"
            top="0"
            z-index="1"
            padding="0 16px 32px"
            height="96px"
            style={{
                "@media (min-width: 768px)": {
                    padding: "0 32px 32px !important",
                },
            }}
        >
            <Box
                className="grid-columns-content"
                alignItems="center"
                display="flex"
                justifyContent="space-between"
                lineHeight="0"
                marginTop="32px"
                style={{
                    "@media (min-width: 1024px)": {
                        maxWidth: "inherit",
                    },
                }}
            >
                <a href="/">
                    <svg height="28" width="100">
                        <title>Fustak logo</title>
                        <use href="#fustak-logo" height="28" width="100" />
                    </svg>
                </a>
                <Nav>
                    <Ol display="flex" alignItems="center">
                        <Li margin="0" marginLeft="16px">
                            <A
                                href="/blog"
                                style={{
                                    ":hover": {
                                        textDecoration: "underline",
                                    },
                                }}
                            >
                                Blog
                            </A>
                        </Li>
                        <Li margin="0" marginLeft="16px">
                            <A
                                href="/0/admin/blog/posts"
                                style={{
                                    ":hover": {
                                        textDecoration: "underline",
                                    },
                                }}
                            >
                                Posts
                            </A>
                        </Li>
                        <Li margin="0" marginLeft="16px">
                            <A
                                href="https://logout:logout@###URL###/0/admin"
                                style={{
                                    ":hover": {
                                        textDecoration: "underline",
                                    },
                                }}
                            >
                                Logout
                            </A>
                        </Li>
                    </Ol>
                </Nav>
            </Box>
        </Box>
    );
}
