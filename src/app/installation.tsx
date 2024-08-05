import fs from "fs"
import path from "path"

import { CodeBlock } from "./_components/code-block"
import { Step } from "./_components/step"
import { Steps } from "./_components/steps"

export function Installation() {
  const componentFilePath = path.join(
    process.cwd(),
    "./src/components/ui/beautiful-checkbox.tsx"
  )
  const componentSource = fs.readFileSync(componentFilePath, "utf8")

  return (
    <div className="mt-12">
      <h2 className="font-heading scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0">
        Installation
      </h2>
      <div className="mt-2 [&_h3.font-heading]:text-base [&_h3.font-heading]:font-semibold">
        <Steps>
          <Step>Install the following dependencies:</Step>
          <CodeBlock
            code="npm install @radix-ui/react-checkbox"
            language="bash"
          />
          <Step>Copy and paste the following code into your project.</Step>
          <CodeBlock code={componentSource} language="tsx" />
          <Step>Update the import paths to match your project setup.</Step>
        </Steps>
      </div>
    </div>
  )
}
