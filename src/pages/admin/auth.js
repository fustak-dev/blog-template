import { html401 } from "../401.html.js";

export function auth(req) {
    const auth = req.headers.get("Authorization");

    if (!auth) {
        return response();
    }

    const [username, password] = atob(auth.split(" ").pop()).split(":");
    const user = sqlite.query(
        "SELECT * FROM user WHERE username = ? AND password = ?",
        [username, password],
    );

    if (user.length === 0) {
        return response();
    }
}

function response() {
    return new Response(html401, {
        status: 401,
        headers: {
            "WWW-Authenticate": 'Basic realm="admin"',
        },
    });
}