import Link from "next/link"
import Balancer from "react-wrap-balancer"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"

import { Demo } from "./_components/demo"
import { Icons } from "./_components/icons"

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
          <Icons.gitHub className="mr-1.5 size-3.5 sm:mr-2 sm:size-4" />
          <span className="hidden sm:inline">
            {`${siteConfig.repo.owner}/${siteConfig.repo.name}`}
          </span>
          <span className="text-xs sm:hidden">{siteConfig.repo.name}</span>
        </Link>
      </div>
      <div className="mt-10">
        <div className="relative rounded-md border ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
          <div className="flex min-h-[350px] w-full items-center justify-center p-10">
            <Demo />
          </div>
        </div>
      </div>
    </div>
  )
}
