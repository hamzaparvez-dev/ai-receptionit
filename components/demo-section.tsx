"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Play, ExternalLink, Volume2, Pause, Phone, Calendar, MessageSquare, Clock } from "lucide-react"
import { useState, useRef } from "react"

const voiceSamples = [
  {
    id: 1,
    name: "Real Estate Agent",
    description: "Professional and persuasive voice for property inquiries",
    url: "https://res.cloudinary.com/dij5outes/video/upload/v1758876389/RealEstateAgents_nwtorv.mp3",
    scenario: "Property consultations",
  },
  {
    id: 2,
    name: "Physio Agent",
    description: "Caring and knowledgeable voice for healthcare services",
    url: "https://res.cloudinary.com/dij5outes/video/upload/v1758876375/Pysio-agent_suqlck.mp3",
    scenario: "Appointment scheduling",
  },
  {
    id: 3,
    name: "Marketing Agency",
    description: "Dynamic and engaging voice for creative services",
    url: "https://res.cloudinary.com/dij5outes/video/upload/v1758876368/Marketing-Agency_ronynp.mp3",
    scenario: "Client consultations",
  },
  {
    id: 4,
    name: "Legend Physio Voice",
    description: "Expert and reassuring voice for specialized treatments",
    url: "https://res.cloudinary.com/dij5outes/video/upload/v1758875710/Legend_Physio_Voice_Agent_dvxr6c.mp3",
    scenario: "Treatment inquiries",
  },
  {
    id: 5,
    name: "Professional Savannah",
    description: "Warm and professional voice for Pysiotherapy business inquiries",
    url: "https://res.cloudinary.com/dij5outes/video/upload/v1757866506/voice1_aazx8x.mp4",
    scenario: "Customer service",
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
    <section id="demo" className="py-24 bg-gradient-to-br from-green-950/20 to-emerald-950/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Experience Our AI - <span className="text-green-400">Live Demo & Voice Samples</span>
          </h2>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto text-balance leading-relaxed font-medium">
            See and hear exactly how our AI receptionist handles real customer interactions. Choose from 5 professional
            voices and watch complete call scenarios from various business types.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-white">Choose Your AI Voice</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {voiceSamples.map((voice) => (
              <Card
                key={voice.id}
                className="p-6 hover:shadow-lg transition-all duration-300 bg-green-500/10 border-green-400/20 hover:border-green-400/40 hover:shadow-green-500/20"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <button
                      onClick={() => handleVoicePlay(voice.id)}
                      className="w-full h-full rounded-full flex items-center justify-center hover:bg-green-500/30 transition-colors"
                    >
                      {playingVoice === voice.id ? (
                        <Pause className="h-6 w-6 text-green-400" />
                      ) : (
                        <Volume2 className="h-6 w-6 text-green-400" />
                      )}
                    </button>
                  </div>
                  <h4 className="font-semibold text-sm mb-2 text-white">{voice.name}</h4>
                  <p className="text-xs text-gray-200 mb-3">{voice.description}</p>
                  <div className="text-xs text-green-400 font-medium bg-green-500/20 px-2 py-1 rounded-full">
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

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-white">What You'll See in the Demo</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {demoFeatures.map((feature, index) => (
              <Card
                key={index}
                className="p-6 text-center bg-green-500/10 border-green-400/20 hover:shadow-lg transition-all duration-300 hover:border-green-400/40 hover:shadow-green-500/20"
              >
                <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-6 w-6 text-green-400" />
                </div>
                <h4 className="font-semibold mb-2 text-white">{feature.title}</h4>
                <p className="text-sm text-gray-200">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>

        <Card className="max-w-4xl mx-auto p-12 bg-gradient-to-br from-green-500/20 to-emerald-500/10 border-green-400/30 shadow-lg">
          <div className="text-center">
            <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse-glow">
              <Play className="h-12 w-12 text-green-400" />
            </div>

            <h3 className="text-3xl font-bold mb-4 text-white">Complete System Walkthrough</h3>
            <p className="text-lg text-gray-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              Watch our AI handle complete customer interactions from initial call to appointment booking. See the admin
              dashboard, real-time analytics, and integration with your business management system.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-lg px-8 py-4"
                onClick={() =>
                  window.open("https://excalidraw.com/#json=EqjgvRHBRK69-yXCGVYyR,GWI1VxddOIn8yetwBGK4Wg", "_blank")
                }
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Full System Demo
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-4 border-border hover:bg-card bg-transparent"
                onClick={() => window.open("https://calendly.com/genuinestack/new-meeting", "_blank")}
              >
                <ExternalLink className="mr-2 h-5 w-5" />
                Schedule Personal Demo
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div className="flex flex-col items-center space-y-2 p-4 bg-green-500/10 rounded-lg border border-green-400/20">
                <div className="w-3 h-3 bg-green-400 rounded-full" />
                <span className="font-medium text-white">15-minute comprehensive walkthrough</span>
                <span className="text-gray-200 text-xs">Complete system overview</span>
              </div>
              <div className="flex flex-col items-center space-y-2 p-4 bg-green-500/10 rounded-lg border border-green-400/20">
                <div className="w-3 h-3 bg-green-400 rounded-full" />
                <span className="font-medium text-white">No signup or installation required</span>
                <span className="text-gray-200 text-xs">Instant access</span>
              </div>
              <div className="flex flex-col items-center space-y-2 p-4 bg-green-500/10 rounded-lg border border-green-400/20">
                <div className="w-3 h-3 bg-green-400 rounded-full" />
                <span className="font-medium text-white">Real business scenarios</span>
                <span className="text-gray-200 text-xs">Industry-specific examples</span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
