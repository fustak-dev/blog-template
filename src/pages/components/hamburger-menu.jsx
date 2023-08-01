export function HamburgerMenu({ children }) {
    return (
        <nav aria-labelledby="hamburger">
            <button
                id="hamburger"
                class="hamburger"
                type="button"
                aria-label="Show Navigation Menu"
                aria-expanded="false"
                tabindex="0"
            >
                ☰
            </button>

            <div id="navMenu" class="navMenu hidden vh">
                <button
                    id="closeNavMenu"
                    class="closeBtn"
                    type="button"
                    aria-label="Hide Navigation Menu"
                >
                    ×
                </button>
                <ul>{children}</ul>
            </div>
        </nav>
    );
}
