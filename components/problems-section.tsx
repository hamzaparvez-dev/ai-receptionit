"use client"

import { useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"
import { PhoneOff, Clock, DollarSign, Calendar, Moon, Frown } from "lucide-react"

const problems = [
  {
    icon: PhoneOff,
    title: "Agents Call Leads After 10–30 Minutes",
    description: "Response time is critical. Zillow leads called by 5 other agents before you.",
    impact: "Lost deals",
  },
  {
    icon: Clock,
    title: "Zillow Leads Contacted by 5 Agents",
    description: "You're competing against other agents. First contact wins.",
    impact: "Lower close rates",
  },
  {
    icon: Moon,
    title: "Missed Calls After Hours",
    description: "Buyers call at night and weekends. No one answers. They go to competitors.",
    impact: "40% of leads lost",
  },
  {
    icon: Calendar,
    title: "No Qualification Before Booking",
    description: "Agents waste time on unqualified leads who don't show up or aren't serious.",
    impact: "20% no-show rate",
  },
]

export function ProblemsSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll(".problem-card")
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add("animate-fade-in-up")
                card.classList.remove("opacity-0")
                card.classList.add("opacity-100")
              }, index * 100)
            })
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    const fallbackTimer = setTimeout(() => {
      const cards = document.querySelectorAll(".problem-card")
      cards.forEach((card) => {
        card.classList.remove("opacity-0")
        card.classList.add("opacity-100")
      })
    }, 500)

    return () => {
      observer.disconnect()
      clearTimeout(fallbackTimer)
    }
  }, [])

  return (
    <section id="problems" ref={sectionRef} className="py-24 bg-card/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 heading-primary text-white">
            Why Real Estate <span className="text-cyan-400">Leads Go Cold</span>
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto text-balance text-premium font-medium">
            Speed matters in real estate. Every minute you wait is a missed opportunity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {problems.map((problem, index) => (
            <Card
              key={index}
              className="problem-card opacity-100 p-8 bg-gradient-to-br from-red-500/10 to-red-500/5 border-red-500/20 hover:border-red-500/40 transition-all duration-300 hover:scale-105 glass-card"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center">
                  <problem.icon className="h-6 w-6 text-red-400" />
                </div>
                <h3 className="text-xl font-semibold heading-primary text-white">{problem.title}</h3>
              </div>
              <p className="text-gray-200 mb-4 text-premium font-medium">{problem.description}</p>
              <div className="text-sm font-semibold text-red-400 bg-red-500/10 px-3 py-1 rounded-full inline-block">
                {problem.impact}
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-8 max-w-2xl mx-auto glass-card">
            <h3 className="text-2xl font-bold mb-4 text-red-400 heading-primary">Result: Lost Deals Every Week</h3>
            <p className="text-gray-100 text-lg text-premium font-semibold">
              The cost of slow response times adds up quickly in real estate.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
