import Link from "next/link"
import Balancer from "react-wrap-balancer"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"

import { Icons } from "./_components/icons"
import { Demo } from "./demo"
import { Installation } from "./installation"
import { Usage } from "./usage"

export default function Home() {
  return (
    <div>
      <div className="space-y-2">
        <h1 className="scroll-m-20 text-center text-3xl font-bold tracking-tight">
          {siteConfig.name}
        </h1>
        <p className="text-center text-base text-muted-foreground">
          <Balancer>{siteConfig.description}</Balancer>
        </p>
      </div>
      <div className="mt-4 text-center">
        <Link
          href={siteConfig.links.github}
          target="_blank"
          rel="noreferrer"
          className={buttonVariants({ variant: "outline", size: "sm" })}
        >
          <Icons.gitHub className="mr-2 size-4" />
          <span className="hidden sm:inline">
            {`${siteConfig.repo.owner}/${siteConfig.repo.name}`}
          </span>
          <span className="sm:hidden">{siteConfig.repo.name}</span>
        </Link>
      </div>
      <Demo />
      <Installation />
      <Usage />
    </div>
  )
}
