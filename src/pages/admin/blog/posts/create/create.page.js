import { createContent } from "./create.content";
import { auth } from "../../../auth";

export const handleRequest = async function (req) {
    try {
        const response = auth(req);

        if (response) {
            return response;
        }

        const content = createContent();
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
