"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, Zap, TrendingUp } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid-pattern">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-card/50" />
        <div className="absolute top-0 left-0 w-full h-full bg-dot-pattern opacity-30" />
      </div>

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/6 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/3 right-1/6 w-96 h-96 bg-cyan-500/8 rounded-full blur-3xl animate-float delay-2000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 text-center z-10">
        <div className="animate-fade-in-up">
          <div className="inline-flex items-center space-x-3 glass-effect rounded-full px-8 py-4 mb-8 border border-white/20 shadow-2xl">
            <Zap className="w-5 h-5 text-cyan-400 animate-pulse" />
            <span className="text-base font-bold text-white tracking-wide">
              AI Calls Your Leads in 30 Seconds
            </span>
            <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse shadow-lg" />
          </div>

          <h1 className="heading-display text-5xl md:text-7xl mb-8 text-balance font-black tracking-tight">
            <span className="text-white drop-shadow-2xl">AI Calls Your Real Estate Leads in 30 Seconds and </span>
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent font-black">
              Books Showings Automatically
            </span>
          </h1>

          <p className="text-premium text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-balance leading-relaxed font-semibold text-gray-100 drop-shadow-lg">
            Stop losing Zillow and Facebook leads. Our AI qualifies buyers and schedules appointments <span className="text-cyan-400 font-bold">24/7</span>, so you never miss a deal.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white text-lg px-12 py-6 animate-pulse-glow rounded-xl font-bold shadow-2xl border-0 text-shadow"
              onClick={() => document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" })}
            >
              <Phone className="mr-3 h-6 w-6" />
              Book Live Demo
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-12 py-6 border-2 border-white/30 hover:bg-white/10 bg-white/5 backdrop-blur-md rounded-xl font-bold text-white shadow-xl"
              onClick={() => document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" })}
            >
              <span>Listen to Real Call</span>
            </Button>
          </div>

          <div className="bg-gradient-to-r from-cyan-600/10 to-blue-600/10 border border-cyan-400/20 rounded-2xl p-8 max-w-4xl mx-auto glass-card">
            <p className="text-gray-100 font-semibold text-lg">
              <span className="text-cyan-400 font-bold">Used by real estate teams</span> in US & Australia
            </p>
            <p className="text-gray-300 text-base mt-2">
              Works with Zillow • Facebook Ads • FollowUpBoss • GoHighLevel
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
