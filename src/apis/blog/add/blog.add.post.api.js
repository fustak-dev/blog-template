export const handleRequest = async function (res) {
    try {
        const { content, published, html, slug, title, id } = await res.json();

        let postId = id;

        if (postId) {
            sqlite.exec(
                `
                INSERT INTO
                    blog_post
                        (id, slug, title)
                    VALUES
                        (:id, :slug, :title)
                ON CONFLICT
                DO UPDATE SET
                    slug = :slug,
                    title = :title
                `,
                {
                    ":id": postId,
                    ":slug": slug,
                    ":title": title,
                },
            );
        } else {
            sqlite.exec(
                `
                INSERT INTO
                    blog_post
                        (published, slug, title)
                    VALUES
                        (:published, :slug, :title)
                ON CONFLICT (slug, deleted)
                DO UPDATE SET
                    published = :published,
                    slug = :slug,
                    title = :title
                `,
                {
                    ":published": published,
                    ":slug": slug,
                    ":title": title,
                },
            );

            postId = sqlite.query(
                "SELECT id FROM blog_post WHERE slug = :slug AND deleted = 0",
                {
                    ":slug": slug,
                },
            )[0].id;
        }

        sqlite.exec(
            `
            INSERT INTO
                blog_html_content
                    (content, post_id)
                VALUES
                    (:html, :postId)
            ON CONFLICT (post_id)
            DO UPDATE SET
                content = :html
            `,
            {
                ":html": html,
                ":postId": postId,
            },
        );

        sqlite.exec(
            `
            INSERT INTO
                blog_raw_content
                    (content, post_id)
                VALUES
                    (:content, :postId)
            ON CONFLICT (post_id)
            DO UPDATE SET
                content = :content`,
            {
                ":content": content,
                ":postId": postId,
            },
        );

        return new Response(JSON.stringify({ success: true }), { status: 201 });
    } catch (e) {
        return new Response(JSON.stringify({ error: e.message }), {
            status: 500,
        });
    }
};
