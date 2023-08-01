import { listContent } from "./list.content";
import { auth } from "../../../auth";

export const handleRequest = async function (req) {
    try {
        const response = auth(req);

        if (response) {
            return response;
        }

        const posts = sqlite.query(
            "SELECT * FROM blog_post WHERE deleted = 0 ORDER BY published DESC, updated_at ASC",
        );
        const content = listContent(posts);
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
