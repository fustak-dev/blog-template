import "../../save";

import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

window.h = React.createElement;
window.Fragment = React.Fragment;

import { Editor } from "../../../../components/editor";

const root = createRoot(document.getElementById("js-editor"));

root.render(
    <StrictMode>
        <Editor />
    </StrictMode>,
);
