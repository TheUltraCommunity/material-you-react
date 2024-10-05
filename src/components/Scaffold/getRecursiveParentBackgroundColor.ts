export function getRecursiveParentBackgroundColor(element: HTMLElement | null) {
    if (element == null) {
        return null;
    } else {
        const computedStyle = window.getComputedStyle(element);
        const bgColor = computedStyle.backgroundColor || computedStyle.background;
        if (
            bgColor &&
            bgColor !== "transparent" &&
            bgColor !== "rgba(0, 0, 0, 0)"
        ) {
            return bgColor;
        }

        return getRecursiveParentBackgroundColor(element!.parentElement);
    }
};


const colorTokens = {
    "--md-sys-color-primary": "--md-sys-color-on-primary",
    "--md-sys-color-secondary": "--md-sys-color-on-secondary",
    "--md-sys-color-tertiary": "--md-sys-color-on-tertiary",
    "--md-sys-color-error": "--md-sys-color-on-error",
    "--md-sys-color-primary-container": "--md-sys-color-on-primary-container",
    "--md-sys-color-secondary-container": "--md-sys-color-on-secondary-container",
    "--md-sys-color-tertiary-container": "--md-sys-color-on-tertiary-container",
    "--md-sys-color-error-container": "--md-sys-color-on-error-container",
    "--md-sys-color-background": "--md-sys-color-on-background",
    "--md-sys-color-surface": "--md-sys-color-on-surface",
    "--md-sys-color-surface-variant": "--md-sys-color-on-surface-variant",
    "--md-sys-color-inverse-surface": "--md-sys-color-inverse-on-surface",
    "--md-sys-color-primary-fixed": "--md-sys-color-on-primary-fixed",
    "--md-sys-color-primary-fixed-dim": "--md-sys-color-on-primary-fixed-variant",
    "--md-sys-color-secondary-fixed": "--md-sys-color-on-secondary-fixed",
    "--md-sys-color-secondary-fixed-dim":
        "--md-sys-color-on-secondary-fixed-variant",
    "--md-sys-color-tertiary-fixed": "--md-sys-color-on-tertiary-fixed",
    "--md-sys-color-tertiary-fixed-dim":
        "--md-sys-color-on-tertiary-fixed-variant",
};

// Function to get the complementary color token, both normal and reverse
export function getComplementaryColor(nullableToken: string | null) {

    const styles = getComputedStyle(document.documentElement);
    const token = nullableToken ||
        `rgb(${styles.getPropertyValue("--md-sys-color-surface").trim()})`
    const colorEntries = Object.fromEntries(
        Object.entries(colorTokens).map(([key, value]) => [
            `rgb(${styles.getPropertyValue(key).trim()})`,
            `rgb(${styles.getPropertyValue(value).trim()})`,
        ])
    );
    const reverseColorEntries = Object.fromEntries(
        Object.entries(colorEntries).map(([key, value]) => [
            `rgb(${styles.getPropertyValue(key).trim()})`,
            `rgb(${styles.getPropertyValue(value).trim()})`,
        ])
    );
    // Search normal map first, then reverse map if not found
    return colorEntries[token] || reverseColorEntries[token] || `rgb(${styles.getPropertyValue("--md-sys-color-on-surface").trim()})`;
}
