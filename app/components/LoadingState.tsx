'use client'

export function LoadingState() {
  return (
    <div className="min-h-screen bg-bg flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-slow">
          <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
            <span className="text-2xl">🔵</span>
          </div>
        </div>
        <h2 className="text-xl font-semibold text-fg mb-2">
          Loading Base Check-in
        </h2>
        <p className="text-muted text-sm">
          Preparing your experience...
        </p>
      </div>
    </div>
  )
}
