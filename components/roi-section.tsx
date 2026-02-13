"use client"

import { Card } from "@/components/ui/card"
import { TrendingUp, DollarSign, Clock, Users } from "lucide-react"

export function ROISection() {
  return (
    <section id="roi" className="py-24 bg-gradient-to-br from-cyan-950/20 to-blue-950/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 heading-primary text-white">
            See the <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Real ROI</span> for Your Real Estate Team
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto text-balance leading-relaxed text-premium font-medium">
            Real estate is a numbers game. See exactly how AI calling impacts your bottom line.
          </p>
        </div>

        <Card className="max-w-4xl mx-auto p-10 bg-gradient-to-br from-cyan-500/20 to-blue-500/10 border-cyan-400/30 shadow-lg glass-card mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-white mb-6 heading-primary">Real Estate Team Example</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <div className="text-base text-gray-300 mb-2 font-medium">Monthly lead volume:</div>
                <div className="text-3xl font-bold text-cyan-400 mb-4">40 leads per month</div>
                
                <div className="text-base text-gray-300 mb-2 font-medium mt-6">Response time without AI:</div>
                <div className="text-lg text-gray-200 mb-4 font-semibold">12 missed leads, beaten by other agents</div>
                
                <div className="text-base text-gray-300 mb-2 font-medium">Deals lost:</div>
                <div className="text-3xl font-bold text-red-400">2 deals lost</div>
                <div className="text-sm text-gray-400 mt-1">@ $5,000 average commission</div>
              </div>
              
              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <div className="text-base text-gray-300 mb-2 font-medium">Annual loss:</div>
                <div className="text-4xl font-bold text-red-400 mb-6">$120,000</div>
                
                <div className="text-base text-gray-300 mb-2 font-medium mt-6">With GenuineStack:</div>
                <div className="text-lg text-gray-200 mb-4 font-semibold">10 extra qualified leads booked</div>
                
                <div className="text-base text-gray-300 mb-2 font-medium">Deals closed:</div>
                <div className="text-3xl font-bold text-cyan-400">+5 extra deals</div>
              </div>
            </div>
          </div>
        </Card>

        <Card className="max-w-4xl mx-auto p-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/10 border-cyan-400/30 shadow-xl glass-card">
          <h3 className="text-3xl font-bold text-center mb-8 text-white heading-primary">Annual ROI Calculation</h3>

          <div className="bg-cyan-500/20 border border-cyan-400/30 rounded-xl p-8 mb-8 text-center">
            <div className="text-5xl font-bold text-cyan-400 mb-2">$25,000+</div>
            <div className="text-xl text-white font-semibold heading-primary">Annual Revenue Gain</div>
            <div className="text-cyan-300 font-medium mt-2">From 5 extra closed deals per year</div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="bg-red-500/10 border border-red-400/20 rounded-xl p-8">
              <h4 className="text-xl font-semibold mb-6 text-red-400 text-center heading-primary">Without AI (Monthly)</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-red-400/20">
                  <span className="text-gray-300">Lost leads per month</span>
                  <span className="font-bold text-red-400">12 leads</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-red-400/20">
                  <span className="text-gray-300">Deals lost per month</span>
                  <span className="font-bold text-red-400">2 deals</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-300">Revenue lost</span>
                  <span className="font-bold text-red-400">$10,000</span>
                </div>
              </div>
            </div>

            <div className="bg-cyan-500/10 border border-cyan-400/20 rounded-xl p-8">
              <h4 className="text-xl font-semibold mb-6 text-cyan-400 text-center heading-primary">With GenuineStack (Monthly)</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-cyan-400/20">
                  <span className="text-gray-300">AI Service Cost</span>
                  <span className="font-bold text-white">$600</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-cyan-400/20">
                  <span className="text-gray-300">Extra deals booked</span>
                  <span className="font-bold text-cyan-400">+3-5 deals</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-300">Net revenue gain</span>
                  <span className="font-bold text-cyan-400">+$3,900</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 rounded-xl p-8">
            <p className="text-gray-200 text-lg mb-4 text-premium font-medium">
              Assume 40 leads/month, 5% close rate, $5,000 avg commission
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-bold text-cyan-400 mb-2">$25,200</div>
                <div className="text-white font-semibold heading-primary">Annual Revenue Gain</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-cyan-400 mb-2">$7,200</div>
                <div className="text-white font-semibold heading-primary">Annual AI Cost</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-cyan-400 mb-2">$18,000</div>
                <div className="text-white font-semibold heading-primary">Net Annual Profit</div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
