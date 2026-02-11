"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Calendar, Phone, CheckCircle } from "lucide-react"

export function CTASection() {
  return (
    <section id="cta" className="py-24 bg-gradient-to-br from-primary/10 via-background to-accent/10">
      <div className="max-w-7xl mx-auto px-6">
        <Card className="max-w-4xl mx-auto p-12 bg-gradient-to-br from-card to-card/80 border-primary/20 glass-card">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Transform <span className="gradient-text">Your Business?</span>
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto text-balance font-medium">
              Join hundreds of businesses that have revolutionized their operations with our AI receptionist. Start your
              transformation today.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-lg px-8 py-4 animate-pulse-glow font-semibold"
                onClick={() => window.open("https://calendly.com/genuinestack/new-meeting", "_blank")}
              >
                <Calendar className="mr-2 h-5 w-5" />
                Book Your Free Demo
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-4 border-border hover:bg-card bg-transparent text-white font-semibold"
                onClick={() => window.open("tel:+1-555-0123", "_blank")}
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Us Now
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center space-x-2 text-accent">
                <CheckCircle className="h-5 w-5" />
                <span className="font-semibold">30-day free trial</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-accent">
                <CheckCircle className="h-5 w-5" />
                <span className="font-semibold">No setup fees</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-accent">
                <CheckCircle className="h-5 w-5" />
                <span className="font-semibold">Cancel anytime</span>
              </div>
            </div>

            <div className="border-t border-border pt-8">
              <p className="text-gray-200 mb-4 font-medium">
                Powered by{" "}
                <a
                  href="https://genuinestack.com/"
                  target="_blank"
                  className="text-primary hover:underline font-semibold"
                  rel="noreferrer"
                >
                  GenuineStack
                </a>{" "}
                - Leading AI Automation Solutions
              </p>
              <p className="text-sm text-gray-300 font-medium">Trusted by 500+ businesses across North America</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
