"use client"

import { Card } from "@/components/ui/card"
import { Rocket, Target, Smartphone, Shield, BarChart, Settings } from "lucide-react"

const benefits = [
  {
    icon: Rocket,
    title: "Instant Setup",
    description: "Live in 48 hours with zero downtime",
    details: "Our team handles complete integration with your existing systems",
  },
  {
    icon: Target,
    title: "Higher Conversion",
    description: "Convert 85% more calls to bookings",
    details: "AI qualification ensures only serious patients get scheduled",
  },
  {
    icon: Smartphone,
    title: "Multi-Channel",
    description: "Handles calls, texts, and web chats",
    details: "Unified communication across all patient touchpoints",
  },
  {
    icon: Shield,
    title: "HIPAA Compliant",
    description: "Fully secure patient data handling",
    details: "Enterprise-grade security with audit trails and compliance monitoring",
  },
  {
    icon: BarChart,
    title: "Detailed Analytics",
    description: "Track performance and optimize",
    details: "Real-time dashboards with actionable insights and reporting",
  },
  {
    icon: Settings,
    title: "Custom Training",
    description: "AI learns your specific protocols",
    details: "Tailored to your practice's unique processes and terminology",
  },
]

export function BenefitsSection() {
  return (
    <section className="py-24 bg-card/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Key Benefits for <span className="gradient-text">Your Practice</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Beyond cost savings and increased revenue, our AI receptionist delivers operational excellence that
            transforms how your practice operates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="p-8 hover:scale-105 transition-all duration-300 group">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <benefit.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold">{benefit.title}</h3>
              </div>
              <p className="text-lg font-medium mb-4">{benefit.description}</p>
              <p className="text-muted-foreground text-sm">{benefit.details}</p>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
            <h3 className="text-2xl font-bold mb-4">Implementation Timeline</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-2 text-white font-bold">
                  1
                </div>
                <div className="font-semibold">Day 1</div>
                <div className="text-sm text-muted-foreground">Initial consultation</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-2 text-white font-bold">
                  2
                </div>
                <div className="font-semibold">Week 1</div>
                <div className="text-sm text-muted-foreground">System integration</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-2 text-white font-bold">
                  3
                </div>
                <div className="font-semibold">Week 2</div>
                <div className="text-sm text-muted-foreground">AI training & testing</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-2 text-white font-bold">
                  4
                </div>
                <div className="font-semibold">Go Live</div>
                <div className="text-sm text-muted-foreground">Full deployment</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
