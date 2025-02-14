import { useEffect } from "react"
import { toast } from "sonner"

export default function Toast({ toastMessage }: { toastMessage?: string }) {
  useEffect(() => {
    if (toastMessage) {
      toast.success(toastMessage)
    }
  }, [toastMessage])

  return null
}
