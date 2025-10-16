'use client'

import { useEffect, useState } from 'react'
import { CheckInCard } from './components/CheckInCard'
import { SuccessToast } from './components/SuccessToast'
import { LoadingState } from './components/LoadingState'

export default function Home() {
  const [isReady, setIsReady] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [mintedBadge, setMintedBadge] = useState<{
    name: string
    txHash: string
  } | null>(null)

  useEffect(() => {
    // Simulate frame ready
    const timer = setTimeout(() => {
      setIsReady(true)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  const handleMintSuccess = (badgeName: string, txHash: string) => {
    setMintedBadge({ name: badgeName, txHash })
    setShowSuccess(true)
  }

  if (!isReady) {
    return <LoadingState />
  }

  return (
    <main className="min-h-screen bg-bg flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        <CheckInCard onMintSuccess={handleMintSuccess} />
      </div>

      {showSuccess && mintedBadge && (
        <SuccessToast
          badgeName={mintedBadge.name}
          txHash={mintedBadge.txHash}
          onClose={() => setShowSuccess(false)}
        />
      )}
    </main>
  )
}
