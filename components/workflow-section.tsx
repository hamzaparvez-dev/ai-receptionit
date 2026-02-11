"use client"

import { Card } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

const workflowSteps = [
  {
    step: "1",
    title: "Patient Calls",
    description: '"Hi, I need to book a physiotherapy appointment for my back pain"',
    type: "patient",
  },
  {
    step: "2",
    title: "AI Responds",
    description:
      "\"I'd be happy to help you book an appointment. Can you tell me about your back pain and when you'd prefer to come in?\"",
    type: "ai",
  },
  {
    step: "3",
    title: "AI Qualifies",
    description: "Asks about injury type, insurance, urgency, and availability preferences",
    type: "process",
  },
  {
    step: "4",
    title: "Smart Scheduling",
    description:
      '"I have Thursday at 2 PM with Dr. Smith who specializes in back injuries. Shall I book that for you?"',
    type: "ai",
  },
  {
    step: "5",
    title: "Confirmation",
    description: "Books appointment, sends confirmation text/email, adds to your calendar system",
    type: "process",
  },
  {
    step: "6",
    title: "Follow-up",
    description: "Sends appointment reminders and intake forms before visit",
    type: "automation",
  },
]

export function WorkflowSection() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            How It Works - <span className="gradient-text">Step by Step</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Follow a real patient interaction from initial call to completed booking. See how our AI handles complex
            scenarios with human-like intelligence.
          </p>
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
