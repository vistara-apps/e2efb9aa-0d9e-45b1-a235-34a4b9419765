'use client'

import { useState } from 'react'
import { QrCode, CheckCircle2, Loader2 } from 'lucide-react'
import { ConnectButton } from './ConnectButton'

interface CheckInCardProps {
  onMintSuccess: (badgeName: string, txHash: string) => void
}

export function CheckInCard({ onMintSuccess }: CheckInCardProps) {
  const [isConnected, setIsConnected] = useState(false)
  const [isMinting, setIsMinting] = useState(false)

  const handleCheckIn = async () => {
    setIsMinting(true)
    
    // Simulate minting transaction
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Mock successful mint
    const mockTxHash = '0x' + Math.random().toString(16).slice(2, 66)
    onMintSuccess('Base Builder Summit 2024', mockTxHash)
    
    setIsMinting(false)
  }

  return (
    <div className="bg-surface rounded-lg p-6 shadow-xl border border-primary/20 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-center mb-6">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
          <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
            <span className="text-2xl">🔵</span>
          </div>
        </div>
      </div>

      {/* Title */}
      <div className="text-center mb-6">
        <h1 className="text-2xl font-semibold text-fg mb-2">
          Base Check-in
        </h1>
        <p className="text-muted text-sm">
          Faster check in in your app
        </p>
      </div>

      {/* QR Code Placeholder */}
      <div className="bg-white rounded-md p-8 mb-6 flex items-center justify-center">
        <div className="w-48 h-48 bg-black rounded-md flex items-center justify-center">
          <QrCode className="w-40 h-40 text-white" />
        </div>
      </div>

      {/* Action Button */}
      {!isConnected ? (
        <ConnectButton onConnect={() => setIsConnected(true)} />
      ) : (
        <button
          onClick={handleCheckIn}
          disabled={isMinting}
          className="w-full bg-primary hover:bg-accent text-white font-medium py-4 px-6 rounded-md transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isMinting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Minting Badge...
            </>
          ) : (
            <>
              <CheckCircle2 className="w-5 h-5" />
              Check In
            </>
          )}
        </button>
      )}

      {/* Info Text */}
      {isConnected && !isMinting && (
        <p className="text-center text-muted text-xs mt-4">
          Click to mint your free attendance badge
        </p>
      )}
    </div>
  )
}
