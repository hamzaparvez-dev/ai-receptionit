"use client"

import { Card } from "@/components/ui/card"
import { Brain, Shield, Zap, Globe, Database, Headphones } from "lucide-react"

const technologies = [
  {
    icon: Brain,
    title: "Advanced NLP",
    description: "Natural Language Processing understands context, intent, and medical terminology",
    features: ["Context awareness", "Medical vocabulary", "Multi-language support"],
  },
  {
    icon: Shield,
    title: "HIPAA Compliant",
    description: "Enterprise-grade security ensures patient data protection and regulatory compliance",
    features: ["End-to-end encryption", "Audit trails", "Compliance monitoring"],
  },
  {
    icon: Zap,
    title: "Real-time Processing",
    description: "Lightning-fast response times with cloud-based infrastructure and edge computing",
    features: ["<200ms response", "99.9% uptime", "Auto-scaling"],
  },
  {
    icon: Globe,
    title: "Multi-channel Integration",
    description: "Seamlessly handles phone calls, web chat, SMS, and email communications",
    features: ["Unified inbox", "Cross-platform sync", "API integrations"],
  },
  {
    icon: Database,
    title: "Smart Data Management",
    description: "Intelligent patient data organization with automated insights and reporting",
    features: ["Patient profiles", "Appointment history", "Analytics dashboard"],
  },
  {
    icon: Headphones,
    title: "24/7 Monitoring",
    description: "Continuous system monitoring with human oversight for complex cases",
    features: ["Live monitoring", "Escalation protocols", "Quality assurance"],
  },
]

export function TechnologySection() {
  return (
    <section className="py-24 bg-card/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Powered by <span className="gradient-text">Cutting-Edge Technology</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Our AI receptionist leverages the latest advances in artificial intelligence, natural language processing,
            and healthcare technology to deliver exceptional results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <Card key={index} className="p-8 hover:scale-105 transition-all duration-300">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <tech.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{tech.title}</h3>
              </div>
              <p className="text-muted-foreground mb-6">{tech.description}</p>
              <ul className="space-y-2">
                {tech.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
