"use client"

import { signOut } from "next-auth/react"

export default () => {
  return (
    <div>
      <button type="button" onClick={() => signOut()} className="text-white bg-red-700 rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Sign out</button>
    </div>
  )
}
