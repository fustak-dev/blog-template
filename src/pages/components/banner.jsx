import { A } from "./anchor.jsx";
import { Box } from "./box.jsx";
import { Li } from "./li.jsx";
import { Nav } from "./nav.jsx";
import { Ol } from "./ol.jsx";

export function Banner({ children, ...props }) {
    return (
        <Box
            className="banner grid-columns-container"
            role="banner"
            background-color="#fafafa"
            padding-bottom="32px"
            position="sticky"
            z-index="1"
            padding="0 16px 32px"
            height="96px"
            style={{
                "@media (min-width: 768px)": {
                    padding: "0 32px 32px !important",
                },
            }}
            {...props}
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
                                href="/0/admin"
                                style={{
                                    ":hover": {
                                        textDecoration: "underline",
                                    },
                                }}
                            >
                                Admin
                            </A>
                        </Li>
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
                                href="https://discord.gg/RYMgr92D9C"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    ":hover": {
                                        textDecoration: "underline",
                                    },
                                }}
                            >
                                <svg height="16" width="21">
                                    <title>Discord</title>
                                    <use
                                        href="#discord-logo"
                                        height="16"
                                        width="21"
                                    />
                                </svg>
                            </A>
                        </Li>
                    </Ol>
                </Nav>
            </Box>
        </Box>
    );
}
