/**
 * function to toggle the sites theme
 *
 * @export
 * @param {?("light" | "dark")} [force]
 */
export function toggleSiteTheme(force?: "light" | "dark"): void {
  if (force) {
    // used to manually set theme
    const bodyTag = document.getElementsByTagName("body")[0];
    bodyTag?.classList.remove("light", "dark");
    bodyTag?.classList.add(force);
  } else {
    // used to toggle theme
    const bodyTag = document.getElementsByTagName("body")[0];
    if (bodyTag?.classList.contains("light")) {
      bodyTag?.classList.remove("light");
      bodyTag?.classList.add("dark");
    } else {
      bodyTag?.classList.remove("dark");
      bodyTag?.classList.add("light");
    }
  }
}
