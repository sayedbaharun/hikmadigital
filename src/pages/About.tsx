<<<<<<< HEAD
import { Button } from "@/components/ui/button";
import { CheckCircle, Award, Users, Target, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import aiRobotImage from "@/assets/ai-robot-assistant.jpg";
import aiNetworkImage from "@/assets/ai-neural-network.jpg";
import businessCollabImage from "@/assets/business-ai-collaboration.jpg";

const About = () => {
  const achievements = [
    "First AI agency to meet all 12 UAE AI Charter Principles",
    "Trusted by 500+ businesses across Dubai and UAE", 
    "94.5% client satisfaction rate with measurable ROI",
    "Founded in 2025 with focus on ethical AI implementation"
  ];

  const successStories = [
    {
      company: "Al-Asala Restaurant",
      result: "40% time savings",
      description: "Automated reservation system and customer service reduced staff workload by 40% during peak hours.",
      metric: "160 hours saved monthly"
    },
    {
      company: "Dubai Fashion Boutique", 
      result: "30% cost reduction",
      description: "AI-powered inventory management and customer support cut operational costs significantly.",
      metric: "AED 25,000 monthly savings"
    },
    {
      company: "Express Logistics",
      result: "50% faster response",
      description: "Real-time route optimization and customer notifications improved delivery efficiency.",
      metric: "2-hour delivery window"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-hero">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About <span className="text-gradient-gold">Hikma Digital</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Making AI a trusted partner, not a replacement. We're Dubai's first AI agency 
              to achieve full compliance with the UAE AI Charter.
=======
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface AboutProps {
  openContactForm?: (type: 'general' | 'assessment' | 'partnership' | 'licensing') => void;
}

const About: React.FC<AboutProps> = ({ openContactForm }) => {
  const { isRTL, language } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="section">
        <div className="container-custom text-center">
          <div className="space-y-8">
            <h1 className={`text-3xl md:text-3xl font-semibold text-primary ${isRTL ? 'font-arabic' : ''}`}>
              {language === 'ar' ? 'من نحن' : 'About Hikma Digital'}
            </h1>
            
            <p className={`text-lg text-secondary max-w-2xl mx-auto ${isRTL ? 'font-arabic' : ''}`}>
              {language === 'ar' 
                ? 'نحن منصة تعاون بين الذكاء الاصطناعي والخبراء البشريين لتحويل الأعمال في دبي'
                : 'We are a human-AI collaboration platform transforming businesses in Dubai'}
>>>>>>> hikmadigital/ui-migration-clean
            </p>
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Mission Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                At Hikma Digital, we believe AI should enhance human capabilities, not replace them. 
                Our mission is to democratize AI for small and medium enterprises across Dubai, 
                making advanced technology accessible and culturally appropriate.
              </p>
              
              <div className="space-y-4 mb-8">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{achievement}</span>
                  </div>
                ))}
              </div>

              <Button variant="gold" size="lg">
                See Our Results
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <div className="space-y-6">
              {/* AI Robot Image */}
              <div className="relative overflow-hidden rounded-xl">
                <img 
                  src={aiRobotImage} 
                  alt="AI Robot Assistant"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="font-bold">Advanced AI Technology</h4>
                  <p className="text-sm opacity-90">Cutting-edge solutions for modern businesses</p>
                </div>
              </div>

              <div className="card-elegant p-8">
                <Award className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">AI Excellence Standards</h3>
                <p className="text-muted-foreground">
                  Committed to ethical, safe, and responsible AI implementation 
                  with the highest standards of technological excellence.
                </p>
              </div>

              <div className="card-elegant p-8">
                <Users className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-xl font-bold mb-3">500+ Businesses Served</h3>
                <p className="text-muted-foreground">
                  From startups to established enterprises, we've helped businesses 
                  across Dubai transform their operations with AI.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Technology Showcase */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Powered by Advanced <span className="text-gradient-gold">AI Technology</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Our neural networks and machine learning algorithms are designed to understand 
                and adapt to your business needs, providing intelligent automation that grows with you.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-card/50 rounded-lg">
                  <div className="text-2xl font-bold text-primary">24/7</div>
                  <div className="text-sm text-muted-foreground">AI Availability</div>
                </div>
                <div className="text-center p-4 bg-card/50 rounded-lg">
                  <div className="text-2xl font-bold text-accent">99.9%</div>
                  <div className="text-sm text-muted-foreground">Uptime SLA</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src={aiNetworkImage} 
                alt="AI Neural Network"
                className="w-full h-96 object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-xl"></div>
            </div>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Success <span className="text-gradient-gold">Stories</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real businesses, real results. See how our AI solutions have transformed 
              operations for companies across Dubai.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="card-elegant p-8 text-center">
                <div className="text-3xl font-bold text-primary mb-2">
                  {story.result}
                </div>
                <h3 className="text-xl font-bold mb-4">{story.company}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {story.description}
                </p>
                <div className="bg-secondary/50 rounded-lg p-4">
                  <div className="font-semibold text-accent">{story.metric}</div>
                  <div className="text-sm text-muted-foreground">Key Metric</div>
                </div>
              </div>
            ))}
