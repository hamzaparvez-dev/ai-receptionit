"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Calendar, Phone, CheckCircle } from "lucide-react"

export function CTASection() {
  return (
    <section id="cta" className="py-24 bg-gradient-to-br from-cyan-950/20 to-blue-950/10">
      <div className="max-w-7xl mx-auto px-6">
        <Card className="max-w-4xl mx-auto p-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/10 border-cyan-400/30 glass-card">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 heading-primary text-white">
              Hear Your Own <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Leads Being Called Live</span>
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto text-balance text-premium font-medium">
              15-minute demo. Real working number. No contract.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white text-lg px-8 py-4 animate-pulse-glow font-bold rounded-xl shadow-2xl"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Book Demo
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-4 border-cyan-400 text-cyan-400 hover:bg-cyan-500/10 bg-transparent font-bold rounded-xl"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Us
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center space-x-2 text-cyan-400">
                <CheckCircle className="h-5 w-5" />
                <span className="font-semibold text-premium">15-minute demo</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-cyan-400">
                <CheckCircle className="h-5 w-5" />
                <span className="font-semibold text-premium">Real working number</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-cyan-400">
                <CheckCircle className="h-5 w-5" />
                <span className="font-semibold text-premium">No contract</span>
              </div>
            </div>

            <div className="border-t border-cyan-400/20 pt-8">
              <p className="text-gray-200 mb-2 text-premium font-semibold">
                Powered by <span className="text-cyan-400 font-bold">GenuineStack AI Automation</span>
              </p>
              <p className="text-sm text-gray-400 text-premium">Used by real estate teams in US & Australia</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
