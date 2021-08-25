import * as React from "react"

type Props = {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <div className="flex justify-center">
      <main className="p-10">
        {children}
      </main>
    </div>
  )
}