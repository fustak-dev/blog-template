import { A } from "../../../../components/anchor";
import { AButton } from "../../../../components/a-button";
import { Badge } from "../../../../components/badge";
import { BadgeCircle } from "../../../components/badge-circle";
import { Banner } from "../../../components/banner";
import { Box } from "../../../../components/box";
import { ButtonTransparent } from "../../../../components/button-transparent";
import { Footer } from "../../../../components/footer";
import { Li } from "../../../../components/li";
import { Span } from "../../../../components/span";
import { Svg } from "../../../../svg/svg";
import { Table } from "../../../../components/table";
import { Tbody } from "../../../../components/tbody";
import { Td } from "../../../../components/td";
import { Text } from "../../../../components/text";
import { Th } from "../../../../components/th";
import { Thead } from "../../../../components/thead";
import { Tooltip } from "../../../../components/tooltip";
import { Tr } from "../../../../components/tr";
import { Ul } from "../../../../components/ul";

export function listContent(posts) {
    const hashPosts = posts.length;

    return (
        <Box
            className="edit-blog"
            display="grid"
            gridTemplateRows="auto 1fr auto"
            height="100%"
        >
            <Banner />
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
                <Box tag="main" gridColumn="1 / -1">
                    <Box
                        tag="header"
                        lineHeight="0"
                        textAlign="center"
                        style={{
                            "@media (min-width: 768px)": {
                                alignItems: "flex-end",
                                display: "flex",
                                justifyContent: "end",
                            },
                        }}
                    >
                        <Text tag="h1" className="sr-only">
                            List of posts
                        </Text>
                        <Text>
                            <AButton
                                href="/0/admin/blog/posts/create"
                                style={{
                                    "@media (max-width: 768px)": {
                                        display: "grid",
                                        width: "100%",
                                    },
                                }}
                            >
                                Create New Post
                            </AButton>
                        </Text>
                    </Box>
                    {hashPosts > 0 ? (
                        <Table
                            borderCollapse="collapse"
                            borderSpacing="0"
                            fontSize="16px"
                            marginTop="32px"
                            tableLayout="fixed"
                            width="100%"
                        >
                            <Thead
                                style={{
                                    "@media (max-width: 768px)": {
                                        display: "none",
                                    },
                                }}
                            >
                                <Tr borderBottom="1px solid #1f2937">
                                    <Th
                                        fontWeight="600"
                                        lineHeight="2"
                                        padding="8px 0"
                                        textAlign="center"
                                        width="10%"
                                    >
                                        Published
                                    </Th>
                                    <Th
                                        fontWeight="600"
                                        lineHeight="2"
                                        padding="8px 16px 8px 0"
                                    >
                                        Title
                                    </Th>
                                    <Th
                                        fontWeight="600"
                                        lineHeight="2"
                                        padding="8px 16px 8px 0"
                                    >
                                        Slug
                                    </Th>
                                    <Th
                                        fontWeight="600"
                                        lineHeight="2"
                                        padding="8px 0"
                                        width="176px"
                                    >
                                        <Span display="flex">
                                            <Tooltip
                                                tooltipText="Edit &bull; Delete &bull; Publish &bull; Unpublish"
                                                alignItems="center"
                                                display="flex"
                                                justifyContent="center"
                                            >
                                                EDPU
                                                <BadgeCircle
                                                    backgroundColor="#1f2937"
                                                    color="#fff"
                                                    fontSize="0.75rem"
                                                    marginLeft="4px"
                                                    width="16px"
                                                    height="16px"
                                                >
                                                    ?
                                                </BadgeCircle>
                                            </Tooltip>
                                        </Span>
                                    </Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {posts.map((post, i) => (
                                    <Tr
                                        borderBottom="1px solid #1f2937"
                                        style={{
                                            "@media (max-width: 768px)": {
                                                borderTop: `${
                                                    !i
                                                        ? "1px solid #1f2937"
                                                        : "0"
                                                }`,
                                            },
                                        }}
                                    >
                                        <Td
                                            lineHeight="1"
                                            verticalAlign="middle"
                                            textAlign="center"
                                            padding="8px 0"
                                            style={{
                                                "@media (max-width: 768px)": {
                                                    marginTop: `${
                                                        !i ? "24px" : "8px"
                                                    }`,
                                                    display: "inline-block",
                                                    textAlign:
                                                        "left !important",
                                                    width: "100%",
                                                },
                                            }}
                                        >
                                            <Badge
                                                backgroundColor={
                                                    post.published
                                                        ? "#fff"
                                                        : "#000"
                                                }
                                                color={
                                                    post.published
                                                        ? "#000"
                                                        : "#fff"
                                                }
                                            >
                                                {post.published ? "Yes" : "No"}
                                            </Badge>
                                        </Td>
                                        <Td
                                            lineHeight="1"
                                            verticalAlign="middle"
                                            padding="8px 16px 8px 0"
                                            style={{
                                                "@media (max-width: 768px)": {
                                                    display: "inline-block",
                                                    textAlign:
                                                        "left !important",
                                                    width: "100%",
                                                },
                                            }}
                                        >
                                            <A
                                                href={`/0/admin/blog/posts/${post.id}`}
                                                className="truncate"
                                                data-speculation-rules="true"
                                                display="block"
                                            >
                                                {post.title}
                                            </A>
                                        </Td>
                                        <Td
                                            lineHeight="1"
                                            verticalAlign="middle"
                                            padding="8px 16px 8px 0"
                                            style={{
                                                "@media (max-width: 768px)": {
                                                    display: "none",
                                                },
                                            }}
                                        >
                                            <Span
                                                display="block"
                                                fontWeight="800"
                                                style={{
                                                    "@media (min-width: 768px)":
                                                        {
                                                            display:
                                                                "none !important",
                                                        },
                                                }}
                                            >
                                                Slug
                                            </Span>
                                            <A
                                                href={`/blog/${post.slug}`}
                                                className="truncate"
                                                display="block"
                                            >
                                                {post.slug}
                                            </A>
                                        </Td>
                                        <Td
                                            lineHeight="1"
                                            verticalAlign="middle"
                                            textAlign="center"
                                            padding="8px 0"
                                            style={{
                                                "@media (max-width: 768px)": {
                                                    display: "inline-block",
                                                    textAlign:
                                                        "left !important",
                                                    width: "100%",
                                                },
                                            }}
                                        >
                                            <Ul
                                                alignItems="center"
                                                display="flex"
                                                fontSize="0.8rem"
                                                justifyContent="space-between"
                                                paddingBottom="8px"
                                                style={{
                                                    "@media (min-width: 768px)":
                                                        {
                                                            justifyContent:
                                                                "start !important",
                                                            paddingBottom:
                                                                "0 !important",
                                                        },
                                                }}
                                            >
                                                <li>
                                                    <A
                                                        id={post.id}
                                                        className="js-edit"
                                                        href={`/blog/${post.slug}`}
                                                        display="inline-block"
                                                        textDecoration="none"
                                                        marginRight="8px"
                                                        style={{
                                                            "@media (min-width: 768px)":
                                                                {
                                                                    display:
                                                                        "none !important",
                                                                },
                                                        }}
                                                    >
                                                        Read
                                                    </A>
                                                </li>
                                                <li>
                                                    <A
                                                        id={post.id}
                                                        className="js-edit"
                                                        href={`/0/admin/blog/posts/${post.id}`}
                                                        textDecoration="none"
                                                    >
                                                        Edit
                                                    </A>
                                                </li>
                                                <Li
                                                    style={{
                                                        "@media (min-width: 768px)":
                                                            {
                                                                ":before": {
                                                                    content:
                                                                        '"•"',
                                                                    padding:
                                                                        "0 4px",
                                                                },
                                                            },
                                                    }}
                                                >
                                                    <ButtonTransparent
                                                        id={post.id}
                                                        className="js-delete"
                                                        minHeight="auto"
                                                    >
                                                        Delete
                                                    </ButtonTransparent>
                                                </Li>
                                                {post.published ? (
                                                    <li>
                                                        <ButtonTransparent
                                                            id={post.id}
                                                            className="js-unpublish"
                                                            minHeight="auto"
                                                            style={{
                                                                "@media (min-width: 768px)":
                                                                    {
                                                                        ":before":
                                                                            {
                                                                                content:
                                                                                    '"•"',
                                                                                padding:
                                                                                    "0 4px",
                                                                            },
                                                                    },
                                                            }}
                                                        >
                                                            Unpublish
                                                        </ButtonTransparent>
                                                    </li>
                                                ) : (
                                                    <li>
                                                        <ButtonTransparent
                                                            id={post.id}
                                                            className="js-publish"
                                                            minHeight="auto"
                                                            style={{
                                                                "@media (min-width: 768px)":
                                                                    {
                                                                        ":before":
                                                                            {
                                                                                content:
                                                                                    '"•"',
                                                                                padding:
                                                                                    "0 4px",
                                                                            },
                                                                    },
                                                            }}
                                                        >
                                                            Publish
                                                        </ButtonTransparent>
                                                    </li>
                                                )}
                                            </Ul>
                                        </Td>
                                    </Tr>
                                ))}
                            </Tbody>
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
