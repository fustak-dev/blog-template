import { TOKEN } from "../../constants";

const publishButton = document.querySelectorAll(".js-unpublish");

publishButton.forEach((button) =>
    button.addEventListener(
        "click",
        (e) => {
            fetch("/api/admin/blog/posts/unpublish", {
                method: "PUT",
                headers: {
                    Authorization: `Bearer ${TOKEN}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    postId: e.currentTarget.id,
                }),
            })
                .then((res) => res.json())
                .then((res) => {
                    if (res.success) {
                        window.location.reload();

                        return;
                    }
                });
        },
        false,
    ),
);
