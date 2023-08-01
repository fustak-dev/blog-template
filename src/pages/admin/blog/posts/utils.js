import { micromark } from "micromark";
import { frontmatter, frontmatterHtml } from "micromark-extension-frontmatter";
import { fromMarkdown } from "mdast-util-from-markdown";
import { frontmatterFromMarkdown } from "mdast-util-frontmatter";
import { gfmTable, gfmTableHtml } from "micromark-extension-gfm-table";

export function debounce(fn, ms = 1000) {
    let timer;
    return () => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn();
        }, ms);
    };
}

export function slugify(str) {
    return str
        .normalize("NFKD")
        .toLowerCase()
        .replace(/[^\w\s-]/g, "")
        .trim()
        .replace(/[-\s]+/g, "-");
}

export function parser(markdown) {
    const root = fromMarkdown(markdown, {
        extensions: [frontmatter(["yaml"])],
        mdastExtensions: [frontmatterFromMarkdown(["yaml"])],
    });
    const rootValue = root?.children[0].value;
    const metadata = rootValue?.split("\n").reduce((acc, item) => {
        const [key, value] = item.split(":");
        try {
            acc[key] = JSON.parse(value);
        } catch (e) {
            if (key) {
                acc[key] = value.trim();
            }
        }
        return acc;
    }, {});
    const html = parseHtml(markdown);

    const title = html.match(/<h1>(.*)<\/h1>/)[1];
    const slug = slugify(title);

    return {
        metadata: {
            title,
            slug,
            ...metadata,
        },
        markdown,
        html,
    };
}

function parseHtml(markdown) {
    return micromark(markdown, {
        extensions: [frontmatter(["yaml"]), gfmTable()],
        htmlExtensions: [frontmatterHtml(["yaml"]), gfmTableHtml()],
    });
}
