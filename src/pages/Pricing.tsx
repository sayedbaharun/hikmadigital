import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { Check, X, Info, TrendingUp, Users, Clock, Award, Calculator, ArrowRight, Star, MessageCircle, Zap, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PricingTier {
  name: string;
  price: string;
  priceValue: number;
  description: string;
  agents: string;
  tasks: string;
  support: string;
  integrations: string;
  training: string;
  features: string[];
  highlighted?: boolean;
  cta: string;
  ctaLink: string;
}

interface Testimonial {
  name: string;
  company: string;
  quote: string;
  savings: string;
  image: string;
}

interface FAQ {
  question: string;
  answer: string;
}

const Pricing: React.FC = () => {
  const { isRTL, language } = useLanguage();
  const [employees, setEmployees] = useState(50);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  // Calculate dynamic pricing based on employees
  const calculateGrowthPrice = () => {
    const basePrice = 799;
    const discount = employees >= 100 ? 0.15 : employees >= 50 ? 0.1 : 0;
    return Math.round(basePrice * (1 - discount));
  };

  // Calculate ROI metrics
  const calculateROI = () => {
    const avgSalary = 15000; // Average monthly salary in AED
    const hoursPerEmployee = 40; // Hours saved per month
    const productivityGain = 0.3; // 30% productivity increase
    
    const monthlySavings = Math.round((employees * hoursPerEmployee * (avgSalary / 160) * productivityGain));
    const monthlyInvestment = employees <= 10 ? 0 : calculateGrowthPrice();
    const netSavings = monthlySavings - monthlyInvestment;
    const roiMonths = monthlyInvestment > 0 ? Math.ceil(monthlyInvestment / netSavings) : 0;

    return {
      monthlySavings,
      monthlyInvestment,
      netSavings,
      roiMonths: roiMonths > 0 ? roiMonths : 1,
      annualSavings: netSavings * 12
    };
  };

  const roi = calculateROI();

  const pricingTiers: PricingTier[] = [
    {
      name: 'Starter',
      price: 'Free',
      priceValue: 0,
      description: 'Perfect for small teams getting started with AI automation',
      agents: '2 AI agents',
      tasks: '500 tasks/month',
      support: 'Community support',
      integrations: '3 integrations',
      training: 'Self-service resources',
      features: [
        'Basic email automation',
        'Simple customer support bot',
        'Task scheduling',
        'Basic analytics dashboard',
        'Email support'
      ],
      cta: 'Start Free Trial',
      ctaLink: '/signup'
    },
    {
      name: 'Growth',
      price: `${calculateGrowthPrice()} AED`,
      priceValue: calculateGrowthPrice(),
      description: 'Ideal for growing businesses ready to scale with AI',
      agents: '10 AI agents',
      tasks: 'Unlimited tasks',
      support: 'Priority support',
      integrations: '15+ integrations',
      training: '2 training sessions/month',
      features: [
        'Everything in Starter',
        'Advanced workflow automation',
        'Custom AI agent training',
        'API access',
        'Advanced analytics & reporting',
        'Dedicated account manager',
        'Custom integrations',
        '24/7 phone support'
      ],
      highlighted: true,
      cta: 'Start 14-Day Trial',
      ctaLink: '/signup?plan=growth'
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      priceValue: -1,
      description: 'Tailored solutions for large organizations',
      agents: 'Unlimited AI agents',
      tasks: 'Unlimited tasks',
      support: 'Dedicated support team',
      integrations: 'Unlimited integrations',
      training: 'Weekly training & consulting',
      features: [
        'Everything in Growth',
        'Custom AI model training',
        'On-premise deployment option',
        'SLA guarantees',
        'Compliance & security audit',
        'Custom development',
        'Priority feature requests',
        'Executive business reviews'
      ],
      cta: 'Contact Sales',
      ctaLink: '/contact'
    }
  ];

  const testimonials: Testimonial[] = [
    {
      name: 'Ahmed Al Rashid',
      company: 'Dubai Properties Group',
      quote: 'The AI agents have transformed our customer service. We\'re saving over 200 hours per month and our response time improved by 75%.',
      savings: '45,000 AED/month',
      image: '/api/placeholder/64/64'
    },
    {
      name: 'Fatima Hassan',
      company: 'Emirates Retail Solutions',
      quote: 'ROI was evident within the first month. Our team can now focus on strategic work while AI handles repetitive tasks.',
      savings: '32,000 AED/month',
      image: '/api/placeholder/64/64'
    },
    {
      name: 'Khalid Mohammed',
      company: 'Abu Dhabi Tech Ventures',
      quote: 'The platform paid for itself in just 3 weeks. Customer satisfaction scores increased by 40% with 24/7 AI support.',
      savings: '58,000 AED/month',
      image: '/api/placeholder/64/64'
    }
  ];

  const faqs: FAQ[] = [
    {
      question: 'How quickly can I see ROI?',
      answer: 'Most businesses see positive ROI within 30-60 days. Our ROI calculator above gives you a personalized estimate based on your team size.'
    },
    {
      question: 'Can I switch plans anytime?',
      answer: 'Yes! You can upgrade or downgrade your plan at any time. Changes take effect at the next billing cycle, and we\'ll prorate any differences.'
    },
    {
      question: 'What happens if I exceed my limits?',
      answer: 'We\'ll notify you when you\'re approaching limits. You can either upgrade your plan or purchase additional capacity as needed. We never stop your automations unexpectedly.'
    },
    {
      question: 'Is there a setup fee?',
      answer: 'No setup fees! We provide free onboarding and training sessions with Growth and Enterprise plans to ensure you get maximum value from day one.'
    },
    {
      question: 'What integrations are supported?',
      answer: 'We support all major business tools including Salesforce, HubSpot, Microsoft 365, Google Workspace, Slack, and many more. Custom integrations are available for Enterprise plans.'
    },
    {
      question: 'Is my data secure?',
      answer: 'Absolutely. We use bank-level encryption, are SOC 2 compliant, and offer on-premise deployment for Enterprise customers with specific security requirements.'
    }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-AE').format(num);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Limited Time Offer Banner */}
      <motion.div 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-gradient-to-r from-gold-dark to-gold text-white py-3"
      >
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className={`text-sm md:text-base font-semibold ${isRTL ? 'font-arabic' : 'font-inter'}`}>
            🇦🇪 {language === 'ar' ? 'عرض اليوم الوطني الإماراتي: خصم 50% على خطة النمو - لفترة محدودة!' : 'UAE National Day Special: 50% OFF Growth Plan - Limited Time Only!'}
            <Link to="/signup?promo=uae50" className="underline ml-2 rtl:mr-2 rtl:ml-0 font-bold">
              {language === 'ar' ? 'احصل على العرض ←' : 'Claim Offer →'}
            </Link>
          </p>
        </div>
      </motion.div>

      {/* Header */}
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className={`text-2xl md:text-3xl font-semibold mb-6 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
              <span className="gradient-text">
                {language === 'ar' ? 'اختر خطة الأتمتة بالذكاء الاصطناعي' : 'Choose Your AI Automation Plan'}
              </span>
            </h1>
            <p className={`text-lg text-secondary max-w-3xl mx-auto ${isRTL ? 'font-arabic' : 'font-inter'}`}>
              {language === 'ar' ? 'انضم إلى أكثر من 500 شركة إماراتية توفر آلاف الدراهم شهرياً مع الأتمتة بالذكاء الاصطناعي' : 'Join 500+ UAE businesses saving thousands of dirhams monthly with AI-powered automation'}
            </p>
          </div>
        </div>
      </div>

      {/* ROI Calculator */}
      <div className="max-w-4xl mx-auto px-4 mb-16">
        <div className="card p-8">
          <div className="flex items-center mb-6">
            <Calculator className="w-8 h-8 text-blue-600 mr-3" />
            <h2 className={`text-2xl font-semibold text-primary ${isRTL ? 'font-arabic' : 'font-inter'}`}>
              {language === 'ar' ? 'احسب عائد الاستثمار' : 'Calculate Your ROI'}
            </h2>
          </div>
          
          <div className="mb-6">
            <label className={`block text-sm font-medium text-secondary mb-2 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
              {language === 'ar' ? `عدد الموظفين: ${employees}` : `Number of Employees: ${employees}`}
            </label>
            <input
              type="range"
              min="5"
              max="500"
              value={employees}
              onChange={(e) => setEmployees(parseInt(e.target.value))}
              className="w-full h-3 bg-neutral-200 rounded-lg appearance-none cursor-pointer slider"
            />
            <div className="flex justify-between text-sm text-secondary mt-1">
              <span>5</span>
              <span>250</span>
              <span>500</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-green-50 rounded-lg p-4">
              <div className="flex items-center mb-2">
                <TrendingUp className="w-5 h-5 text-green-600 mr-2" />
                <h3 className="font-semibold text-primary">Monthly Savings</h3>
              </div>
              <p className="text-2xl font-bold text-green-600">
                {formatNumber(roi.monthlySavings)} AED
              </p>
              <p className="text-sm text-secondary">From automation & efficiency</p>
            </div>

            <div className="bg-blue-50 rounded-lg p-4">
              <div className="flex items-center mb-2">
                <Clock className="w-5 h-5 text-blue-600 mr-2" />
                <h3 className="font-semibold text-primary">ROI Timeline</h3>
              </div>
              <p className="text-2xl font-bold text-blue-600">
                {roi.roiMonths} months
              </p>
              <p className="text-sm text-secondary">To positive ROI</p>
            </div>

            <div className="bg-purple-50 rounded-lg p-4">
              <div className="flex items-center mb-2">
                <Award className="w-5 h-5 text-purple-600 mr-2" />
                <h3 className="font-semibold text-primary">Annual Benefit</h3>
              </div>
              <p className="text-2xl font-bold text-purple-600">
                {formatNumber(roi.annualSavings)} AED
              </p>
              <p className="text-sm text-secondary">Net savings per year</p>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Tiers */}
      <div className="max-w-7xl mx-auto px-4 mb-16">
        <div className="grid md:grid-cols-3 gap-8">
          {pricingTiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative bg-white rounded-2xl shadow-lg p-8 ${
                tier.highlighted ? 'ring-4 ring-primary transform scale-105' : ''
              }`}
            >
              {tier.highlighted && (
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-primary-600 to-primary text-white px-6 py-2 rounded-full text-sm font-semibold">
                    MOST POPULAR
                  </span>
                </div>
              )}
              
              {tier.name === 'Growth' && (
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-red-100 text-red-800 text-xs font-semibold rounded-full">
                    Only 3 spots left!
                  </span>
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-primary mb-2">{tier.name}</h3>
                <p className="text-secondary mb-4">{tier.description}</p>
                <div className="flex items-baseline mb-4">
                  <span className="text-2xl font-semibold text-primary">{tier.price}</span>
                  {tier.priceValue > 0 && <span className="text-secondary ml-2">/month</span>}
                  {tier.name === 'Growth' && employees > 50 && (
                    <span className="ml-3 px-3 py-1 bg-green-100 text-green-800 text-sm font-semibold rounded-full animate-pulse">
                      Save {employees >= 100 ? '15%' : '10%'}!
                    </span>
                  )}
                </div>
                {tier.name === 'Growth' && employees > 50 && (
                  <p className="text-sm text-green-600 font-semibold">
                    You save {employees >= 100 ? '15%' : '10%'} with {employees} employees!
                  </p>
                )}
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <Users className="w-5 h-5 text-neutral-400 mr-3 mt-0.5" />
                  <span className="text-primary">{tier.agents}</span>
                </div>
                <div className="flex items-start">
                  <TrendingUp className="w-5 h-5 text-neutral-400 mr-3 mt-0.5" />
                  <span className="text-primary">{tier.tasks}</span>
                </div>
                <div className="flex items-start">
                  <MessageCircle className="w-5 h-5 text-neutral-400 mr-3 mt-0.5" />
                  <span className="text-primary">{tier.support}</span>
                </div>
                <div className="flex items-start">
                  <Award className="w-5 h-5 text-neutral-400 mr-3 mt-0.5" />
                  <span className="text-primary">{tier.integrations}</span>
                </div>
                <div className="flex items-start">
                  <Clock className="w-5 h-5 text-neutral-400 mr-3 mt-0.5" />
                  <span className="text-primary">{tier.training}</span>
                </div>
              </div>

              <div className="border-t pt-6 mb-8">
                <h4 className="font-semibold text-primary mb-4">All features:</h4>
                <ul className="space-y-3">
                  {tier.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-primary text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                to={tier.ctaLink}
                className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-all ${
                  tier.highlighted
                    ? 'btn-primary'
                    : 'btn-secondary'
                }`}
              >
                {tier.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Feature Comparison Table */}
      <div className="max-w-6xl mx-auto px-4 mb-16">
        <h2 className="text-2xl font-semibold text-center text-primary mb-12">
          Detailed Feature Comparison
        </h2>
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-neutral-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-primary">
                    Features
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-primary">
                    Starter
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-primary">
                    Growth
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-primary">
                    Enterprise
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  { feature: 'AI Agents', starter: '2', growth: '10', enterprise: 'Unlimited' },
                  { feature: 'Monthly Tasks', starter: '500', growth: 'Unlimited', enterprise: 'Unlimited' },
                  { feature: 'Team Members', starter: '3', growth: '25', enterprise: 'Unlimited' },
                  { feature: 'API Rate Limit', starter: '100/hour', growth: '1000/hour', enterprise: 'Custom' },
                  { feature: 'Data Retention', starter: '30 days', growth: '1 year', enterprise: 'Unlimited' },
                  { feature: 'Custom Workflows', starter: false, growth: true, enterprise: true },
                  { feature: 'White Label Option', starter: false, growth: false, enterprise: true },
                  { feature: 'Dedicated IP', starter: false, growth: false, enterprise: true },
                  { feature: 'Advanced Analytics', starter: false, growth: true, enterprise: true },
                  { feature: 'Priority Support', starter: false, growth: true, enterprise: true },
                ].map((row, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 text-sm text-primary font-medium">
                      <div className="flex items-center">
                        {row.feature}
                        <div className="group relative ml-2">
                          <Info className="w-4 h-4 text-neutral-400 cursor-help" />
                          <div className="invisible group-hover:visible absolute left-0 bottom-full mb-2 w-48 p-2 bg-neutral-800 text-white text-xs rounded-lg">
                            Learn more about {row.feature}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      {typeof row.starter === 'boolean' ? (
                        row.starter ? (
                          <Check className="w-5 h-5 text-green-500 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-neutral-300 mx-auto" />
                        )
                      ) : (
                        <span className="text-sm text-primary">{row.starter}</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {typeof row.growth === 'boolean' ? (
                        row.growth ? (
                          <Check className="w-5 h-5 text-green-500 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-neutral-300 mx-auto" />
                        )
                      ) : (
                        <span className="text-sm text-primary">{row.growth}</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {typeof row.enterprise === 'boolean' ? (
                        row.enterprise ? (
                          <Check className="w-5 h-5 text-green-500 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-neutral-300 mx-auto" />
                        )
                      ) : (
                        <span className="text-sm text-primary">{row.enterprise}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Testimonials Carousel */}
      <div className="bg-neutral-50 py-16 mb-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-semibold text-center text-primary mb-12">
            What Our Customers Say
          </h2>
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-start mb-6">
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold text-primary">
                    {testimonials[currentTestimonial].name}
                  </h3>
                  <p className="text-secondary">{testimonials[currentTestimonial].company}</p>
                </div>
                <div className="ml-auto">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <blockquote className="text-primary mb-4">
                "{testimonials[currentTestimonial].quote}"
              </blockquote>
              <div className="flex items-center text-sm">
                <span className="text-secondary">Monthly Savings:</span>
                <span className="ml-2 font-semibold text-green-600">
                  {testimonials[currentTestimonial].savings}
                </span>
              </div>
            </div>
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentTestimonial ? 'bg-primary w-8' : 'bg-neutral-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto px-4 mb-16">
        <h2 className="text-2xl font-semibold text-center text-primary mb-12">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md">
              <button
                onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-neutral-50 transition-colors"
              >
                <span className="font-semibold text-primary">{faq.question}</span>
                <ArrowRight
                  className={`w-5 h-5 text-neutral-400 transform transition-transform ${
                    expandedFAQ === index ? 'rotate-90' : ''
                  }`}
                />
              </button>
              {expandedFAQ === index && (
                <div className="px-6 pb-4">
                  <p className="text-primary">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Join 500+ UAE businesses already saving time and money with AI automation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/signup"
              className="btn-secondary bg-white hover:bg-neutral-100"
            >
              Start Free Trial
            </Link>
            <Link
              to="/demo"
              className="btn-primary"
            >
              Book a Demo
            </Link>
          </div>
          <p className="text-sm text-white/80 mt-6">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </div>

      {/* Custom styles for slider */}
      <style jsx>{`
        input[type="range"]::-webkit-slider-thumb {
          appearance: none;
          width: 24px;
          height: 24px;
          background: #2563eb;
          border-radius: 50%;
          cursor: pointer;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        
        input[type="range"]::-moz-range-thumb {
          width: 24px;
          height: 24px;
          background: #2563eb;
          border-radius: 50%;
          cursor: pointer;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          border: none;
        }
      `}</style>
    </div>
  );
};

export default Pricing;