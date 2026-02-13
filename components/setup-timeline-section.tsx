"use client"

import { Card } from "@/components/ui/card"
import { Check } from "lucide-react"

const timelineSteps = [
  {
    day: "Day 1",
    title: "Script Setup",
    description: "We build your custom calling scripts based on your business",
    completed: true,
  },
  {
    day: "Day 2–3",
    title: "CRM Connection",
    description: "Connect your calendar, CRM, and lead sources",
    completed: false,
  },
  {
    day: "Day 4",
    title: "Call Testing",
    description: "Test the AI with real calls to your number",
    completed: false,
  },
  {
    day: "Day 5",
    title: "Go Live",
    description: "Launch and start capturing leads automatically",
    completed: false,
  },
]

export function SetupTimelineSection() {
  return (
    <section id="timeline" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 heading-primary text-white">
            Go Live in <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">5 Days</span>
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto text-balance text-premium font-medium">
            No downtime. No technical work from you.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical line connecting timeline items */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500/50 to-blue-500/50" />

            <div className="space-y-8">
              {timelineSteps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="flex flex-col md:flex-row md:even:flex-row-reverse gap-8">
                    {/* Timeline dot */}
                    <div className="hidden md:flex md:w-1/2 md:justify-center">
                      <div className="relative z-10">
                        <div className="w-4 h-4 bg-cyan-400 rounded-full border-4 border-background" />
                      </div>
                    </div>

                    {/* Content card */}
                    <div className="md:w-1/2">
                      <Card className="p-8 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300 glass-card">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0">
                            {step.completed ? (
                              <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center">
                                <Check className="w-5 h-5 text-white" />
                              </div>
                            ) : (
                              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white font-bold">
                                {index + 1}
                              </div>
                            )}
                          </div>
                          <div className="flex-1">
                            <div className="text-sm font-semibold text-cyan-400 uppercase tracking-wide mb-1">
                              {step.day}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2 heading-primary">{step.title}</h3>
                            <p className="text-gray-200 text-premium">{step.description}</p>
                          </div>
                        </div>
                      </Card>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
