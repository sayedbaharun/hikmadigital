import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Play, 
  Download, 
  TrendingUp, 
  Clock, 
  DollarSign,
  Users,
  Package,
  ChartBar,
  Calendar,
  Check,
  ArrowRight,
  Building,
  Target,
  Zap
} from 'lucide-react';

interface Metric {
  label: string;
  before: number;
  after: number;
  unit: string;
  icon: React.ElementType;
}

interface CaseStudy {
  id: string;
  company: string;
  industry: string;
  logo: string;
  background: string;
  challenge: string;
  solution: string[];
  agentsUsed: string[];
  timeline: string;
  metrics: Metric[];
  roi: {
    percentage: number;
    monetary: string;
  };
  quote: {
    ar: string;
    en: string;
  };
  owner: string;
  position: string;
  videoThumbnail: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: 'ahmed-restaurant',
    company: "Ahmed's Restaurant",
    industry: 'Food & Beverage',
    logo: '/api/placeholder/120/120',
    background: 'Family-owned restaurant chain with 5 locations across Dubai, serving traditional Middle Eastern cuisine since 2010.',
    challenge: 'During Ramadan 2023, faced overwhelming demand with 3x normal orders, leading to delays, incorrect orders, and customer complaints. Manual order management and staff coordination became impossible.',
    solution: [
      'Implemented AI Order Management Agent for automated order processing',
      'Deployed Customer Service AI for 24/7 inquiry handling',
      'Integrated Inventory Prediction AI to prevent stockouts',
      'Set up Staff Scheduling AI for optimal shift management'
    ],
    agentsUsed: ['Order Management AI', 'Customer Service AI', 'Inventory AI', 'Scheduling AI'],
    timeline: '2 weeks implementation',
    metrics: [
      { label: 'Operational Efficiency', before: 100, after: 145, unit: '%', icon: TrendingUp },
      { label: 'Order Processing Time', before: 15, after: 6, unit: 'min', icon: Clock },
      { label: 'Customer Satisfaction', before: 78, after: 94, unit: '%', icon: Users },
      { label: 'Daily Orders Handled', before: 250, after: 450, unit: 'orders', icon: Package }
    ],
    roi: {
      percentage: 287,
      monetary: '1.2M AED'
    },
    quote: {
      ar: 'لقد غيّر الذكاء الاصطناعي عملياتنا بالكامل. نحن الآن نخدم ضعف العملاء بنصف الجهد، والأهم من ذلك، عادت ابتسامة العملاء.',
      en: 'AI has transformed our entire operation. We now serve double the customers with half the effort, and most importantly, our customers are smiling again.'
    },
    owner: 'Ahmed Al-Rashid',
    position: 'Founder & CEO',
    videoThumbnail: '/api/placeholder/800/450'
  },
  {
    id: 'fatima-boutique',
    company: "Fatima's Fashion Boutique",
    industry: 'Retail Fashion',
    logo: '/api/placeholder/120/120',
    background: 'Luxury abaya and fashion boutique with 3 stores in Abu Dhabi and online presence, specializing in contemporary Islamic fashion.',
    challenge: 'Dubai Shopping Festival 2024 brought unprecedented traffic. Manual inventory tracking, personalized styling recommendations, and customer follow-ups were becoming bottlenecks to growth.',
    solution: [
      'Deployed AI Personal Stylist for customized recommendations',
      'Implemented Inventory Optimization AI for real-time stock management',
      'Activated Social Media AI for automated content and engagement',
      'Integrated Sales Analytics AI for trend prediction'
    ],
    agentsUsed: ['Personal Stylist AI', 'Inventory AI', 'Social Media AI', 'Analytics AI'],
    timeline: '3 weeks implementation',
    metrics: [
      { label: 'Sales Growth', before: 100, after: 300, unit: '%', icon: DollarSign },
      { label: 'Conversion Rate', before: 12, after: 34, unit: '%', icon: ChartBar },
      { label: 'Average Order Value', before: 850, after: 1420, unit: 'AED', icon: DollarSign },
      { label: 'Customer Retention', before: 45, after: 78, unit: '%', icon: Users }
    ],
    roi: {
      percentage: 425,
      monetary: '3.5M AED'
    },
    quote: {
      ar: 'الذكاء الاصطناعي منحنا القدرة على تقديم تجربة تسوق شخصية لكل عميلة. مبيعاتنا تضاعفت ثلاث مرات وعميلاتنا يشعرن بأنهن مميزات.',
      en: 'AI gave us the ability to provide a personalized shopping experience for every customer. Our sales tripled and our customers feel truly special.'
    },
    owner: 'Fatima Al-Zahra',
    position: 'Founder & Creative Director',
    videoThumbnail: '/api/placeholder/800/450'
  },
  {
    id: 'khalid-logistics',
    company: "Khalid's Logistics",
    industry: 'Transportation & Logistics',
    logo: '/api/placeholder/120/120',
    background: 'Regional logistics company operating 150+ vehicles across GCC, specializing in last-mile delivery and B2B transportation solutions.',
    challenge: 'Inefficient route planning and manual dispatch systems led to delayed deliveries, high fuel costs, and poor vehicle utilization. Customer complaints were rising.',
    solution: [
      'Implemented AI Route Optimization for intelligent delivery planning',
      'Deployed Fleet Management AI for vehicle tracking and maintenance',
      'Integrated Demand Forecasting AI for capacity planning',
      'Activated Customer Communication AI for real-time updates'
    ],
    agentsUsed: ['Route Optimization AI', 'Fleet AI', 'Forecasting AI', 'Communication AI'],
    timeline: '4 weeks implementation',
    metrics: [
      { label: 'Delivery Time Reduction', before: 100, after: 40, unit: '%', icon: Clock },
      { label: 'Fuel Efficiency', before: 100, after: 135, unit: '%', icon: Zap },
      { label: 'On-Time Delivery Rate', before: 72, after: 96, unit: '%', icon: Target },
      { label: 'Vehicles Utilization', before: 65, after: 92, unit: '%', icon: Package }
    ],
    roi: {
      percentage: 510,
      monetary: '5.8M AED'
    },
    quote: {
      ar: 'في عالم اللوجستيات، الوقت هو المال. الذكاء الاصطناعي وفر لنا كليهما. خفضنا أوقات التسليم بنسبة 60% وزادت أرباحنا بشكل لم نتوقعه.',
      en: 'In logistics, time is money. AI saved us both. We reduced delivery times by 60% and our profits increased beyond our expectations.'
    },
    owner: 'Khalid Mohammed',
    position: 'CEO & Founder',
    videoThumbnail: '/api/placeholder/800/450'
  }
];

