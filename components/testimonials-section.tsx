"use client"

import { Card } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Mitchell",
    business: "Mitchell Wellness Center",
    location: "Toronto, ON",
    quote:
      "Our AI receptionist has been a game-changer. We've seen a 45% increase in bookings and our staff can now focus entirely on customer service instead of managing phones.",
    rating: 5,
    results: "45% more bookings, $3,200 monthly savings",
  },
  {
    name: "James Rodriguez",
    business: "Peak Performance Solutions",
    location: "Vancouver, BC",
    quote:
      "The 24/7 availability has captured so many after-hours calls that we were missing before. The ROI was evident within the first month.",
    rating: 5,
    results: "60% after-hours conversion, 2-month ROI",
  },
  {
    name: "Emily Chen",
    business: "Wellness First Consulting",
    location: "Calgary, AB",
    quote:
      "Integration was seamless and the AI understands our specific protocols perfectly. Customers often don't realize they're speaking with AI - it's that natural.",
    rating: 5,
    results: "Zero integration downtime, 95% customer satisfaction",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            What Our Clients <span className="gradient-text">Are Saying</span>
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto text-balance font-medium">
            Real results from businesses across Canada who have transformed their operations with our AI receptionist
            solution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8 relative overflow-hidden glass-card">
              <div className="absolute top-4 right-4 opacity-10">
                <Quote className="h-16 w-16 text-white" />
              </div>

              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-warning text-warning" />
                ))}
              </div>

              <blockquote className="text-lg mb-6 relative z-10 text-gray-200 font-medium">
                "{testimonial.quote}"
              </blockquote>

              <div className="border-t border-border pt-6">
                <div className="font-semibold text-white">{testimonial.name}</div>
                <div className="text-sm text-gray-300 font-medium">{testimonial.business}</div>
                <div className="text-sm text-gray-300 font-medium">{testimonial.location}</div>
                <div className="text-sm font-semibold text-accent mt-2">{testimonial.results}</div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-accent/10 to-primary/10 border-accent/20 glass-card">
            <h3 className="text-2xl font-bold mb-6 text-white">Client Success Metrics</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">98%</div>
                <div className="text-gray-200 font-medium">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">2.3x</div>
                <div className="text-gray-200 font-medium">Average ROI</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-warning">48hrs</div>
                <div className="text-gray-200 font-medium">Average Setup Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">99.9%</div>
                <div className="text-gray-200 font-medium">System Uptime</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
