import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import ConsultationForm from "@/components/ConsultationForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { updatePageSEO, pageSEOData } from "@/utils/seo";
import { 
  Bot, 
  Cog, 
  Database, 
  Share2, 
  TrendingUp, 
  Shield,
  ArrowRight,
  CheckCircle,
  Users,
  MessageSquare,
  BarChart3,
  FileText,
  Globe,
  Lock,
  Zap,
  Target,
  Building,
  Brain
} from "lucide-react";

const Services = () => {
  useEffect(() => {
    updatePageSEO(pageSEOData.services);
  }, []);

  const services = [
    {
      id: 1,
      icon: Bot,
      title: "Custom AI Agent Development",
      subtitle: "Build intelligent agents trained on your business logic",
      description: "Transform your business processes with custom AI agents that understand your domain, integrate with your systems, and provide intelligent automation.",
      features: [
        "Domain-trained GPT Agents (real estate, legal, travel, finance)",
        "Conversational AI with API and database integration", 
        "Chat + voice assistants (web, mobile, WhatsApp)",
        "Role-based secure access (admin/client/staff)"
      ],
      benefits: [
        "24/7 customer support automation",
        "Reduce response time by 90%",
        "Handle 1000+ concurrent conversations",
        "Multilingual support (Arabic + English)"
      ],
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50 dark:bg-blue-950/20"
    },
    {
      id: 2,
      icon: Cog,
      title: "AI Infrastructure & Automation",
      subtitle: "Deploy modular workflows that replace manual work",
      description: "Eliminate repetitive tasks with intelligent automation systems that learn and adapt to your business processes.",
      features: [
        "End-to-end process automation with AI (sales, support, operations)",
        "Custom backend agents for SOP execution, form filling, CRM updates",
        "RAG (Retrieval-Augmented Generation) systems for internal knowledgebases",
        "AI-enhanced dashboards for decision-making"
      ],
      benefits: [
        "Save 40+ hours per week per employee",
        "99.9% accuracy in automated processes",
        "Real-time process monitoring",
        "Seamless integration with existing tools"
      ],
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50 dark:bg-purple-950/20"
    },
    {
      id: 3,
      icon: Database,
      title: "AI Knowledge Base Creation",
      subtitle: "Turn documents into searchable intelligence",
      description: "Convert your messy documents, SOPs, PDFs, and legal texts into clean, searchable AI-powered knowledge systems.",
      features: [
        "Vectorized Q&A databases from proprietary documents",
        "Legal and compliance AI agents trained on jurisdictional laws (e.g., UAE RERA)",
        "Smart internal search powered by GPT + embeddings",
        "Document summarization and insight extraction"
      ],
      benefits: [
        "Find information 10x faster",
        "Ensure compliance with latest regulations",
        "Reduce training time for new employees",
        "Auto-update knowledge as documents change"
      ],
      color: "from-green-500 to-teal-500",
      bgColor: "bg-green-50 dark:bg-green-950/20"
    },
    {
      id: 4,
      icon: Share2,
      title: "AI Product Licensing & White Labeling",
      subtitle: "License proven AI stacks or embed them into your platforms",
      description: "Get to market faster with our pre-built AI solutions, customized with your branding and requirements.",
      features: [
        "Pre-trained agents for real estate, travel, concierge, and consulting",
        "Arabic-English GPT conversation engine with cultural intelligence",
        "White-label SaaS deployments with your branding + domain",
        "Licensing agreements with ongoing support and updates"
      ],
      benefits: [
        "Launch AI products in weeks, not months",
        "Proven technology with 500+ successful deployments",
        "Ongoing updates and feature releases",
        "Revenue sharing opportunities"
      ],
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50 dark:bg-orange-950/20"
    },
    {
      id: 5,
      icon: TrendingUp,
      title: "AI Strategy & Transformation Consulting",
      subtitle: "You bring the business — we build the AI edge",
      description: "Strategic consulting to identify AI opportunities, plan implementation, and ensure successful adoption across your organization.",
      features: [
        "AI readiness assessment for SMEs and enterprise",
        "Internal team augmentation (prompt ops, AI ops, workflow design)",
        "UAE AI Charter compliance consulting",
        "Vision-to-product execution planning"
      ],
      benefits: [
        "Clear AI roadmap aligned with business goals",
        "Risk mitigation through proven methodologies",
        "Team training and capability building",
        "Measurable ROI within 90 days"
      ],
      color: "from-indigo-500 to-purple-500",
      bgColor: "bg-indigo-50 dark:bg-indigo-950/20"
    },
    {
      id: 6,
      icon: Shield,
      title: "Secure, Compliant AI Deployment",
      subtitle: "Hosted and managed under your compliance needs",
      description: "Deploy AI solutions with enterprise-grade security, compliance, and governance frameworks that meet industry standards.",
      features: [
        "UAE data residency compliant (Supabase, local VPC if required)",
        "End-to-end encryption, audit logs, and RBAC",
        "Ethical guardrails + OpenAI policy compliance",
        "Industry-specific controls (healthcare, finance, real estate)"
      ],
      benefits: [
        "Meet regulatory requirements (GDPR, UAE laws)",
        "Enterprise-grade security and monitoring",
        "Full audit trail for compliance reporting",
        "24/7 security monitoring and threat detection"
      ],
      color: "from-gray-500 to-slate-500",
      bgColor: "bg-gray-50 dark:bg-gray-950/20"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Assessment",
      description: "We analyze your business processes, identify AI opportunities, and create a custom roadmap.",
      icon: Target,
      duration: "1-2 weeks"
    },
    {
      step: "02", 
      title: "Design & Planning",
      description: "Our team designs the AI solution architecture and creates detailed implementation plans.",
      icon: FileText,
      duration: "1-2 weeks"
    },
    {
      step: "03",
      title: "Development & Integration",
      description: "We build and integrate your custom AI solution with existing systems and workflows.",
      icon: Zap,
      duration: "2-6 weeks"
    },
    {
      step: "04",
      title: "Testing & Optimization",
      description: "Rigorous testing, fine-tuning, and optimization to ensure peak performance.",
      icon: BarChart3,
      duration: "1-2 weeks"
    },
    {
      step: "05",
      title: "Deployment & Training",
      description: "Live deployment with comprehensive team training and ongoing support.",
      icon: Users,
      duration: "1 week"
    },
    {
      step: "06",
      title: "Monitoring & Support",
      description: "Continuous monitoring, updates, and 24/7 support to ensure optimal performance.",
      icon: Shield,
      duration: "Ongoing"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="main-content" role="main" aria-label="Services page content">
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-hero relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-6 text-sm font-medium px-4 py-2">
              🇦🇪 Premium AI Services
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI Services That{" "}
              <span className="text-gradient-gold">Transform Business</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Applied Intelligence. Built for Impact. From custom AI agents to enterprise automation, 
              we deliver solutions that drive measurable results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ConsultationForm type="consultation" />
              <ConsultationForm 
                type="assessment" 
                trigger={
                  <Button variant="outline" size="lg">
                    <Brain className="mr-2 h-5 w-5" />
                    Free AI Assessment
                  </Button>
                }
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Complete AI Solutions for{" "}
              <span className="text-gradient-gold">Modern Business</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Six core service offerings designed to transform every aspect of your business operations.
            </p>
          </div>

          <div className="space-y-12">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;
              
              return (
                <Card key={service.id} className="bg-card border-2 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${!isEven ? 'lg:grid-flow-dense' : ''}`}>
                      {/* Content */}
                      <div className={!isEven ? 'lg:col-start-2' : ''}>
                        <div className="flex items-center gap-3 mb-6">
                          <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center text-white shadow-lg`}>
                            <Icon className="h-7 w-7" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-foreground">{service.title}</h3>
                            <p className="text-muted-foreground font-medium">{service.subtitle}</p>
                          </div>
                        </div>
                        
                        <p className="text-xl mb-8 leading-relaxed">{service.description}</p>
                        
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                          <div>
                            <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                              <Cog className="h-5 w-5 text-primary" />
                              Features
                            </h4>
                            <ul className="space-y-3">
                              {service.features.map((feature, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-base">
                                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                                  <span className="leading-relaxed">{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                              <TrendingUp className="h-5 w-5 text-primary" />
                              Benefits
                            </h4>
                            <ul className="space-y-3">
                              {service.benefits.map((benefit, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-base">
                                  <ArrowRight className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                                  <span className="leading-relaxed">{benefit}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        
                        <div className="mt-6">
                          <ConsultationForm 
                            type="consultation"
                            trigger={
                              <Button variant="outline" className="group">
                                Learn More
                                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                              </Button>
                            }
                          />
                        </div>
                      </div>
                      
                      {/* Visual/Diagram placeholder */}
                      <div className={`${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                        <div className={`aspect-video rounded-xl bg-gradient-to-br ${service.color} p-8 flex items-center justify-center text-white relative overflow-hidden`}>
                          <div className="text-center relative z-10">
                            <Icon className="h-16 w-16 mx-auto mb-4 opacity-90" />
                            <h4 className="text-xl font-bold mb-2">{service.title}</h4>
                            <p className="text-white/80 text-sm">{service.subtitle}</p>
                          </div>
                          {/* Decorative elements */}
                          <div className="absolute top-4 right-4 w-24 h-24 rounded-full bg-white/10" />
                          <div className="absolute bottom-4 left-4 w-16 h-16 rounded-full bg-white/10" />
                          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-white/5" />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Proven{" "}
              <span className="text-gradient-gold">Implementation Process</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From concept to deployment, we follow a structured 6-step process that ensures 
              successful AI implementation and maximum ROI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              
              return (
                <Card key={step.step} className="relative group hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                        {step.step}
                      </div>
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground mb-4">{step.description}</p>
                    
                    <Badge variant="secondary" className="text-xs">
                      Duration: {step.duration}
                    </Badge>
                  </CardContent>
                  
                  {/* Connection line for larger screens */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <ArrowRight className="h-6 w-6 text-muted-foreground" />
                    </div>
                  )}
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <Card className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
            <CardContent className="p-12 text-center">
              <Building className="h-16 w-16 mx-auto mb-6 opacity-90" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
                Join 500+ businesses in Dubai that trust Hikma Digital for their AI transformation. 
                Get started with a free consultation today.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <ConsultationForm 
                  type="consultation"
                  trigger={
                    <Button variant="secondary" size="lg" className="min-w-[200px]">
                      <MessageSquare className="mr-2 h-5 w-5" />
                      Book Free Consultation
                    </Button>
                  }
                />
                <Button variant="outline" size="lg" asChild className="min-w-[200px] bg-white/10 border-white/20 text-white hover:bg-white/20">
                  <a href="https://wa.me/971585404978" target="_blank" rel="noopener noreferrer">
                    <MessageSquare className="mr-2 h-5 w-5" />
                    Chat on WhatsApp
                  </a>
                </Button>
              </div>
              
              <div className="mt-8 flex items-center justify-center gap-8 text-sm opacity-75">
                <span>✅ Free consultation</span>
                <span>✅ Custom AI roadmap</span>
                <span>✅ No commitment required</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      </main>

      <Footer />
      <ChatBot />
    </div>
  );
};

export default Services;