import { Checkbox as BeautifulCheckbox } from "@/components/ui/beautiful-checkbox"
import { Checkbox } from "@/components/ui/checkbox"

const CHECKBOX_STATES = ["unchecked", "checked", "indeterminate"] as const

const SECTION_ITEMS = [
  {
    title: "Beautiful Checkbox",
    Component: BeautifulCheckbox,
  },
  {
    title: "shadcn/ui Checkbox",
    Component: Checkbox,
  },
] as const

export function Demo() {
  return (
    <div className="flex flex-col items-center justify-center space-y-12">
      {SECTION_ITEMS.map(({ title, Component }) => (
        <fieldset key={title} className="space-y-2">
          <legend className="font-semibold sm:text-center">{title}</legend>
          <div className="flex flex-col justify-center gap-2 sm:flex-row sm:items-center sm:gap-4">
            {CHECKBOX_STATES.map((state) => {
              const checkedValue =
                state === "indeterminate" ? state : state === "checked"

              return (
                <div key={state} className="flex items-center space-x-2">
                  <Component id="terms" defaultChecked={checkedValue} />
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {state}
                  </label>
                </div>
              )
            })}
          </div>
        </fieldset>
      ))}
    </div>
  )
}