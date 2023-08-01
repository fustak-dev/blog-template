import { TOKEN } from "../../constants";

const deleteButton = document.querySelectorAll(".js-delete");

deleteButton.forEach((button) =>
    button.addEventListener(
        "click",
        (e) => {
            fetch("/api/admin/blog/posts", {
                method: "DELETE",
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
