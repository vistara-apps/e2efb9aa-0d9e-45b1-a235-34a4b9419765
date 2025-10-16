'use client'

import { useEffect } from 'react'
import { CheckCircle2, ExternalLink, Share2, X } from 'lucide-react'

interface SuccessToastProps {
  badgeName: string
  txHash: string
  onClose: () => void
}

export function SuccessToast({ badgeName, txHash, onClose }: SuccessToastProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose()
    }, 10000)

    return () => clearTimeout(timer)
  }, [onClose])

  const handleViewBadge = () => {
    window.open(`https://basescan.org/tx/${txHash}`, '_blank')
  }

  const handleShare = () => {
    // In production, this would use the Farcaster compose cast API
    console.log('Share badge on Farcaster')
  }

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-96 bg-surface border border-primary/30 rounded-lg shadow-2xl p-4 animate-fade-in z-50">
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0">
          <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
            <CheckCircle2 className="w-6 h-6 text-primary" />
          </div>
        </div>
        
        <div className="flex-1 min-w-0">
          <h3 className="text-fg font-semibold mb-1">
            🥳 Badge Minted Successfully!
          </h3>
          <p className="text-muted text-sm mb-3">
            You've checked into {badgeName}
          </p>
          
          <div className="flex gap-2">
            <button
              onClick={handleViewBadge}
              className="flex-1 bg-primary/10 hover:bg-primary/20 text-primary text-sm font-medium py-2 px-3 rounded-md transition-all duration-200 flex items-center justify-center gap-1"
            >
              <ExternalLink className="w-4 h-4" />
              View Badge
            </button>
            
            <button
              onClick={handleShare}
              className="flex-1 bg-primary hover:bg-accent text-white text-sm font-medium py-2 px-3 rounded-md transition-all duration-200 flex items-center justify-center gap-1"
            >
              <Share2 className="w-4 h-4" />
              Share
            </button>
          </div>
        </div>
        
        <button
          onClick={onClose}
          className="flex-shrink-0 text-muted hover:text-fg transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  )
}
