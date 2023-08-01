import { auth } from "./auth";

export const handleRequest = async function (req) {
    try {
        const response = auth(req);

        if (response) {
            return response;
        }

        const url = new URL(req.url);

        url.pathname = "/0/admin/blog/posts";

        return Response.redirect(url, 302);
    } catch (error) {
        return new Response(error.message, {
            status: 500,
        });
    }
};
