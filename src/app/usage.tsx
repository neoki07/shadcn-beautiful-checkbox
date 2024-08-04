import { CodeBlock } from "./_components/code-block"

export function Usage() {
  return (
    <div className="mt-12">
      <h2 className="font-heading scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0">
        Usage
      </h2>
      <div className="mt-2 [&_h3.font-heading]:text-base [&_h3.font-heading]:font-semibold">
        <CodeBlock src='import { Checkbox } from "@/components/ui/beautiful-checkbox"' />
        <CodeBlock src="<Checkbox />" />
      </div>
    </div>
  )
}
