"use client"

import { useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"
import { PhoneOff, Clock, DollarSign, Calendar, Moon, Frown } from "lucide-react"

const problems = [
  {
    icon: PhoneOff,
    title: "Missed Calls = Lost Revenue",
    description: "30% of calls go unanswered during busy hours, meetings, or after closing time",
    impact: "$15,000+ annual revenue loss",
  },
  {
    icon: Clock,
    title: "Staff Overwhelmed",
    description: "Reception staff juggling phones, scheduling, and customer service simultaneously",
    impact: "Reduced customer satisfaction",
  },
  {
    icon: DollarSign,
    title: "High Operational Costs",
    description: "Paying full-time reception staff $35K+ annually plus benefits and training",
    impact: "$50,000+ total annual cost",
  },
  {
    icon: Calendar,
    title: "Booking Inefficiencies",
    description: "Manual scheduling leads to double bookings, no-shows, and poor time management",
    impact: "20% scheduling errors",
  },
  {
    icon: Moon,
    title: "After-Hours Losses",
    description: "Zero availability for urgent inquiries during evenings, weekends, and holidays",
    impact: "40% of calls after hours",
  },
  {
    icon: Frown,
    title: "Customer Frustration",
    description: "Long hold times and busy signals drive potential customers to competitors",
    impact: "25% customer churn rate",
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
            The Problems <span className="text-destructive">Costing You Money</span>
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto text-balance text-premium font-medium">
            Every missed call, scheduling error, and after-hours inquiry represents lost revenue and frustrated
            customers choosing your competitors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <Card
              key={index}
              className="problem-card opacity-100 p-8 bg-gradient-to-br from-destructive/10 to-destructive/5 border-destructive/20 hover:border-destructive/40 transition-all duration-300 hover:scale-105 glass-card"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-destructive/20 rounded-lg flex items-center justify-center">
                  <problem.icon className="h-6 w-6 text-destructive" />
                </div>
                <h3 className="text-xl font-semibold heading-primary text-white">{problem.title}</h3>
              </div>
              <p className="text-gray-200 mb-4 text-premium font-medium">{problem.description}</p>
              <div className="text-sm font-semibold text-destructive bg-destructive/10 px-3 py-1 rounded-full inline-block">
                {problem.impact}
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-destructive/10 border border-destructive/20 rounded-2xl p-8 max-w-4xl mx-auto glass-card">
            <h3 className="text-2xl font-bold mb-4 text-destructive heading-primary">Total Annual Impact</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-bold text-destructive">$65,000+</div>
                <div className="text-gray-200 text-premium font-medium">Lost Revenue</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-destructive">500+</div>
                <div className="text-gray-200 text-premium font-medium">Missed Opportunities</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-destructive">25%</div>
                <div className="text-gray-200 text-premium font-medium">Customer Churn</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
