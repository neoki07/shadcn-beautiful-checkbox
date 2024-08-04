import { CopyButton } from "./copy-button"

type CodeBlockProps = {
  src: string
}

export function CodeBlock({ src }: CodeBlockProps) {
  const lines = src.trimEnd().split("\n")

  return (
    <div className="relative">
      <pre className="mb-4 mt-6 max-h-[650px] overflow-x-auto rounded-lg border bg-zinc-950 py-4 dark:bg-zinc-900">
        <code className="relative grid rounded font-mono text-sm">
          {lines.map((line, index) => (
            <span
              key={index}
              className="inline-block min-h-4 w-full px-4 py-0.5 text-white"
            >
              {line}
            </span>
          ))}
        </code>
      </pre>
      <CopyButton value={src} className="absolute right-4 top-4" />
    </div>
  )
}
