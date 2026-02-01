import { useTheme } from "@/hooks/useTheme";

/**
 * Syncs theme from Redux to the document root so dark/light mode applies on all routes.
 * Renders children unchanged. Must be used inside Redux Provider.
 */
export const ThemeSync = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  useTheme();
  return <>{children}</>;
};
