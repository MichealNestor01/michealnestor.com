/**
 * function to getsite theme
 *
 * @export
 */
export function getSiteTheme(): string {
  const siteWrapper = document.getElementById("site-wrapper");
  return siteWrapper?.classList.contains("light") ? "light" : "dark";
}