const AnimatedCounter: React.FC<{ value: number; suffix?: string; prefix?: string }> = ({ 
  value, 
  suffix = '', 
  prefix = '' 
}) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const isInView = useInView(countRef, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={countRef}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
};

const MetricComparison: React.FC<{ metric: Metric }> = ({ metric }) => {
  const improvement = metric.unit === 'min' || metric.label.includes('Time') 
    ? ((metric.before - metric.after) / metric.before * 100).toFixed(0)
    : ((metric.after - metric.before) / metric.before * 100).toFixed(0);

  const isReduction = metric.unit === 'min' || metric.label.includes('Time');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-indigo-100 rounded-lg">
            <metric.icon className="w-5 h-5 text-indigo-600" />
          </div>
          <h4 className="font-semibold text-gray-800">{metric.label}</h4>
        </div>
        <span className={`text-sm font-bold ${isReduction ? 'text-green-600' : 'text-green-600'}`}>
          {isReduction ? '-' : '+'}{improvement}%
        </span>
      </div>

      <div className="space-y-3">
        <div>
          <div className="flex justify-between items-center mb-1">
            <span className="text-sm text-gray-500">Before</span>
            <span className="text-sm font-medium text-gray-600">
              <AnimatedCounter value={metric.before} suffix={` ${metric.unit}`} />
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '40%' }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="bg-gray-400 h-2 rounded-full"
            />
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center mb-1">
            <span className="text-sm text-gray-500">After</span>
            <span className="text-sm font-bold text-green-600">
              <AnimatedCounter value={metric.after} suffix={` ${metric.unit}`} />
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: isReduction ? '20%' : '80%' }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="bg-green-500 h-2 rounded-full"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const CaseStudyCard: React.FC<{ study: CaseStudy; index: number }> = ({ study, index }) => {
  const [showVideo, setShowVideo] = useState(false);

  const handleExportPDF = () => {
    // In a real implementation, this would generate and download a PDF
    console.log(`Exporting ${study.company} case study as PDF`);
    alert('PDF export functionality would be implemented here');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="mb-20"
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-t-2xl p-8 text-white">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <img 
              src={study.logo} 
              alt={study.company}
              className="w-20 h-20 rounded-xl bg-white p-2"
            />
            <div>
              <h3 className="text-2xl font-bold">{study.company}</h3>
              <p className="text-indigo-200">{study.industry}</p>
            </div>
          </div>
          <button
            onClick={handleExportPDF}
            className="flex items-center gap-2 bg-white/20 hover:bg-white/30 transition-colors px-4 py-2 rounded-lg"
          >
            <Download className="w-4 h-4" />
            Export PDF
          </button>
        </div>

        {/* ROI Highlight */}
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white/10 rounded-xl p-4">
            <p className="text-indigo-200 text-sm mb-1">ROI Achieved</p>
            <p className="text-3xl font-bold">
              <AnimatedCounter value={study.roi.percentage} suffix="%" />
            </p>
          </div>
          <div className="bg-white/10 rounded-xl p-4">
            <p className="text-indigo-200 text-sm mb-1">Revenue Impact</p>
            <p className="text-3xl font-bold">{study.roi.monetary}</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="bg-white rounded-b-2xl shadow-xl p-8">
        {/* Background & Challenge */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <Building className="w-5 h-5 text-indigo-600" />
              Background
            </h4>
            <p className="text-gray-600">{study.background}</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <Target className="w-5 h-5 text-red-600" />
              Challenge
            </h4>
            <p className="text-gray-600">{study.challenge}</p>
          </div>
        </div>

        {/* Solution */}
        <div className="mb-8">
          <h4 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <Zap className="w-5 h-5 text-green-600" />
            Solution Implemented
          </h4>
          <div className="grid md:grid-cols-2 gap-4">
            {study.solution.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <p className="text-gray-600 text-sm">{item}</p>
              </div>
            ))}
          </div>
          
          {/* AI Agents Used */}
          <div className="mt-4 flex flex-wrap gap-2">
            {study.agentsUsed.map((agent, idx) => (
              <span 
                key={idx}
                className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium"
              >
                {agent}
              </span>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-8 bg-gray-50 rounded-xl p-4 inline-flex items-center gap-2">
          <Calendar className="w-5 h-5 text-indigo-600" />
          <span className="text-gray-700 font-medium">Implementation Timeline:</span>
          <span className="text-indigo-600 font-bold">{study.timeline}</span>
        </div>

        {/* Metrics */}
        <div className="mb-8">
          <h4 className="font-semibold text-gray-800 mb-6 text-center text-xl">
            Before vs After Metrics
          </h4>
          <div className="grid md:grid-cols-2 gap-6">
            {study.metrics.map((metric, idx) => (
              <MetricComparison key={idx} metric={metric} />
            ))}
          </div>
        </div>

        {/* Video Testimonial */}
        <div className="mb-8">
          <div className="relative rounded-xl overflow-hidden group cursor-pointer"
               onClick={() => setShowVideo(true)}>
            <img 
              src={study.videoThumbnail} 
              alt="Video testimonial"
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-colors">
              <div className="bg-white rounded-full p-4 group-hover:scale-110 transition-transform">
                <Play className="w-8 h-8 text-indigo-600 ml-1" />
              </div>
            </div>
            <div className="absolute bottom-4 left-4 text-white">
              <p className="font-semibold">Watch Video Testimonial</p>
              <p className="text-sm opacity-90">{study.owner}, {study.position}</p>
            </div>
          </div>
        </div>

        {/* Quote */}
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6">
          <div className="mb-4">
            <p className="text-gray-700 italic text-lg mb-2">"{study.quote.en}"</p>
            <p className="text-gray-600 italic text-right" dir="rtl">"{study.quote.ar}"</p>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-semibold text-gray-800">{study.owner}</p>
              <p className="text-sm text-gray-600">{study.position}</p>
            </div>
            <div className="text-4xl text-indigo-300">"</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const SimilarityTool: React.FC = () => {
  const [industry, setIndustry] = useState('');
  const [size, setSize] = useState('');
  const [challenge, setChallenge] = useState('');
  const [recommendation, setRecommendation] = useState<string | null>(null);

  const findSimilarCase = () => {
    // Simple logic to recommend a case study
    if (industry === 'restaurant' || industry === 'food') {
      setRecommendation('ahmed-restaurant');
    } else if (industry === 'fashion' || industry === 'retail') {
      setRecommendation('fatima-boutique');
    } else if (industry === 'logistics' || industry === 'delivery') {
      setRecommendation('khalid-logistics');
    } else {
      setRecommendation('ahmed-restaurant'); // Default
    }
  };

  const recommendedStudy = recommendation ? 
    caseStudies.find(s => s.id === recommendation) : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 mb-12"
    >
      <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Find a Similar Success Story
      </h3>
      
      <div className="grid md:grid-cols-3 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Your Industry
          </label>
          <input
            type="text"
            value={industry}
            onChange={(e) => setIndustry(e.target.value)}
            placeholder="e.g., restaurant, retail, logistics"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Business Size
          </label>
          <select
            value={size}
            onChange={(e) => setSize(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="">Select size</option>
            <option value="small">1-10 employees</option>
            <option value="medium">11-50 employees</option>
            <option value="large">50+ employees</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Main Challenge
          </label>
          <select
            value={challenge}
            onChange={(e) => setChallenge(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="">Select challenge</option>
            <option value="efficiency">Operational Efficiency</option>
            <option value="sales">Sales Growth</option>
            <option value="customer">Customer Service</option>
            <option value="costs">Cost Reduction</option>
          </select>
        </div>
      </div>
      
      <button
        onClick={findSimilarCase}
        disabled={!industry || !size || !challenge}
        className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        Find Similar Success Story
      </button>
      
      {recommendedStudy && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mt-6 p-6 bg-white rounded-xl shadow-lg"
        >
          <h4 className="font-semibold text-lg text-gray-800 mb-2">
            Recommended for you: {recommendedStudy.company}
          </h4>
          <p className="text-gray-600 mb-4">
            Based on your industry and challenges, this success story shows how a similar business achieved:
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-indigo-600">
                  {recommendedStudy.roi.percentage}%
                </p>
                <p className="text-sm text-gray-600">ROI</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-green-600">
                  {recommendedStudy.roi.monetary}
                </p>
                <p className="text-sm text-gray-600">Revenue Impact</p>
              </div>
            </div>
            <a 
              href={`#${recommendedStudy.id}`}
              className="flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-medium"
            >
              View Case Study
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

const SuccessStories: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Real Success Stories from Real Businesses
            </h1>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
              Discover how UAE businesses transformed their operations with AI automation,
              achieving remarkable ROI and growth in record time.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Similarity Tool */}
        <SimilarityTool />

        {/* Case Studies */}
        {caseStudies.map((study, index) => (
          <div key={study.id} id={study.id}>
            <CaseStudyCard study={study} index={index} />
          </div>
        ))}

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-12 text-center text-white"
        >
          <h2 className="text-3xl font-bold mb-4">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl mb-8 text-indigo-100">
            Join hundreds of UAE businesses already transforming with AI
          </p>
          <button className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg">
            Start Your AI Journey Today
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default SuccessStories;