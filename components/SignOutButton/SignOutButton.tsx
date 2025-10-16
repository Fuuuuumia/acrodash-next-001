"use client"

import { useTransition } from "react";
import { doSignOut } from "@/app/actions/authActions";

export default () => {
  const [isPending, startTransition] = useTransition();
  return (
    <div>
      <button 
        type="button" 
        onClick={() => startTransition(() => doSignOut())} 
        disabled={isPending}
        className="text-white bg-red-700 rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
      >
        
        Sign out
      </button>
    </div>
  )
}
