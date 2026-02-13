"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check } from "lucide-react"

const pricingPlans = [
  {
    name: "Starter",
    setupFee: "$1,000",
    monthlyFee: "$600",
    description: "Perfect for real estate teams and small groups",
    highlighted: true,
    features: [
      "AI calling for up to 500 leads/month",
      "Automatic lead qualification",
      "Calendar integration (Google, Outlook)",
      "SMS confirmations",
      "24/7 availability",
      "Real-time notifications",
    ],
  },
  {
    name: "Agency",
    setupFee: "$1,500",
    monthlyFee: "$900",
    description: "For larger teams and agencies",
    highlighted: false,
    features: [
      "Everything in Starter, plus:",
      "Up to 2,000 leads/month",
      "Priority support",
      "Custom call scripts",
      "Team collaboration tools",
      "Advanced analytics",
      "CRM API access",
    ],
  },
  {
    name: "Enterprise",
    setupFee: "Custom",
    monthlyFee: "Custom",
    description: "For high-volume operations",
    highlighted: false,
    features: [
      "Everything in Agency, plus:",
      "Unlimited leads/month",
      "Dedicated account manager",
      "White-label options",
      "Custom integrations",
      "SLA guarantee",
      "Priority feature requests",
    ],
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 bg-card/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 heading-primary text-white">
            Simple <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Pricing</span> for Real Estate Teams
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto text-balance text-premium font-medium">
            No long contracts. Cancel anytime. Pay as you grow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-8">
          {pricingPlans.map((plan, index) => (
            <Card
              key={index}
              className={`p-8 relative transition-all duration-300 ${
                plan.highlighted
                  ? "border-cyan-400/50 shadow-2xl shadow-cyan-500/20 scale-105 bg-gradient-to-br from-cyan-500/20 to-blue-500/10"
                  : "border-white/10 hover:border-white/20 bg-white/5"
              } glass-card`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold text-white mb-2 heading-primary">{plan.name}</h3>
              <p className="text-gray-300 text-sm mb-6 text-premium">{plan.description}</p>

              <div className="mb-8">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl font-bold text-cyan-400">{plan.monthlyFee}</span>
                  <span className="text-gray-400 text-sm">/month</span>
                </div>
                <p className="text-gray-400 text-sm">Setup: {plan.setupFee}</p>
              </div>

              <Button
                className={`w-full mb-8 font-bold rounded-xl py-2 ${
                  plan.highlighted
                    ? "bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white shadow-lg"
                    : "bg-white/10 hover:bg-white/20 text-white border border-white/20"
                }`}
                onClick={() => document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" })}
              >
                Book Demo
              </Button>

              <div className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-200 text-sm text-premium">{feature}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/20 rounded-2xl p-8 max-w-4xl mx-auto glass-card">
          <p className="text-gray-100 text-lg text-premium font-medium">
            <span className="text-cyan-400 font-bold">Usage pricing</span> applies beyond included limits. Transparent, no hidden fees.
          </p>
        </div>
      </div>
    </section>
  )
}