=======
      {/* Our Story */}
      <section className="section bg-neutral-50">
        <div className="container-custom">
          <div className="space-y-8">
            <h2 className={`text-2xl font-semibold text-primary text-center ${isRTL ? 'font-arabic' : ''}`}>
              {language === 'ar' ? 'قصتنا' : 'Our Story'}
            </h2>
            
            <div className="space-y-6 max-w-3xl mx-auto">
              <p className={`text-secondary ${isRTL ? 'font-arabic' : ''}`}>
                {language === 'ar'
                  ? 'أسست حكمة ديجيتال في دبي عام 2025 برؤية واضحة: جعل الذكاء الاصطناعي شريكاً للإنسان، وليس بديلاً عنه.'
                  : 'Hikma Digital was founded in Dubai in 2025 with a clear vision: making AI a partner to humans, not a replacement.'
                }
              </p>
              
              <p className={`text-secondary ${isRTL ? 'font-arabic' : ''}`}>
                {language === 'ar'
                  ? 'نحن أول منصة معتمدة من ميثاق الإمارات للذكاء الاصطناعي، نخدم 557,000 شركة صغيرة ومتوسطة في دبي.'
                  : 'We are the first UAE AI Charter certified platform, serving 557,000 SMEs in Dubai.'
                }
              </p>
            </div>
>>>>>>> hikmadigital/ui-migration-clean
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Company Info */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">
              Founded in <span className="text-gradient-gold">2025</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Established in Dubai with a vision to make AI accessible for every business. 
              We combine cutting-edge technology with deep understanding of local business culture.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">2025</div>
                <div className="text-muted-foreground">Founded</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">500+</div>
                <div className="text-muted-foreground">Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">94.5%</div>
                <div className="text-muted-foreground">Satisfaction</div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
              <p className="text-muted-foreground mb-6">
                Join the businesses that trust Hikma Digital for their AI transformation.
              </p>
              <Button variant="gold" size="lg" asChild>
                <a href="/contact">
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Business Collaboration Image */}
        <div className="container mx-auto px-6 mt-20">
          <div className="relative overflow-hidden rounded-2xl">
            <img 
              src={businessCollabImage} 
              alt="Business Team Collaborating with AI"
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent"></div>
            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-6">
                <div className="max-w-2xl">
                  <h3 className="text-3xl font-bold text-white mb-4">
                    Your Success is Our Mission
                  </h3>
                  <p className="text-white/90 text-lg">
                    We partner with businesses across Dubai to implement AI solutions 
                    that drive real results and sustainable growth.
                  </p>
                </div>
              </div>
=======
      {/* What We Do */}
      <section className="section">
        <div className="container-custom">
          <div className="space-y-8">
            <h2 className={`text-2xl font-semibold text-primary text-center ${isRTL ? 'font-arabic' : ''}`}>
              {language === 'ar' ? 'ماذا نفعل' : 'What We Do'}
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center space-y-3">
                <h3 className={`font-semibold text-primary ${isRTL ? 'font-arabic' : ''}`}>
                  {language === 'ar' ? 'أتمتة ذكية' : 'Smart Automation'}
                </h3>
                <p className={`text-secondary ${isRTL ? 'font-arabic' : ''}`}>
                  {language === 'ar' ? 'نخفض 80% من العمل اليدوي' : 'Reduce 80% of manual work'}
                </p>
              </div>
              
              <div className="text-center space-y-3">
                <h3 className={`font-semibold text-primary ${isRTL ? 'font-arabic' : ''}`}>
                  {language === 'ar' ? 'تحليل البيانات' : 'Data Analysis'}
                </h3>
                <p className={`text-secondary ${isRTL ? 'font-arabic' : ''}`}>
                  {language === 'ar' ? 'قرارات أذكى مبنية على البيانات' : 'Smarter data-driven decisions'}
                </p>
              </div>
              
              <div className="text-center space-y-3">
                <h3 className={`font-semibold text-primary ${isRTL ? 'font-arabic' : ''}`}>
                  {language === 'ar' ? 'دعم العملاء' : 'Customer Support'}
                </h3>
                <p className={`text-secondary ${isRTL ? 'font-arabic' : ''}`}>
                  {language === 'ar' ? 'خدمة عملاء متقدمة 24/7' : 'Advanced 24/7 customer service'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="section bg-neutral-50">
        <div className="container-custom text-center">
          <div className="space-y-6">
            <h2 className={`text-2xl font-semibold text-primary ${isRTL ? 'font-arabic' : ''}`}>
              {language === 'ar' ? 'مكتبنا في دبي' : 'Our Dubai Office'}
            </h2>
            
            <p className={`text-secondary ${isRTL ? 'font-arabic' : ''}`}>
              {language === 'ar' 
                ? 'مركز دبي للتكنولوجيا (DTEC) - قلب النظام التقني في الإمارات'
                : 'Dubai Technology Entrepreneur Campus (DTEC) - Heart of UAE tech ecosystem'}
            </p>
            
            <div className="pt-4">
              <button
                onClick={() => openContactForm?.('general')}
                className="btn-primary focus-ring"
              >
                {language === 'ar' ? 'تواصل معنا' : 'Contact Us'}
              </button>
>>>>>>> hikmadigital/ui-migration-clean
            </div>
          </div>
        </div>
      </section>
<<<<<<< HEAD

      <Footer />
      <ChatBot />
=======
>>>>>>> hikmadigital/ui-migration-clean
    </div>
  );
};

export default About;