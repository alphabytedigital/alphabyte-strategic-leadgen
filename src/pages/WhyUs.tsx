import { useState } from 'react';
import AnimatedBackground from '@/components/AnimatedBackground';
import Navigation from '@/components/Navigation';
import BookingModal from '@/components/BookingModal';
import { Shield, TrendingUp, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const WhyUs = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      <Navigation onBookingClick={() => setIsBookingModalOpen(true)} />
      
      <main className="relative z-10 pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="glass-card p-12 mb-16 hover-lift">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
              The AlphaByte <span className="text-primary">Advantage</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 max-w-4xl">
              We are more than a vendor; we are your partner. Our success is built on optimizing your costs, 
              integrating seamlessly with your team, and empowering your growth. We handle the complexities 
              so you can focus on what you do best.
            </p>
          </div>

          {/* Core Differentiators */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="glass-card p-8 hover-lift">
              <div className="mb-6">
                <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                Cost Optimization, Not Just Cost Cutting
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                We don't just offshore; we re-engineer your operations for maximum efficiency. Our model delivers 
                50-70% cost reductions while simultaneously elevating service quality and response times.
              </p>
            </div>

            <div className="glass-card p-8 hover-lift">
              <div className="mb-6">
                <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center">
                  <Users className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                Seamless Integration, Not Just Outsourcing
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                Our team becomes your team. We use your systems, your workflows, your brand voice. Your customers 
                and employees won't know the difference—they'll just experience exceptional support.
              </p>
            </div>

            <div className="glass-card p-8 hover-lift">
              <div className="mb-6">
                <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                Partnership-Based Growth Model
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                We align our incentives with your success. Our flexible engagement model scales precisely with 
                your business, ensuring you only pay for the capacity you need, when you need it.
              </p>
            </div>
          </div>

          {/* Our Philosophy */}
          <div className="glass-card p-12 mb-16 hover-lift">
            <h2 className="text-4xl font-bold mb-8 text-foreground">
              Our <span className="text-primary">Philosophy</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground">
                  Strategic Extension, Not Vendor
                </h3>
                <p className="text-foreground/70 leading-relaxed mb-6">
                  We believe in true partnership. Our team doesn't just execute tasks—we actively contribute to 
                  your strategy, offer insights, and drive continuous improvement. We succeed when you succeed.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground">
                  Technology-First Approach
                </h3>
                <p className="text-foreground/70 leading-relaxed mb-6">
                  We leverage cutting-edge tools, automation, and AI-driven workflows to deliver superior results. 
                  Our investment in technology ensures we stay ahead of industry standards.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground">
                  Quality Over Quantity
                </h3>
                <p className="text-foreground/70 leading-relaxed mb-6">
                  We hire and train the best talent, creating career paths and professional development opportunities. 
                  Our low attrition rate means your operations benefit from experienced, dedicated professionals.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground">
                  Transparent & Agile
                </h3>
                <p className="text-foreground/70 leading-relaxed mb-6">
                  Real-time dashboards, weekly reviews, and open communication channels ensure you always have 
                  visibility. We adapt quickly to your changing needs, pivoting our operations as your business evolves.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="glass-card p-12 text-center hover-lift">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Ready to <span className="text-primary">Transform</span> Your Operations?
            </h2>
            <p className="text-xl text-foreground/80 mb-8 max-w-3xl mx-auto">
              Let's discuss how a strategic partnership with AlphaByte can empower your business to achieve 
              its next stage of growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setIsBookingModalOpen(true)}
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-all shadow-red-glow"
              >
                Book Your Discovery Call
                <ArrowRight className="w-5 h-5" />
              </button>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 glass-card text-foreground rounded-lg font-semibold hover:border-primary transition-all"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </main>

      <BookingModal 
        open={isBookingModalOpen}
        onOpenChange={setIsBookingModalOpen}
      />
    </div>
  );
};

export default WhyUs;
