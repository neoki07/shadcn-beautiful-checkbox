import { Checkbox as BeautifulCheckbox } from "@/components/ui/beautiful-checkbox"
import { Checkbox } from "@/components/ui/checkbox"

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
    <div className="flex flex-col items-center justify-center space-y-12 sm:space-y-8">
      {SECTION_ITEMS.map(({ title, Component }) => (
        <fieldset key={title} className="space-y-2">
          <legend className="font-semibold sm:text-center">{title}</legend>
          <div className="grid grid-flow-col grid-rows-3 gap-3 sm:grid-flow-row sm:grid-cols-3">
            {[false, true].map((disabled) => (
              <>
                {["unchecked", "checked", "indeterminate"].map((state) => {
                  const checkboxId = `${title}-${state}${
                    disabled ? "-disabled" : ""
                  }`
                  const checkedValue =
                    state === "indeterminate" ? state : state === "checked"

                  return (
                    <div key={state} className="flex items-center space-x-2">
                      <Component
                        id={checkboxId}
                        defaultChecked={checkedValue}
                        disabled={disabled}
                      />
                      <label
                        htmlFor={checkboxId}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {state}
                      </label>
                    </div>
                  )
                })}
              </>
            ))}
          </div>
        </fieldset>
      ))}
    </div>
  )
}
