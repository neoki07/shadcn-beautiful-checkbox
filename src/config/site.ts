const repo = {
  name: "shadcn-beautiful-checkbox",
  owner: "neoki07",
}

export const siteConfig = {
  name: repo.name,
  description:
    "A beautifully styled checkbox component, derived from shadcn/ui.",
  repo,
  links: {
    github: `https://github.com/${repo.owner}/${repo.name}`,
    me: `https://github.com/${repo.owner}`,
  },
}

export type SiteConfig = typeof siteConfig
