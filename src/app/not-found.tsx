'use client'

import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  const router = useRouter()

  return (
    <div className="flex min-h-[80vh] items-center justify-center px-4">
      <div className="max-w-lg text-center">
        {/* 404 Display */}
        <div className="relative mb-8">
          <span className="select-none text-[12rem] font-bold text-surface-card lg:text-[16rem]">
            404
          </span>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex h-32 w-32 items-center justify-center rounded-full bg-brand-yellow/10">
              <span className="text-6xl">🏗️</span>
            </div>
          </div>
        </div>

        <h1 className="mb-4 text-3xl font-bold text-text-primary lg:text-4xl">
          Page Under Construction
        </h1>
        <p className="mb-8 text-lg text-text-secondary">
          The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you
          back on track.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href="/" icon>
            <Home className="h-4 w-4" />
            Go to Homepage
          </Button>
          <button
            className="inline-flex items-center gap-2 text-text-secondary transition-colors hover:text-brand-yellow"
            onClick={() => router.back()}
          >
            <ArrowLeft className="h-4 w-4" />
            Go Back
          </button>
        </div>
      </div>
    </div>
  )
}
