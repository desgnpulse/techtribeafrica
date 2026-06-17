"use client"
import { useEffect, useRef } from "react"

export default function BeehiivForm() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return
    const script = document.createElement("script")
    script.src = "https://subscribe-forms.beehiiv.com/v3/loader.js"
    script.async = true
    script.setAttribute("data-beehiiv-form", "40287e18-d958-4403-b758-74f84a01f1ad")
    containerRef.current.appendChild(script)
  }, [])

  return <div ref={containerRef} />
}
