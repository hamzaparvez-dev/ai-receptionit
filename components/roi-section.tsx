"use client"

import { Card } from "@/components/ui/card"
import { TrendingUp, DollarSign, Clock, Users } from "lucide-react"

export function ROISection() {
  return (
    <section id="roi" className="py-24 bg-gradient-to-br from-blue-950/20 to-indigo-950/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Return on Investment - <span className="text-blue-400">Real Numbers</span>
          </h2>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto text-balance leading-relaxed font-medium">
            See the concrete financial impact our AI receptionist delivers to businesses. These numbers are based on
            real client data and industry benchmarks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <Card className="p-8 text-center bg-gradient-to-br from-green-500/20 to-emerald-500/10 border-green-400/30 shadow-lg hover:shadow-green-500/20 transition-all duration-300">
            <TrendingUp className="h-12 w-12 text-green-400 mx-auto mb-4" />
            <div className="text-4xl font-bold text-green-400 mb-2">40%</div>
            <div className="text-white font-semibold">More Bookings</div>
            <div className="text-sm text-green-300 mt-2 font-medium">+$2,000/month average</div>
          </Card>

          <Card className="p-8 text-center bg-gradient-to-br from-blue-500/20 to-cyan-500/10 border-blue-400/30 shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
            <DollarSign className="h-12 w-12 text-blue-400 mx-auto mb-4" />
            <div className="text-4xl font-bold text-blue-400 mb-2">$2,500</div>
            <div className="text-white font-semibold">Monthly Savings</div>
            <div className="text-sm text-blue-300 mt-2 font-medium">vs. full-time staff</div>
          </Card>

          <Card className="p-8 text-center bg-gradient-to-br from-yellow-500/20 to-orange-500/10 border-yellow-400/30 shadow-lg hover:shadow-yellow-500/20 transition-all duration-300">
            <Clock className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
            <div className="text-4xl font-bold text-yellow-400 mb-2">24/7</div>
            <div className="text-white font-semibold">Availability</div>
            <div className="text-sm text-yellow-300 mt-2 font-medium">Never miss a call</div>
          </Card>

          <Card className="p-8 text-center bg-gradient-to-br from-purple-500/20 to-pink-500/10 border-purple-400/30 shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
            <Users className="h-12 w-12 text-purple-400 mx-auto mb-4" />
            <div className="text-4xl font-bold text-purple-400 mb-2">90%</div>
            <div className="text-white font-semibold">Cost Reduction</div>
            <div className="text-sm text-purple-300 mt-2 font-medium">vs. traditional staffing</div>
          </Card>
        </div>

        <Card className="max-w-5xl mx-auto p-12 bg-gradient-to-br from-blue-500/20 to-green-500/10 border-blue-400/30 shadow-xl">
          <h3 className="text-3xl font-bold text-center mb-8 text-white">12-Month Financial Impact</h3>

          <div className="bg-green-500/20 border border-green-400/30 rounded-xl p-6 mb-8 text-center">
            <div className="text-5xl font-bold text-green-400 mb-2">$98,000</div>
            <div className="text-xl text-white font-semibold">Net Annual Benefit</div>
            <div className="text-green-300 font-medium">ROI: 1,633% • Break-even in 2 months</div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-red-500/10 border border-red-400/20 rounded-xl p-8">
              <h4 className="text-xl font-semibold mb-6 text-red-400 text-center">❌ Current Costs (Annual)</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-red-400/20">
                  <span className="text-gray-200">Reception Staff Salary</span>
                  <span className="font-bold text-red-400">$35,000</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-red-400/20">
                  <span className="text-gray-200">Benefits & Training</span>
                  <span className="font-bold text-red-400">$15,000</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-red-400/20">
                  <span className="text-gray-200">Lost Revenue (Missed Calls)</span>
                  <span className="font-bold text-red-400">$18,000</span>
                </div>
                <div className="border-t-2 border-red-400/40 pt-4 mt-6">
                  <div className="flex justify-between text-xl font-bold text-red-400 bg-red-500/10 p-3 rounded-lg">
                    <span>Total Annual Cost</span>
                    <span>$68,000</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-green-500/10 border border-green-400/20 rounded-xl p-8">
              <h4 className="text-xl font-semibold mb-6 text-green-400 text-center">
                ✅ With AI Receptionist (Annual)
              </h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-green-400/20">
                  <span className="text-gray-200">AI Service Cost</span>
                  <span className="font-bold text-white">$6,000</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-green-400/20">
                  <span className="text-gray-200">Additional Revenue</span>
                  <span className="font-bold text-green-400">+$24,000</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-green-400/20">
                  <span className="text-gray-200">Efficiency Gains</span>
                  <span className="font-bold text-green-400">+$12,000</span>
                </div>
                <div className="border-t-2 border-green-400/40 pt-4 mt-6">
                  <div className="flex justify-between text-xl font-bold text-green-400 bg-green-500/10 p-3 rounded-lg">
                    <span>Net Annual Benefit</span>
                    <span>+$98,000</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center bg-gradient-to-r from-blue-500/20 to-green-500/20 border border-blue-400/30 rounded-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-2">1,633%</div>
                <div className="text-white font-semibold">Return on Investment</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400 mb-2">2 Months</div>
                <div className="text-white font-semibold">Break-even Period</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-400 mb-2">$8,167</div>
                <div className="text-white font-semibold">Monthly Net Benefit</div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
