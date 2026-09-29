import { useEffect } from "react"
import { Outlet } from "react-router-dom"
import { PaceuiErrorBoundary } from "@/components/templates/ultimate-dashboard/layouts/paceui-error-boundary"

const THEME_CLASS = "paceui-default"

/**
 * Applies stock shadcn zinc tokens on <html> so portals on document.body
 * inherit colors. The class only sets variables — background, text, and
 * link cursor stay on `.apg-analytics-root` and the portal nodes.
 */
export function PaceuiDefaultTheme() {
  useEffect(() => {
    const root = document.documentElement
    root.classList.add(THEME_CLASS)
    return () => {
      root.classList.remove(THEME_CLASS)
    }
  }, [])

  return (
    <PaceuiErrorBoundary
      fallback={
        <div className="p-6 text-sm text-muted-foreground">
          Something went wrong loading this page. Refresh to try again.
        </div>
      }
    >
      <Outlet />
    </PaceuiErrorBoundary>
  )
}
