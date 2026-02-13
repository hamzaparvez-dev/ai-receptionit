"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Play, ExternalLink, Volume2, Pause, Phone, Calendar, MessageSquare, Clock } from "lucide-react"
import { useState, useRef } from "react"

const voiceSamples = [
  {
    id: 1,
    name: "New Buyer Inquiry",
    description: "First-time buyer calling about new listings",
    url: "https://res.cloudinary.com/dij5outes/video/upload/v1758876389/RealEstateAgents_nwtorv.mp3",
    scenario: "Lead qualification",
  },
  {
    id: 2,
    name: "Missed Call Recovery",
    description: "AI reconnecting with leads who called after hours",
    url: "https://res.cloudinary.com/dij5outes/video/upload/v1758876375/Pysio-agent_suqlck.mp3",
    scenario: "Follow-up calls",
  },
  {
    id: 3,
    name: "Rental Inquiry",
    description: "Investor asking about rental properties",
    url: "https://res.cloudinary.com/dij5outes/video/upload/v1758876368/Marketing-Agency_ronynp.mp3",
    scenario: "Investment leads",
  },
]

const demoFeatures = [
  {
    icon: Phone,
    title: "Call Handling",
    description: "Watch how AI answers calls professionally and routes them appropriately",
  },
  {
    icon: Calendar,
    title: "Appointment Booking",
    description: "See real-time calendar integration and automatic scheduling",
  },
  {
    icon: MessageSquare,
    title: "Customer Communication",
    description: "Experience natural conversation flow and information gathering",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Understand how after-hours calls are handled seamlessly",
  },
]

export function DemoSection() {
  const [playingVoice, setPlayingVoice] = useState<number | null>(null)
  const audioRefs = useRef<{ [key: number]: HTMLAudioElement | null }>({})

  const handleVoicePlay = (voiceId: number) => {
    // Stop any currently playing audio
    Object.values(audioRefs.current).forEach((audio) => {
      if (audio && !audio.paused) {
        audio.pause()
        audio.currentTime = 0
      }
    })

    const audio = audioRefs.current[voiceId]
    if (audio) {
      if (playingVoice === voiceId) {
        audio.pause()
        audio.currentTime = 0
        setPlayingVoice(null)
      } else {
        audio.play()
        setPlayingVoice(voiceId)
      }
    }
  }

  return (
    <section id="demo" className="py-24 bg-gradient-to-br from-cyan-950/20 to-blue-950/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 heading-primary text-white">
            Listen to <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Real Estate AI Calls</span>
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto text-balance leading-relaxed text-premium font-medium">
            Hear exactly how our AI qualifies leads and books showings. No scripts, no long hold times—just real results.
          </p>
        </div>

        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {voiceSamples.map((voice) => (
              <Card
                key={voice.id}
                className="p-8 hover:shadow-lg transition-all duration-300 bg-cyan-500/10 border-cyan-400/20 hover:border-cyan-400/40 hover:shadow-cyan-500/20 glass-card"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <button
                      onClick={() => handleVoicePlay(voice.id)}
                      className="w-full h-full rounded-full flex items-center justify-center hover:bg-cyan-500/30 transition-colors"
                    >
                      {playingVoice === voice.id ? (
                        <Pause className="h-6 w-6 text-cyan-400" />
                      ) : (
                        <Volume2 className="h-6 w-6 text-cyan-400" />
                      )}
                    </button>
                  </div>
                  <h4 className="font-bold text-lg mb-2 text-white">{voice.name}</h4>
                  <p className="text-sm text-gray-300 mb-3 text-premium">{voice.description}</p>
                  <div className="text-xs text-cyan-400 font-semibold bg-cyan-500/20 px-3 py-2 rounded-full inline-block">
                    {voice.scenario}
                  </div>

                  <audio
                    ref={(el) => (audioRefs.current[voice.id] = el)}
                    onEnded={() => setPlayingVoice(null)}
                    preload="metadata"
                  >
                    <source src={voice.url} type="audio/mpeg" />
                    <source src={voice.url} type="audio/mp4" />
                    <source src={voice.url} type="audio/aac" />
                    Your browser does not support the audio element.
                  </audio>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <Card className="max-w-4xl mx-auto p-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/10 border-cyan-400/30 shadow-lg glass-card">
          <div className="text-center">
            <div className="w-24 h-24 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse-glow">
              <Phone className="h-12 w-12 text-cyan-400" />
            </div>

            <h3 className="text-3xl font-bold mb-4 text-white heading-primary">Ready to See Real Results?</h3>
            <p className="text-lg text-gray-100 mb-8 max-w-2xl mx-auto leading-relaxed text-premium font-medium">
              Watch live AI calling in action. See how qualified leads get booked automatically.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white text-lg px-8 py-4 rounded-xl font-bold shadow-2xl"
                onClick={() => document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" })}
              >
                <Phone className="mr-2 h-5 w-5" />
                Book Demo
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-4 border-cyan-400 text-cyan-400 hover:bg-cyan-500/10 bg-transparent"
              >
                Call Us
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
