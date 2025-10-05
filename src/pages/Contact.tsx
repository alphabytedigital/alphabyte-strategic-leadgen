import { useState } from 'react';
import AnimatedBackground from '@/components/AnimatedBackground';
import Navigation from '@/components/Navigation';
import BookingModal from '@/components/BookingModal';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin } from 'lucide-react';
import contactHero from '@/assets/contact-hero.jpg';

const Contact = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      <Navigation onBookingClick={() => setIsBookingModalOpen(true)} />
      
      <main className="relative z-10 pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="glass-card p-12 mb-16 hover-lift text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
              Get in <span className="text-primary">Touch</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto">
              Let's discuss how AlphaByte can transform your IT operations and drive your business forward.
            </p>
          </div>

          {/* Contact Information */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="glass-card p-8 hover-lift text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">General Inquiries</h3>
              <a 
                href="mailto:hello@bpo.alphabyte.biz?subject=Inquiry for AlphaByte BPO"
                className="text-primary hover:text-primary/80 transition-colors"
              >
                hello@bpo.alphabyte.biz
              </a>
            </div>

            <div className="glass-card p-8 hover-lift text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Sales</h3>
              <a 
                href="mailto:sales@bpo.alphabyte.biz?subject=Inquiry for AlphaByte BPO"
                className="text-primary hover:text-primary/80 transition-colors"
              >
                sales@bpo.alphabyte.biz
              </a>
            </div>

            <div className="glass-card p-8 hover-lift text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Support</h3>
              <a 
                href="mailto:support@bpo.alphabyte.biz?subject=Inquiry for AlphaByte BPO"
                className="text-primary hover:text-primary/80 transition-colors"
              >
                support@bpo.alphabyte.biz
              </a>
            </div>
          </div>

          {/* Main Contact Section with Image and Form */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* Left Side - Image */}
            <div className="glass-card p-8 hover-lift overflow-hidden rounded-xl">
              <img 
                src={contactHero}
                alt="Contact AlphaByte BPO"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            {/* Right Side - Contact Form */}
            <div className="glass-card p-8 hover-lift rounded-xl flex flex-col">
              <h2 className="text-3xl font-bold mb-6 text-foreground">
                Send Us a <span className="text-primary">Message</span>
              </h2>
              <div className="flex-1 rounded-xl overflow-hidden" style={{ minHeight: '600px' }}>
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://forms.office.com/r/RDC3z2Z3ts?embed=true" 
                  frameBorder="0" 
                  marginWidth={0} 
                  marginHeight={0} 
                  style={{ border: 'none', height: '100%' }} 
                  allowFullScreen 
                  className="rounded-xl"
                />
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="glass-card p-12 text-center hover-lift">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Prefer to <span className="text-primary">Schedule</span> a Call?
            </h2>
            <p className="text-xl text-foreground/80 mb-8 max-w-3xl mx-auto">
              Book a free 30-minute discovery call to discuss your specific needs and explore how we can help.
            </p>
            <button
              onClick={() => setIsBookingModalOpen(true)}
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-all shadow-red-glow"
            >
              Book Your Discovery Call
            </button>
          </div>
          <Footer />
        </div>
      </main>

      <BookingModal 
        open={isBookingModalOpen}
        onOpenChange={setIsBookingModalOpen}
      />
    </div>
  );
};

export default Contact;
