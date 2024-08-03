import { siteConfig } from "@/config/site"

export function SiteFooter() {
  return (
    <footer className="py-6">
      <div className="container flex flex-col items-center justify-between gap-4">
        <p className="text-balance text-center text-sm leading-loose text-muted-foreground">
          Built by{" "}
          <a
            href={siteConfig.links.me}
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            neoki
          </a>
          . The source code is available on{" "}
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </footer>
  )
}
