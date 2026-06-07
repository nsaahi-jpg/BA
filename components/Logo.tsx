import React from "react";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <svg
        width="48"
        height="48"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 drop-shadow-sm"
      >
        <circle cx="50" cy="54" r="38" stroke="#1E3A8A" strokeWidth="6" />
        <path
          d="M 38 82 L 48 36 C 48 36 68 34 68 48 C 68 56 56 60 52 60 C 66 60 74 72 62 82 C 54 88 38 82 38 82 Z"
          stroke="#1E3A8A"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M 52 40 L 68 12 M 52 12 L 68 12 L 68 28"
          stroke="#16A34A"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="font-sans text-2xl tracking-tight text-gray-900 hidden sm:block uppercase" style={{ fontWeight: 800 }}>
        Beyond Average
      </span>
    </div>
  );
}
