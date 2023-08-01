import { A } from "./anchor.jsx";
import { Box } from "./box.jsx";
import { Li } from "./li.jsx";
import { Span } from "./span.jsx";
import { Text } from "./text.jsx";
import { Ul } from "./ul.jsx";

export function Footer({ ...props }) {
    return (
        <Box
            tag="footer"
            flex="0"
            margin="32px 0 0"
            lineHeight="32px"
            {...props}
        >
            <Box margin="0 auto" maxWidth="1404px">
                <nav>
                    <Ul
                        className="grid-columns-container"
                        style={{
                            "@media (max-width: 768px)": {
                                padding: "0 16px",
                            },
                        }}
                    >
                        <Li
                            gridColumn="1 / -1"
                            style={{
                                "@media (min-width: 768px)": {
                                    gridColumn: "3 / span 3 !important",
                                },
                            }}
                        >
                            <Text margin="0">
                                <A href={"/"}>
                                    <svg height="21" width="75">
                                        <title>Fustak logo</title>
                                        <use
                                            href="#fustak-logo"
                                            height="21"
                                            width="75"
                                        />
                                    </svg>
                                </A>
                            </Text>
                        </Li>
                        <Li
                            gridColumn="1 / -1"
                            style={{
                                "@media (min-width: 768px)": {
                                    gridColumn: "6 / span 1 !important",
                                },
                            }}
                        >
                            <Span fontWeight="800">Pages</Span>
                            <Ul lineHeight="2rem" marginTop="8px">
                                <Li>
                                    <A href="/blog">Blog</A>
                                </Li>
                            </Ul>
                        </Li>
                        <Li
                            gridColumn="1 / -1"
                            style={{
                                "@media (min-width: 768px)": {
                                    gridColumn: "7 / span 2 !important",
                                },
                            }}
                        >
                            <Span fontWeight="800">Contact Us</Span>
                            <Ul lineHeight="2rem" marginTop="8px">
                                <Li>
                                    <A
                                        href="https://twitter.com/fustakdev"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Twitter
                                    </A>
                                </Li>
                                <Li>
                                    <A
                                        href="https://discord.gg/RYMgr92D9C"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Discord
                                    </A>
                                </Li>
                                <Li>
                                    <A href="mailto:hello@fustak.com">
                                        hello@fustak.com
                                    </A>
                                </Li>
                            </Ul>
                        </Li>
                    </Ul>
                </nav>
                <Box
                    className="grid-columns-container"
                    style={{
                        "@media (max-width: 768px)": {
                            padding: "0 16px",
                        },
                    }}
                >
                    <Text
                        margin="0"
                        marginTop="32px"
                        gridColumn="1 / -1"
                        style={{
                            "@media (min-width: 768px)": {
                                gridColumn: "6 / span 3 !important",
                            },
                        }}
                    >{`Copyright © ${new Date().getFullYear()} Fustak`}</Text>
                </Box>
            </Box>
        </Box>
    );
}
