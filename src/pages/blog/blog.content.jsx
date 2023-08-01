import { Banner } from "../components/banner.jsx";
import { Box } from "../components/box.jsx";
import { Footer } from "../components/footer.jsx";
import { Svg } from "../svg/svg.jsx";
import { Table } from "../components/table";
import { Text } from "../components/text.jsx";
import { Td } from "../components/td";
import { Th } from "../components/th";
import { Tr } from "../components/tr";
import { Thead } from "../components/thead";

export function BlogContent(content) {
    return (
        <Box
            className="blog-list-page"
            display="grid"
            gridTemplateRows="auto 1fr auto"
            height="100%"
        >
            <Banner />
            <Box
                className="grid-columns-container"
                marginTop="16px"
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
                    className="blog-list"
                    gridColumn="1 / -1"
                    style={{
                        "@media (min-width: 769px)": {
                            gridColumn: "3 / span 8 !important",
                        },
                    }}
                >
                    {content.length > 0 ? (
                        <Table fontSize="1rem" tableLayout="fixed" width="100%">
                            <Thead>
                                <Tr
                                    borderBottom="1px solid #1f2937"
                                    fontWeight="600"
                                    height="64px"
                                >
                                    <Th verticalAlign="middle" width="110px">
                                        date
                                    </Th>
                                    <Th
                                        paddingLeft="16px"
                                        verticalAlign="middle"
                                    >
                                        title
                                    </Th>
                                </Tr>
                            </Thead>
                            <tbody>
                                {content.map((post, i) => {
                                    return (
                                        <Tr
                                            borderBottom={
                                                i === content.length - 1
                                                    ? "0"
                                                    : "1px solid #1f2937"
                                            }
                                            height="64px"
                                        >
                                            <Td verticalAlign="middle">
                                                {formatDate(post.created_at)}
                                            </Td>
                                            <Td
                                                className="truncate"
                                                paddingLeft="16px"
                                                verticalAlign="middle"
                                            >
                                                <a href={`/blog/${post.slug}`}>
                                                    {post.title}
                                                </a>
                                            </Td>
                                        </Tr>
                                    );
                                })}
                            </tbody>
                        </Table>
                    ) : (
                        <Text
                            fontSize="16px"
                            lineHeight="64px"
                            marginTop="16px"
                        >
                            No posts found
                        </Text>
                    )}
                </Box>
            </Box>
            <Svg />
            <Footer />
        </Box>
    );
}

function formatDate(date) {
    const dateObject = new Date(date);

    return [
        dateObject.getFullYear(),
        dateObject.getMonth(),
        dateObject.getDate(),
    ].join("/");
}
