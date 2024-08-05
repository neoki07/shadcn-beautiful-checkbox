import { codeToHtml } from "@/lib/highlighter"

import { CopyButton } from "./copy-button"

type CodeBlockProps = {
  code: string
  language: string
}

export async function CodeBlock({ code, language }: CodeBlockProps) {
  const highlightedCodeHtml = await codeToHtml(code, language)

  return (
    <div className="relative">
      <div className="mb-4 mt-6 max-h-[650px] overflow-x-auto rounded-lg border bg-zinc-950 py-4 dark:bg-zinc-900">
        <div
          dangerouslySetInnerHTML={{ __html: highlightedCodeHtml }}
          className="code-block relative grid rounded font-mono text-sm"
        />
      </div>
      <CopyButton value={code} className="absolute right-4 top-4" />
    </div>
  )
}
