import Balancer from "react-wrap-balancer";

import { siteConfig } from "@/config/site";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Icons } from "./_components/icons";

export default function Home() {
  return (
    <div>
      <div className="space-y-2">
        <h1 className="scroll-m-20 text-3xl font-bold tracking-tight text-center">
          {siteConfig.name}
        </h1>
        <p className="text-base text-muted-foreground text-center">
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
          <Icons.gitHub className="mr-1.5 sm:mr-2 size-3.5 sm:size-4" />
          <span className="hidden sm:inline">
            {`${siteConfig.repo.owner}/${siteConfig.repo.name}`}
          </span>
          <span className="text-xs sm:hidden">{siteConfig.repo.name}</span>
        </Link>
      </div>
    </div>
  );
}
