"use client"

import { Card } from "@/components/ui/card"

const integrations = [
  { name: "Zillow", category: "Lead Source" },
  { name: "Facebook Ads", category: "Lead Source" },
  { name: "FollowUpBoss", category: "CRM" },
  { name: "GoHighLevel", category: "CRM" },
  { name: "HubSpot", category: "CRM" },
  { name: "Google Calendar", category: "Calendar" },
  { name: "Outlook", category: "Calendar" },
  { name: "Zapier", category: "Automation" },
]

export function IntegrationsSection() {
  return (
    <section id="integrations" className="py-24 bg-card/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 heading-primary text-white">
            Works With Your <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Real Estate Tools</span>
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto text-balance text-premium font-medium">
            Seamless integration with your existing tools and workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
          {integrations.map((integration, index) => (
            <Card
              key={index}
              className="p-6 text-center bg-gradient-to-br from-white/5 to-white/[2%] border-white/10 hover:border-cyan-400/40 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 glass-card"
            >
              <div className="text-sm text-cyan-400 font-semibold mb-2 uppercase tracking-wide">
                {integration.category}
              </div>
              <h3 className="text-lg font-bold text-white heading-primary">{integration.name}</h3>
            </Card>
          ))}
        </div>

        <div className="text-center bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/20 rounded-2xl p-8 max-w-3xl mx-auto glass-card">
          <p className="text-gray-200 text-lg text-premium font-medium">
            <span className="text-cyan-400 font-bold">Custom CRM integration</span> available for your specific needs.
          </p>
        </div>
      </div>
    </section>
  )
}
