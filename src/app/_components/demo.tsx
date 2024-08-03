import { Checkbox } from "@/components/ui/checkbox";
import { Checkbox as BeautifulCheckbox } from "@/components/ui/beautiful-checkbox";

const CHECKBOX_STATES = [false, true, "indeterminate"] as const;

const SECTION_ITEMS = [
  {
    title: "Beautiful Checkbox",
    Component: BeautifulCheckbox,
  },
  {
    title: "shadcn/ui Checkbox",
    Component: Checkbox,
  },
] as const;

export function Demo() {
  return (
    <div className="flex flex-col items-center justify-center space-y-12">
      {SECTION_ITEMS.map(({ title, Component }) => (
        <div key={title} className="space-y-2">
          <h2 className="font-semibold sm:text-center">{title}</h2>
          <div className="flex flex-col sm:flex-row sm:items-center justify-center gap-2 sm:gap-4">
            {CHECKBOX_STATES.map((state) => (
              <div key={String(state)} className="flex items-center space-x-2">
                <Component id="terms" defaultChecked={state} />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  State: {state}
                </label>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
