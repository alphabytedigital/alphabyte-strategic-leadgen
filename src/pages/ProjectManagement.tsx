import { useState } from 'react';
import Navigation from '@/components/Navigation';
import AnimatedBackground from '@/components/AnimatedBackground';
import BookingModal from '@/components/BookingModal';
import Footer from '@/components/Footer';
import { CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProjectManagement = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const features = [
    'Certified Project Managers (PMP, Agile): Access to expert talent without the long-term overhead.',
    'End-to-End Project Lifecycle Management: From scope definition to final delivery.',
    'Vendor & Stakeholder Coordination: A single point of contact to keep everyone aligned.',
    'Risk Management & Mitigation: Proactive identification and handling of project risks.',
    'Detailed Project Planning & Tracking: Clear timelines, milestones, and budget oversight.',
    'Regular Status Reporting: Keeping your leadership informed with transparent progress updates.',
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <AnimatedBackground />
      <Navigation onBookingClick={() => setIsBookingOpen(true)} />
      
      <main className="relative z-10 pt-24 pb-20">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Hero Section */}
          <div className="glass-card rounded-2xl p-12 mb-12 drift-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gradient-red">
              Remote Project Management
            </h1>
            <p className="text-3xl text-foreground/90 font-light">
              Driving Your Global IT Initiatives to Success.
            </p>
          </div>

          {/* Challenge Section */}
          <div className="glass-card rounded-2xl p-10 mb-12 drift-in" style={{ animationDelay: '0.1s' }}>
            <h2 className="text-3xl font-bold mb-4 text-primary">The Challenge</h2>
            <h3 className="text-2xl font-semibold mb-6 text-foreground">
              Great ideas fail with poor execution.
            </h3>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Whether you're implementing a new ERP system, migrating to the cloud, or rolling out a new software 
              platform, IT projects are complex. Coordinating resources across different time zones, managing vendor 
              relationships, and keeping stakeholders informed can overwhelm an already busy team. Without dedicated, 
              expert project management, projects often face delays, budget overruns, and fail to deliver their 
              intended business value.
            </p>
          </div>

          {/* Solution Section */}
          <div className="glass-card rounded-2xl p-10 mb-12 drift-in" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-3xl font-bold mb-4 text-primary">Our Solution</h2>
            <h3 className="text-2xl font-semibold mb-6 text-foreground">
              Dedicated Expertise, On-Demand.
            </h3>
            <p className="text-lg text-foreground/80 leading-relaxed mb-8">
              AlphaByte provides certified, remote Project Managers who act as the central nervous system for your 
              technology initiatives. Our PMs integrate with your team, taking full ownership of the project lifecycle 
              from planning and execution to monitoring and closure.
            </p>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-foreground/90 text-lg">{feature}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="glass-card rounded-2xl p-10 text-center drift-in" style={{ animationDelay: '0.3s' }}>
            <h2 className="text-3xl font-bold mb-4 text-foreground">
              Ready to Execute Flawlessly?
            </h2>
            <p className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto">
              Let's discuss how AlphaByte's Project Management services can drive your initiatives to success. 
              Book your free 30-minute discovery call today.
            </p>
            <Button 
              onClick={() => setIsBookingOpen(true)}
              size="lg"
              className="text-lg px-8 py-6 shadow-red-glow"
            >
              Book a Discovery Call
            </Button>
          </div>

          <Footer />
        </div>
      </main>

      <BookingModal open={isBookingOpen} onOpenChange={setIsBookingOpen} />
    </div>
  );
};

export default ProjectManagement;
