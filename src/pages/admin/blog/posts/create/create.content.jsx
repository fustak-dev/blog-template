import { ContentEditor } from "../../../components/content-editor";

export function createContent() {
    return (
        <ContentEditor
            content={{
                content: `
# Create your post here

:::caution
**Important!** Your post should begin with an **h1** title. To do it, add the **#** symbol as a prefix before your title.
:::

It will be used as the title of your post and as the slug of your post.

To use a different slug or title than the default one, you can add the following metadata at the beginning of your post:

1. You can use the insert formatter button
2. Add it as markdown:

\`\`\`
---
title: My Post Title
slug: my-post-slug
---
\`\`\`

## Supported shortcuts:

- Use one to six **#** characters to create a heading. The number of # characters determines the heading level.
- Use **&#x200B;\*&#x200B;** or **-** to create a list item.
- Use **>** to create a block quote.
- Select a text and press **Ctrl+B** to make it bold, **Ctrl+I** to make it italic, or **Ctrl+U** to underline it. Use **Cmd** on macOS.
- With text selected, use **Ctrl+K** to open the link dialog.
- Use **Ctrl+S** to save your post.
- Use **Ctrl+S+Shift** to activate of deactivate the autosave your post.
- Use **\`** to create inline code.

## Autosave:

- Activate or deactivate the autosave feature by clicking on the **Switch** element on the top left of your screen or using the shortcut **Ctrl+S+Shift**.
- Your document will be automatically saved every time you type new content.
                `,
            }}
        />
    );
}
