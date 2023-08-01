export const handleRequest = async function (res) {
    try {
        const { postId } = await res.json();

        sqlite.exec("UPDATE blog_post SET published = 1 WHERE id = :postId", {
            ":postId": postId,
        });

        return new Response(JSON.stringify({ success: true }), { status: 200 });
    } catch (e) {
        return new Response(JSON.stringify({ error: e.message }), {
            status: 500,
        });
    }
};
