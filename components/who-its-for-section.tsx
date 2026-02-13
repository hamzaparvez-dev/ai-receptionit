"use client"

import { Card } from "@/components/ui/card"
import { Users, Building2, Home } from "lucide-react"

const targetSegments = [
  {
    icon: Users,
    title: "Real Estate Teams",
    description: "5–25 agents looking to scale without adding staff",
    details: ["Brokerage teams", "Independent agent networks", "Small to mid-size brokers"],
  },
  {
    icon: Building2,
    title: "Investor Wholesalers",
    description: "Volume buyers and off-market deal finders",
    details: ["Fix & flip operations", "Wholesale flippers", "Off-market specialists"],
  },
  {
    icon: Home,
    title: "Property Managers",
    description: "Managing tenant inquiries and maintenance requests",
    details: ["Residential management", "Commercial management", "Multi-unit operators"],
  },
]

export function WhoItsForSection() {
  return (
    <section id="for-who" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 heading-primary text-white">
            Who This Is <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">For</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {targetSegments.map((segment, index) => (
            <Card
              key={index}
              className="p-8 text-center bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300 glass-card hover:shadow-lg hover:shadow-cyan-500/20"
            >
              <div className="w-16 h-16 bg-cyan-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <segment.icon className="h-8 w-8 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 heading-primary">{segment.title}</h3>
              <p className="text-gray-200 text-lg mb-6 text-premium font-medium">{segment.description}</p>
              
              <ul className="space-y-2">
                {segment.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="text-gray-300 text-sm text-premium">
                    • {detail}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        <div className="text-center bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-400/20 rounded-2xl p-8 max-w-3xl mx-auto glass-card">
          <h3 className="text-2xl font-bold text-red-400 mb-3 heading-primary">Not For Single-Agent Hobbyists</h3>
          <p className="text-gray-200 text-premium font-medium">
            We're built for serious real estate professionals who value their time and want to scale.
          </p>
        </div>
      </div>
    </section>
  )
}
