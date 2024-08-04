type StepsProps = React.HTMLAttributes<HTMLDivElement>

export function Steps(props: StepsProps) {
  return (
    <div
      className="[&>h3]:step steps mb-12 ml-4 border-l pl-8 [counter-reset:step]"
      {...props}
    />
  )
}
