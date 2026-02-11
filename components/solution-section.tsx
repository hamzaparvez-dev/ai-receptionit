"use client"

import { useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"
import { CheckCircle, Bot, MessageSquare, Database, TrendingUp, RefreshCw } from "lucide-react"

const solutions = [
  {
    icon: CheckCircle,
    title: "100% Call Capture",
    description: "Never miss a customer call again - AI answers instantly, 24/7/365",
    benefit: "Capture every opportunity",
  },
  {
    icon: Bot,
    title: "Smart Booking System",
    description: "Automated scheduling based on your availability, services, and customer preferences",
    benefit: "Zero scheduling conflicts",
  },
  {
    icon: MessageSquare,
    title: "Intelligent Conversations",
    description: "Natural language processing handles complex customer inquiries professionally",
    benefit: "Human-like interactions",
  },
  {
    icon: Database,
    title: "Instant Integration",
    description: "Seamlessly connects with your existing business management software",
    benefit: "No workflow disruption",
  },
  {
    icon: TrendingUp,
    title: "Lead Qualification",
    description: "AI pre-screens customers, collects information, and prioritizes urgent inquiries",
    benefit: "Higher quality leads",
  },
  {
    icon: RefreshCw,
    title: "Smart Follow-ups",
    description: "Automated appointment reminders and rescheduling reduce no-show rates by 40%",
    benefit: "Improved attendance",
  },
]

export function SolutionSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll(".solution-card")
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add("animate-fade-in-up")
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
      const cards = document.querySelectorAll(".solution-card")
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
    <section id="solution" ref={sectionRef} className="py-24 bg-gradient-to-br from-green-950/30 to-emerald-950/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display text-pretty text-white">
            Our AI Solution <span className="text-green-400">Delivers Results</span>
          </h2>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto text-balance leading-relaxed font-medium">
            Transform every challenge into an opportunity with our intelligent AI receptionist that works around the
            clock to grow your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <Card
              key={index}
              className="solution-card opacity-100 p-8 bg-gradient-to-br from-green-500/20 to-emerald-500/10 border-green-400/30 hover:border-green-400/50 transition-all duration-300 hover:scale-105 backdrop-blur-sm shadow-lg hover:shadow-green-500/20"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-green-500/30 rounded-lg flex items-center justify-center">
                  <solution.icon className="h-6 w-6 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold font-display text-white">{solution.title}</h3>
              </div>
              <p className="text-gray-100 mb-4 leading-relaxed font-medium">{solution.description}</p>
              <div className="text-sm font-semibold text-green-400 bg-green-500/20 px-3 py-1 rounded-full inline-block">
                {solution.benefit}
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-green-500/20 border border-green-400/30 rounded-2xl p-8 max-w-4xl mx-auto shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-green-400">Transformation Results</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-bold text-green-400">+40%</div>
                <div className="text-gray-100 font-medium">More Bookings</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400">-90%</div>
                <div className="text-gray-100 font-medium">Operational Costs</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400">100%</div>
                <div className="text-gray-100 font-medium">Availability</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
