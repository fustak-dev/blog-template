import { editContent } from "./edit.content";
import { auth } from "../../../auth";
import { html404 } from "../../../../404.html.js";

export const handleRequest = async function (req) {
    try {
        const response = auth(req);

        if (response) {
            return response;
        }

        const url = new URL(req.url);
        const id = url.pathname.split("/").pop();

        const rawContent = sqlite.query(
            "SELECT content FROM blog_raw_content WHERE post_id = ?",
            [id],
        );
        const published = sqlite.query(
            "SELECT published FROM blog_post WHERE id = ?",
            [id],
        );

        if (!rawContent) {
            return new Response(html404, {
                status: 404,
            });
        }

        const content = editContent({
            id,
            ...rawContent[0],
            ...published[0],
        });
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
