import { codeToHtml } from "@/lib/highlighter"

import { CopyNpmCommandButton } from "./copy-button"

type NpmCommandBlockProps = {
  command: string
}

export async function NpmCommandBlock({ command }: NpmCommandBlockProps) {
  const highlightedCodeHtml = await codeToHtml(command, "bash")

  return (
    <div className="relative">
      <div className="mb-4 mt-6 max-h-[650px] overflow-x-auto rounded-lg border bg-zinc-950 py-4 dark:bg-zinc-900">
        <div
          dangerouslySetInnerHTML={{ __html: highlightedCodeHtml }}
          className="npm-command-block relative grid rounded font-mono text-sm"
        />
      </div>
      <CopyNpmCommandButton
        command={command}
        className="absolute right-4 top-4"
      />
    </div>
  )
}
