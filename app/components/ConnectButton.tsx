'use client'

import { Wallet } from 'lucide-react'

interface ConnectButtonProps {
  onConnect: () => void
}

export function ConnectButton({ onConnect }: ConnectButtonProps) {
  return (
    <button
      onClick={onConnect}
      className="w-full bg-primary hover:bg-accent text-white font-medium py-4 px-6 rounded-md transition-all duration-200 flex items-center justify-center gap-2"
    >
      <Wallet className="w-5 h-5" />
      Connect Wallet
    </button>
  )
}
