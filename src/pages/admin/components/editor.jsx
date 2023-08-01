import { MDXEditor } from "@mdxeditor/editor";

const getContent = document.getElementById("json-post").innerText;
const json = JSON.parse(getContent);

globalEditorContent = json.content
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'");

export function Editor() {
    return (
        <MDXEditor
            contentEditableClassName="prose"
            markdown={globalEditorContent}
            onChange={(m) => {
                globalEditorContent = m;
            }}
        />
    );
}
