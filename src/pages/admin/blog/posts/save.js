import { debounce, parser } from "./utils";
import { TOKEN } from "./constants";

const JsonPostString = document.getElementById("json-post")?.innerText;
const post = JsonPostString ? JSON.parse(JsonPostString) : { published: 0 };

const editor = document.getElementById("js-editor");
editor.addEventListener("keydown", () => autosavePost(), false);

const save = document.getElementById("js-save");
save.addEventListener("click", () => savePost(), false);

const autosave = document.getElementById("js-autosave");
autosave.addEventListener("change", () => activeAutoSave(), false);

document.addEventListener(
    "keydown",
    (e) => {
        shortcutSave(e);
        shortcutAutosave(e);
    },
    false,
);

function shortcutSave(e) {
    if (e.key === "s" && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        savePost();
    }
}

function shortcutAutosave(e) {
    if (e.key === "S" && e.shiftKey && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        autosave.checked = !autosave.checked;
        activeAutoSave();
    }
}

function activeAutoSave() {
    if (autosave.checked) {
        save.setAttribute("disabled", true);
        save.innerText = "Autosave activated";
        save.style.opacity = 0.5;
        save.style.cursor = "not-allowed";
    } else {
        save.setAttribute("disabled", false);
        save.innerText = "Save";
        save.style.opacity = null;
        save.style.cursor = null;
    }
}

const autosaveTimer = debounce(() => savePost(), 1000);

function autosavePost() {
    if (autosave.checked) {
        autosaveTimer();
    }
}

function savePost() {
    const data = parser(globalEditorContent);
    const slug = data.metadata.slug;
    const title = data.metadata.title;

    const isDraft = /^\[draft\]/.test(title.toLowerCase());

    const htmlString = sanitizeText(data.html)
        .replaceAll(
            /<p>:::caution\s*(.*?):::<\/p>/g,
            "<p class=&quot;caution&quot;>$1</p>",
        )
        .replaceAll(
            /<p>:::info\s*(.*?):::<\/p>/g,
            "<p class=&quot;info&quot;>$1</p>",
        )
        .replaceAll(
            /<p>:::danger\s*(.*?):::<\/p>/g,
            "<p class=&quot;danger&quot;>$1</p>",
        )
        .replaceAll(
            /<p>:::tip\s*(.*?):::<\/p>/g,
            "<p class=&quot;tip&quot;>$1</p>",
        )
        .replaceAll(
            /<p>:::note\s*(.*?):::<\/p>/g,
            "<p class=&quot;note&quot;>$1</p>",
        );
    const codeRegex = /<code>(.*?)<\/code>/g;
    const processedHtml = htmlString.replace(codeRegex, (match, p1) => {
        console.log(match);
        console.log(p1);
        return `<code>${p1.replace(/\\n/g, "___NEWLINE___")}</code>`;
    });
    const finalHtml = processedHtml.replace(/\\n/g, "");
    const html = finalHtml.replace(/___NEWLINE___/g, "\\n");

    const id = post.id ? { id: parseInt(post.id, 10) } : {};

    fetch("/api/admin/blog/posts", {
        method: "PUT",
        headers: {
            Authorization: `Bearer ${TOKEN}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            content: sanitizeText(data.markdown),
            html,
            published: isDraft ? 0 : post.published || 0,
            slug,
            title,
            ...id,
        }),
    }).then((res) => res.json());
}

function sanitizeText(text) {
    return JSON.stringify(text)
        .replace(/^\"/, "")
        .replace(/\"$/, "")
        .replaceAll(/'/g, "&apos;")
        .replaceAll(/"/g, "&quot;");
}
