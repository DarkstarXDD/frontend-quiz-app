import { ProgressBar as RACProgressBar } from "react-aria-components"
import { type ProgressBarProps } from "react-aria-components"

export default function ProgressBar({
  className,
  ...props
}: { className: string } & ProgressBarProps) {
  return (
    <RACProgressBar aria-label="progress" {...props} className={className}>
      {({ percentage }) => (
        <>
          <div className="h-4 rounded-full bg-white p-1">
            <div
              className="h-full rounded-full bg-purple-600"
              style={{ width: percentage + "%" }}
            ></div>
          </div>
        </>
      )}
    </RACProgressBar>
  )
}
