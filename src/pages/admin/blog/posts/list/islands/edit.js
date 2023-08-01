const editButton = document.querySelectorAll(".js-edit");

editButton.forEach((button) =>
    button.addEventListener(
        "click",
        (e) => {
            window.location.href = `/0/admin/blog/posts/${e.currentTarget.id}`;
        },
        false,
    ),
);
