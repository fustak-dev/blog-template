import { BlogContent } from "./blog.post.content.jsx";
import { html404 } from "../../404.html.js";

export const handleRequest = async function (req) {
    try {
        const url = new URL(req.url);
        const pathname = url.pathname;
        const slug = pathname.split("/")[2];

        const post = sqlite.query(
            `
            SELECT
                blog_post.title,
                blog_html_content.content
            FROM
                blog_post
            INNER JOIN
                blog_html_content
            ON
                blog_post.id = blog_html_content.post_id
            WHERE
                blog_post.slug = :slug
            AND
                deleted = 0
            `,
            {
                ":slug": slug,
            },
        )[0];

        if (!post) {
            return new Response(html404, {
                status: 404,
            });
        }

        const content = BlogContent(post.content);
        const host = url.host;

        let html = fustak
            .html(content)
            .replaceAll("###URL###", host)
            .replaceAll("__TITLE__", post.title)
            .replaceAll("__CANONICAL__", slug)
            .replaceAll(/<\w.*?>/g, function (match) {
                return match.replace(/&quot;/g, '"');
            });

        html = html.replaceAll(
            /__DESCRIPTION__/g,
            `"${html.match(/<p>(.*?)<\/p>/)[1]}"`,
        );

        const img = html.match(/<img.*?src="(.*?)"/);

        html = html.replaceAll(
            "__IMAGE__",
            img ? `${url.protocol}//${host}${img[1]}` : "",
        );

        return new Response(html, {
            status: 200,
        });
    } catch (error) {
        return new Response(error.message, {
            status: 500,
        });
    }
};
