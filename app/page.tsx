import { GlassmorphicNav } from "@/components/glassmorphic-nav"

export default function Home() {
  return (
    <div className="min-h-screen relative bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900">
      {/* Glassmorphic Navigation Component */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <GlassmorphicNav />
      </div>
    </div>
  )
}
