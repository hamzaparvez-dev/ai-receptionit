"use client"

import { Card } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

const workflowSteps = [
  {
    step: "1",
    title: "Lead Comes from Zillow, Facebook, or Website",
    description: "Buyers submit inquiries through your marketing channels",
    type: "patient",
  },
  {
    step: "2",
    title: "AI Calls Within 30 Seconds",
    description: "Automatic outbound call beats all other agents to first contact",
    type: "ai",
  },
  {
    step: "3",
    title: "AI Asks Budget, Location, Timeline",
    description: "Qualifies buyer interest, property preferences, and urgency in real time",
    type: "process",
  },
  {
    step: "4",
    title: "AI Books Showing on Your Calendar",
    description: "Schedules appointment directly into your CRM and calendar system",
    type: "ai",
  },
  {
    step: "5",
    title: "SMS Confirmation Sent",
    description: "Buyer gets instant confirmation text with address, time, and agent details",
    type: "process",
  },
  {
    step: "6",
    title: "Agent Notified Instantly",
    description: "You receive real-time notification with qualified lead information ready to show",
    type: "automation",
  },
]

export function WorkflowSection() {
  return (
    <section id="solution" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 heading-primary text-white">
            How GenuineStack <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">AI Calling Works</span>
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto text-balance text-premium font-medium">
            Real-time AI calling that qualifies leads and books showings automatically.
          </p>
          <p className="text-base text-gray-400 mt-3 text-premium font-medium">Setup takes 5 days.</p>
        </div>

        <div className="max-w-4xl mx-auto">
          {workflowSteps.map((step, index) => (
            <div key={index} className="relative">
              <Card
                className={`p-8 mb-8 ${
                  step.type === "patient"
                    ? "bg-gradient-to-r from-blue-500/10 to-blue-600/10 border-blue-500/20"
                    : step.type === "ai"
                      ? "bg-gradient-to-r from-accent/10 to-accent/5 border-accent/20"
                      : step.type === "process"
                        ? "bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20"
                        : "bg-gradient-to-r from-warning/10 to-warning/5 border-warning/20"
                }`}
              >
                <div className="flex items-start space-x-6">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${
                      step.type === "patient"
                        ? "bg-blue-500 text-white"
                        : step.type === "ai"
                          ? "bg-accent text-white"
                          : step.type === "process"
                            ? "bg-primary text-white"
                            : "bg-warning text-white"
                    }`}
                  >
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </Card>

              {index < workflowSteps.length - 1 && (
                <div className="flex justify-center mb-8">
                  <ArrowRight className="h-6 w-6 text-muted-foreground" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
