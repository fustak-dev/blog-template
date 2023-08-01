export const handleRequest = async function (req) {
    try {
        const url = new URL(req.url);

        url.pathname = "/blog";

        return Response.redirect(url, 302);
    } catch (error) {
        return new Response(error.message, {
            status: 500
        });
    }
};
