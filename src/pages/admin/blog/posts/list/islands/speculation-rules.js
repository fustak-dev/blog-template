if (HTMLScriptElement.supports?.("speculationrules")) {
    const links = document.querySelectorAll("[data-speculation-rules]");

    links.forEach((link) => {
        link.addEventListener("mouseover", (event) => {
            event.preventDefault();
            const url = link.getAttribute("href");
            const specRules = {
                prerender: [
                    {
                        source: "list",
                        urls: [url],
                    },
                ],
            };
            const specScript = document.createElement("script");
            specScript.type = "speculationrules";
            specScript.textContent = JSON.stringify(specRules);
            document.body.append(specScript);

          });
    });
}
