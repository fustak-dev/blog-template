import { Box } from "./box";

export function Switch({ id, ...props }) {
    return (
        <Box height="24px" position="relative" width="48px">
            <span class="switch-container">
                <span class="switch-wrapper">
                    <input
                        id={id}
                        type="checkbox"
                        role="switch"
                        aria-checked="false"
                        {...props}
                    />
                    <span aria-hidden="true" />
                    <label for="js-autosave" class="sr-only">
                        Autosave
                    </label>
                </span>
            </span>
        </Box>
    );
}
