import { BlogContent } from "./blog.content.jsx";

export const handleRequest = async function (req) {
    try {
        const posts = sqlite.query(
            `
            SELECT
                *
            FROM
                blog_post
            WHERE
                published = 1
            AND
                deleted = 0
            `,
            [],
        );

        const content = BlogContent(posts);
        const url = new URL(req.url);
        const host = url.host;
        const html = fustak.html(content).replaceAll("###URL###", host);

        return new Response(html, {
            status: 200,
        });
    } catch (error) {
        return new Response(error.message, {
            status: 500,
        });
    }
};
