"use client"
import { useEffect } from "react"

export default function PlausibleProvider() {
  useEffect(() => {
    import("@plausible-analytics/tracker").then(({ init }) => {
      init({ domain: "techtribeafrica.com" })
    })
  }, [])

  return null
}
