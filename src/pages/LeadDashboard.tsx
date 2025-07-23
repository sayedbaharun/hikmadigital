import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  TrendingUp, 
  Calendar, 
  Phone, 
  Mail, 
  MessageCircle,
  Filter,
  Download,
  Eye,
  CheckCircle,
  Clock,
  AlertCircle,
  BarChart3,
  MapPin,
  Building
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
// import { supabase } from '../lib/supabase'; // Removed for marketing site

interface Lead {
  id: string;
  created_at: string;
  company_name: string;
  company_name_ar?: string;
  contact_name: string;
  email: string;
  phone: string;
  whatsapp_number?: string;
  industry: string;
  emirates: string;
  monthly_revenue_range: string;
  employee_count_range: string;
  preferred_language: string;
  ai_readiness_score: number;
  assessment_responses: any;
  personalized_plan: any[];
  lead_source: string;
  lead_status: string;
  follow_up_priority: string;
  conversion_probability: number;
  last_contact_date?: string;
  next_follow_up_date?: string;
  total_touchpoints: number;
  consultation_scheduled: boolean;
  consultation_completed: boolean;
}

const LeadDashboard: React.FC = () => {
  const { language, isRTL } = useLanguage();
  const [leads, setLeads] = useState<Lead[]>([]);
  const [filteredLeads, setFilteredLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [filters, setFilters] = useState({
    status: 'all',
    priority: 'all',
    industry: 'all',
    emirates: 'all',
    scoreRange: 'all'
  });

  // Load leads from database
  useEffect(() => {
    loadLeads();
  }, []);

  // Apply filters
  useEffect(() => {
    applyFilters();
  }, [leads, filters]);

  const loadLeads = async () => {
    try {
      // Mock data for marketing site
      const mockLeads: Lead[] = [
        {
          id: '1',
          created_at: new Date().toISOString(),
          company_name: 'Dubai Delights Restaurant',
          contact_name: 'Ahmed Hassan',
          email: 'ahmed@dubaidel.ae',
          phone: '+971 50 123 4567',
          whatsapp_number: '+971 50 123 4567',
          industry: 'restaurant',
          emirates: 'dubai',
          monthly_revenue_range: '100k_200k',
          employee_count_range: '16_50',
          preferred_language: 'en',
          ai_readiness_score: 75,
          assessment_responses: {},
          personalized_plan: [],
          lead_source: 'ai_readiness_assessment',
          lead_status: 'new',
          follow_up_priority: 'HIGH',
          conversion_probability: 85,
          total_touchpoints: 0,
          consultation_scheduled: false,
          consultation_completed: false
        },
        {
          id: '2',
          created_at: new Date(Date.now() - 86400000).toISOString(),
          company_name: 'Al Futtaim Retail',
          company_name_ar: 'الفطيم للتجزئة',
          contact_name: 'Sara Al Maktoum',
          email: 'sara@alfuttaim.ae',
          phone: '+971 4 567 8901',
          industry: 'retail',
          emirates: 'dubai',
          monthly_revenue_range: '500k_1m',
          employee_count_range: '51_100',
          preferred_language: 'ar',
          ai_readiness_score: 82,
          assessment_responses: {},
          personalized_plan: [],
          lead_source: 'ai_readiness_assessment',
          lead_status: 'contacted',
          follow_up_priority: 'HIGH',
          conversion_probability: 90,
          total_touchpoints: 2,
          consultation_scheduled: true,
          consultation_completed: false
        }
      ];
      setLeads(mockLeads);
    } catch (error) {
      console.error('Error loading leads:', error);
    } finally {
      setLoading(false);
    }
  };

  const applyFilters = () => {
    let filtered = [...leads];

    if (filters.status !== 'all') {
      filtered = filtered.filter(lead => lead.lead_status === filters.status);
    }

    if (filters.priority !== 'all') {
      filtered = filtered.filter(lead => lead.follow_up_priority === filters.priority);
    }

    if (filters.industry !== 'all') {
      filtered = filtered.filter(lead => lead.industry === filters.industry);
    }

    if (filters.emirates !== 'all') {
      filtered = filtered.filter(lead => lead.emirates === filters.emirates);
    }

    if (filters.scoreRange !== 'all') {
      const [min, max] = filters.scoreRange.split('-').map(Number);
      filtered = filtered.filter(lead => 
        lead.ai_readiness_score >= min && lead.ai_readiness_score <= max
      );
    }

    setFilteredLeads(filtered);
  };

  const updateLeadStatus = async (leadId: string, status: string) => {
    try {
      // Mock update for marketing site
      setLeads(prevLeads => 
        prevLeads.map(lead => 
          lead.id === leadId 
            ? { ...lead, lead_status: status, last_contact_date: new Date().toISOString() }
            : lead
        )
      );
      alert(language === 'ar' ? 'تم تحديث حالة العميل المحتمل' : 'Lead status updated');
    } catch (error) {
      console.error('Error updating lead status:', error);
    }
  };

  const scheduleFollowUp = async (leadId: string, date: string) => {
    try {
      // Mock update for marketing site
      setLeads(prevLeads => 
        prevLeads.map(lead => 
          lead.id === leadId 
            ? { 
                ...lead, 
                next_follow_up_date: date,
                total_touchpoints: (lead.total_touchpoints || 0) + 1
              }
            : lead
        )
      );
      alert(language === 'ar' ? 'تم جدولة المتابعة' : 'Follow-up scheduled');
    } catch (error) {
      console.error('Error scheduling follow-up:', error);
    }
  };

  const exportLeads = () => {
    const csvContent = [
      ['Company Name', 'Contact Name', 'Email', 'Phone', 'Industry', 'AI Score', 'Status', 'Priority'],
      ...filteredLeads.map(lead => [
        lead.company_name,
        lead.contact_name,
        lead.email,
        lead.phone,
        lead.industry,
        lead.ai_readiness_score,
        lead.lead_status,
        lead.follow_up_priority
      ])
    ].map(row => row.join(',')).join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `hikma-leads-${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // Calculate dashboard metrics
  const metrics = {
    totalLeads: leads.length,
    newLeads: leads.filter(l => l.lead_status === 'new').length,
    qualifiedLeads: leads.filter(l => l.lead_status === 'qualified').length,
    avgScore: leads.length > 0 ? Math.round(leads.reduce((sum, l) => sum + l.ai_readiness_score, 0) / leads.length) : 0,
    conversionRate: leads.length > 0 ? Math.round((leads.filter(l => l.lead_status === 'converted').length / leads.length) * 100) : 0,
    highPriorityLeads: leads.filter(l => l.follow_up_priority === 'HIGH' || l.follow_up_priority === 'URGENT').length
  };

  const statusColors = {
    new: 'bg-blue-500/20 text-blue-400',
    contacted: 'bg-yellow-500/20 text-yellow-400',
    qualified: 'bg-green-500/20 text-green-400',
    demo_scheduled: 'bg-purple-500/20 text-purple-400',
    converted: 'bg-green-600/20 text-green-300',
    lost: 'bg-red-500/20 text-red-400'
  };

  const priorityColors = {
    LOW: 'bg-gray-500/20 text-gray-400',
    MEDIUM: 'bg-blue-500/20 text-blue-400',
    HIGH: 'bg-orange-500/20 text-orange-400',
    URGENT: 'bg-red-500/20 text-red-400'
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse space-y-8">
            <div className="h-8 bg-gray-700 rounded w-1/3"></div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="h-24 bg-gray-700 rounded"></div>
              ))}
            </div>
            <div className="h-96 bg-gray-700 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className={`text-2xl text-primary ${isRTL ? 'font-arabic' : 'font-inter'}`}>
              {language === 'ar' ? 'لوحة إدارة العملاء المحتملين' : 'Lead Management Dashboard'}
            </h1>
            <p className={`text-neutral-400 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
              {language === 'ar' ? 'إدارة ومتابعة العملاء المحتملين من تقييم الذكاء الاصطناعي' : 'Manage and track leads from AI readiness assessments'}
            </p>
          </div>
          <button
            onClick={exportLeads}
            className={`btn-primary ${isRTL ? 'font-arabic' : 'font-inter'}`}
          >
            <Download className="w-4 h-4" />
            <span>{language === 'ar' ? 'تصدير' : 'Export'}</span>
          </button>
        </div>

        {/* Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 mb-8">
          <div className="glass-card p-6 text-center">
            <Users className="w-8 h-8 text-blue-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-primary">{metrics.totalLeads}</div>
            <div className={`text-sm text-neutral-400 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
              {language === 'ar' ? 'إجمالي العملاء' : 'Total Leads'}
            </div>
          </div>

          <div className="glass-card p-6 text-center">
            <Clock className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-primary">{metrics.newLeads}</div>
            <div className={`text-sm text-neutral-400 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
              {language === 'ar' ? 'عملاء جدد' : 'New Leads'}
            </div>
          </div>

          <div className="glass-card p-6 text-center">
            <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-primary">{metrics.qualifiedLeads}</div>
            <div className={`text-sm text-neutral-400 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
              {language === 'ar' ? 'عملاء مؤهلون' : 'Qualified'}
            </div>
          </div>

          <div className="glass-card p-6 text-center">
            <BarChart3 className="w-8 h-8 text-purple-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-primary">{metrics.avgScore}%</div>
            <div className={`text-sm text-neutral-400 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
              {language === 'ar' ? 'متوسط النقاط' : 'Avg Score'}
            </div>
          </div>

          <div className="glass-card p-6 text-center">
            <TrendingUp className="w-8 h-8 text-green-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-primary">{metrics.conversionRate}%</div>
            <div className={`text-sm text-neutral-400 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
              {language === 'ar' ? 'معدل التحويل' : 'Conversion'}
            </div>
          </div>

          <div className="glass-card p-6 text-center">
            <AlertCircle className="w-8 h-8 text-red-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-primary">{metrics.highPriorityLeads}</div>
            <div className={`text-sm text-neutral-400 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
              {language === 'ar' ? 'أولوية عالية' : 'High Priority'}
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="glass-card p-6 mb-8">
          <div className="flex items-center space-x-4 rtl:space-x-reverse mb-4">
            <Filter className="w-5 h-5 text-gray-400" />
            <h3 className={`text-lg font-medium text-primary ${isRTL ? 'font-arabic' : 'font-inter'}`}>
              {language === 'ar' ? 'تصفية النتائج' : 'Filter Results'}
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <select
              value={filters.status}
              onChange={(e) => setFilters(prev => ({ ...prev, status: e.target.value }))}
              className={`px-3 py-2 bg-background/50 border border-gray-700 rounded-lg text-primary ${isRTL ? 'font-arabic' : 'font-inter'}`}
            >
              <option value="all">{language === 'ar' ? 'جميع الحالات' : 'All Status'}</option>
              <option value="new">{language === 'ar' ? 'جديد' : 'New'}</option>
              <option value="contacted">{language === 'ar' ? 'تم التواصل' : 'Contacted'}</option>
              <option value="qualified">{language === 'ar' ? 'مؤهل' : 'Qualified'}</option>
              <option value="demo_scheduled">{language === 'ar' ? 'عرض مجدول' : 'Demo Scheduled'}</option>
              <option value="converted">{language === 'ar' ? 'محول' : 'Converted'}</option>
            </select>

            <select
              value={filters.priority}
              onChange={(e) => setFilters(prev => ({ ...prev, priority: e.target.value }))}
              className={`px-3 py-2 bg-background/50 border border-gray-700 rounded-lg text-primary ${isRTL ? 'font-arabic' : 'font-inter'}`}
            >
              <option value="all">{language === 'ar' ? 'جميع الأولويات' : 'All Priority'}</option>
              <option value="URGENT">{language === 'ar' ? 'عاجل' : 'Urgent'}</option>
              <option value="HIGH">{language === 'ar' ? 'عالي' : 'High'}</option>
              <option value="MEDIUM">{language === 'ar' ? 'متوسط' : 'Medium'}</option>
              <option value="LOW">{language === 'ar' ? 'منخفض' : 'Low'}</option>
            </select>

            <select
              value={filters.industry}
              onChange={(e) => setFilters(prev => ({ ...prev, industry: e.target.value }))}
              className={`px-3 py-2 bg-background/50 border border-gray-700 rounded-lg text-primary ${isRTL ? 'font-arabic' : 'font-inter'}`}
            >
              <option value="all">{language === 'ar' ? 'جميع الصناعات' : 'All Industries'}</option>
              <option value="restaurant">{language === 'ar' ? 'مطاعم' : 'Restaurant'}</option>
              <option value="retail">{language === 'ar' ? 'تجزئة' : 'Retail'}</option>
              <option value="logistics">{language === 'ar' ? 'لوجستيات' : 'Logistics'}</option>
              <option value="healthcare">{language === 'ar' ? 'صحة' : 'Healthcare'}</option>
              <option value="realestate">{language === 'ar' ? 'عقارات' : 'Real Estate'}</option>
            </select>

            <select
              value={filters.emirates}
              onChange={(e) => setFilters(prev => ({ ...prev, emirates: e.target.value }))}
              className={`px-3 py-2 bg-background/50 border border-gray-700 rounded-lg text-primary ${isRTL ? 'font-arabic' : 'font-inter'}`}
            >
              <option value="all">{language === 'ar' ? 'جميع الإمارات' : 'All Emirates'}</option>
              <option value="dubai">{language === 'ar' ? 'دبي' : 'Dubai'}</option>
              <option value="abu_dhabi">{language === 'ar' ? 'أبوظبي' : 'Abu Dhabi'}</option>
              <option value="sharjah">{language === 'ar' ? 'الشارقة' : 'Sharjah'}</option>
              <option value="ajman">{language === 'ar' ? 'عجمان' : 'Ajman'}</option>
            </select>

            <select
              value={filters.scoreRange}
              onChange={(e) => setFilters(prev => ({ ...prev, scoreRange: e.target.value }))}
              className={`px-3 py-2 bg-background/50 border border-gray-700 rounded-lg text-primary ${isRTL ? 'font-arabic' : 'font-inter'}`}
            >
              <option value="all">{language === 'ar' ? 'جميع النقاط' : 'All Scores'}</option>
              <option value="0-30">{language === 'ar' ? '0-30 (منخفض)' : '0-30 (Low)'}</option>
              <option value="31-60">{language === 'ar' ? '31-60 (متوسط)' : '31-60 (Medium)'}</option>
              <option value="61-100">{language === 'ar' ? '61-100 (عالي)' : '61-100 (High)'}</option>
            </select>
          </div>
        </div>

        {/* Leads Table */}
        <div className="glass-card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-white/5">
                <tr>
                  <th className={`px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider ${isRTL ? 'font-arabic text-right' : 'font-inter'}`}>
                    {language === 'ar' ? 'الشركة' : 'Company'}
                  </th>
                  <th className={`px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider ${isRTL ? 'font-arabic text-right' : 'font-inter'}`}>
                    {language === 'ar' ? 'جهة الاتصال' : 'Contact'}
                  </th>
                  <th className={`px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider ${isRTL ? 'font-arabic text-right' : 'font-inter'}`}>
                    {language === 'ar' ? 'الصناعة' : 'Industry'}
                  </th>
                  <th className={`px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider ${isRTL ? 'font-arabic text-right' : 'font-inter'}`}>
                    {language === 'ar' ? 'نقاط الذكاء الاصطناعي' : 'AI Score'}
                  </th>
                  <th className={`px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider ${isRTL ? 'font-arabic text-right' : 'font-inter'}`}>
                    {language === 'ar' ? 'الحالة' : 'Status'}
                  </th>
                  <th className={`px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider ${isRTL ? 'font-arabic text-right' : 'font-inter'}`}>
                    {language === 'ar' ? 'الأولوية' : 'Priority'}
                  </th>
                  <th className={`px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider ${isRTL ? 'font-arabic text-right' : 'font-inter'}`}>
                    {language === 'ar' ? 'الإجراءات' : 'Actions'}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {filteredLeads.map((lead) => (
                  <tr key={lead.id} className="hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className={`text-sm font-medium text-primary ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                          {language === 'ar' && lead.company_name_ar ? lead.company_name_ar : lead.company_name}
                        </div>
                        <div className="flex items-center space-x-2 rtl:space-x-reverse text-xs text-gray-400">
                          <MapPin className="w-3 h-3" />
                          <span>{lead.emirates}</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className={`text-sm text-primary ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                          {lead.contact_name}
                        </div>
                        <div className="text-xs text-gray-400">{lead.email}</div>
                        <div className="text-xs text-gray-400">{lead.phone}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center space-x-2 rtl:space-x-reverse">
                        <Building className="w-4 h-4 text-gray-400" />
                        <span className={`text-sm text-secondary capitalize ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                          {lead.industry}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center space-x-2 rtl:space-x-reverse">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                          lead.ai_readiness_score >= 70 ? 'bg-green-500/20 text-green-400' :
                          lead.ai_readiness_score >= 40 ? 'bg-yellow-500/20 text-yellow-400' :
                          'bg-red-500/20 text-red-400'
                        }`}>
                          {lead.ai_readiness_score}
                        </div>
                        <span className="text-xs text-gray-400">
                          {lead.conversion_probability}% {language === 'ar' ? 'احتمال' : 'likely'}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <select
                        value={lead.lead_status}
                        onChange={(e) => updateLeadStatus(lead.id, e.target.value)}
                        className={`px-2 py-1 rounded text-xs ${statusColors[lead.lead_status]} bg-transparent border-0 cursor-pointer`}
                      >
                        <option value="new">New</option>
                        <option value="contacted">Contacted</option>
                        <option value="qualified">Qualified</option>
                        <option value="demo_scheduled">Demo Scheduled</option>
                        <option value="converted">Converted</option>
                        <option value="lost">Lost</option>
                      </select>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 rounded text-xs ${priorityColors[lead.follow_up_priority]}`}>
                        {lead.follow_up_priority}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center space-x-2 rtl:space-x-reverse">
                        <button
                          onClick={() => setSelectedLead(lead)}
                          className="text-blue-400 hover:text-blue-300 transition-colors"
                          title={language === 'ar' ? 'عرض التفاصيل' : 'View Details'}
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        <a
                          href={`mailto:${lead.email}`}
                          className="text-green-400 hover:text-green-300 transition-colors"
                          title={language === 'ar' ? 'إرسال بريد إلكتروني' : 'Send Email'}
                        >
                          <Mail className="w-4 h-4" />
                        </a>
                        <a
                          href={`tel:${lead.phone}`}
                          className="text-yellow-400 hover:text-yellow-300 transition-colors"
                          title={language === 'ar' ? 'اتصال' : 'Call'}
                        >
                          <Phone className="w-4 h-4" />
                        </a>
                        {lead.whatsapp_number && (
                          <a
                            href={`https://wa.me/${lead.whatsapp_number.replace(/[^0-9]/g, '')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-green-500 hover:text-green-400 transition-colors"
                            title={language === 'ar' ? 'واتساب' : 'WhatsApp'}
                          >
                            <MessageCircle className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Lead Detail Modal */}
        {selectedLead && (
          <div className="fixed inset-0 bg-neutral-900/80 flex items-center justify-center z-50 p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="glass-card p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className={`text-xl font-medium text-primary ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                  {language === 'ar' ? 'تفاصيل العميل المحتمل' : 'Lead Details'}
                </h3>
                <button
                  onClick={() => setSelectedLead(null)}
                  className="text-neutral-400 hover:text-primary transition-colors"
                >
                  ×
                </button>
              </div>

              <div className="space-y-6">
                {/* Company Info */}
                <div>
                  <h4 className={`text-lg font-medium text-white mb-3 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                    {language === 'ar' ? 'معلومات الشركة' : 'Company Information'}
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className={`text-sm text-gray-400 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                        {language === 'ar' ? 'اسم الشركة' : 'Company Name'}
                      </label>
                      <p className={`text-primary ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                        {language === 'ar' && selectedLead.company_name_ar ? selectedLead.company_name_ar : selectedLead.company_name}
                      </p>
                    </div>
                    <div>
                      <label className={`text-sm text-gray-400 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                        {language === 'ar' ? 'الصناعة' : 'Industry'}
                      </label>
                      <p className={`text-white capitalize ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                        {selectedLead.industry}
                      </p>
                    </div>
                    <div>
                      <label className={`text-sm text-gray-400 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                        {language === 'ar' ? 'الإيرادات الشهرية' : 'Monthly Revenue'}
                      </label>
                      <p className={`text-primary ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                        {selectedLead.monthly_revenue_range}
                      </p>
                    </div>
                    <div>
                      <label className={`text-sm text-gray-400 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                        {language === 'ar' ? 'عدد الموظفين' : 'Employee Count'}
                      </label>
                      <p className={`text-primary ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                        {selectedLead.employee_count_range}
                      </p>
                    </div>
                  </div>
                </div>

                {/* AI Readiness Score */}
                <div>
                  <h4 className={`text-lg font-medium text-white mb-3 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                    {language === 'ar' ? 'نقاط جاهزية الذكاء الاصطناعي' : 'AI Readiness Score'}
                  </h4>
                  <div className="flex items-center space-x-4 rtl:space-x-reverse">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold ${
                      selectedLead.ai_readiness_score >= 70 ? 'bg-green-500/20 text-green-400' :
                      selectedLead.ai_readiness_score >= 40 ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-red-500/20 text-red-400'
                    }`}>
                      {selectedLead.ai_readiness_score}
                    </div>
                    <div>
                      <p className={`text-primary font-medium ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                        {selectedLead.ai_readiness_score >= 70 ? (language === 'ar' ? 'جاهز للتكامل المتقدم' : 'Ready for Advanced Integration') :
                         selectedLead.ai_readiness_score >= 40 ? (language === 'ar' ? 'جاهز لتنفيذ الذكاء الاصطناعي' : 'Ready for AI Implementation') :
                         (language === 'ar' ? 'يحتاج بناء الأساس' : 'Needs Foundation Building')}
                      </p>
                      <p className={`text-sm text-gray-400 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                        {selectedLead.conversion_probability}% {language === 'ar' ? 'احتمال التحويل' : 'conversion probability'}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Recommendations */}
                {selectedLead.personalized_plan && selectedLead.personalized_plan.length > 0 && (
                  <div>
                    <h4 className={`text-lg font-medium text-primary mb-3 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                      {language === 'ar' ? 'التوصيات المخصصة' : 'Personalized Recommendations'}
                    </h4>
                    <div className="space-y-3">
                      {selectedLead.personalized_plan.slice(0, 2).map((rec, index) => (
                        <div key={index} className="p-4 bg-white/5 rounded-lg">
                          <div className="flex items-center justify-between mb-2">
                            <span className={`px-2 py-1 rounded text-xs ${
                              rec.priority === 'URGENT' ? 'bg-red-500/20 text-red-400' :
                              rec.priority === 'HIGH' ? 'bg-orange-500/20 text-orange-400' :
                              'bg-blue-500/20 text-blue-400'
                            }`}>
                              {rec.priority}
                            </span>
                            <span className="text-xs text-gray-400">{rec.timeline}</span>
                          </div>
                          <h5 className={`font-medium text-primary mb-1 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                            {language === 'ar' ? rec.titleAr : rec.title}
                          </h5>
                          <p className={`text-sm text-secondary ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                            {rec.expectedROI}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Contact Actions */}
                <div className="flex space-x-4 rtl:space-x-reverse pt-4 border-t border-gray-700">
                  <a
                    href={`mailto:${selectedLead.email}?subject=Hikma Digital AI Consultation&body=Hello ${selectedLead.contact_name}, thank you for completing our AI readiness assessment...`}
                    className={`btn-primary ${isRTL ? 'font-arabic' : 'font-inter'}`}
                  >
                    <Mail className="w-4 h-4" />
                    <span>{language === 'ar' ? 'إرسال بريد إلكتروني' : 'Send Email'}</span>
                  </a>
                  
                  {selectedLead.whatsapp_number && (
                    <a
                      href={`https://wa.me/${selectedLead.whatsapp_number.replace(/[^0-9]/g, '')}?text=Hello ${selectedLead.contact_name}, thank you for your interest in Hikma Digital...`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`btn-secondary ${isRTL ? 'font-arabic' : 'font-inter'}`}
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>{language === 'ar' ? 'واتساب' : 'WhatsApp'}</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LeadDashboard;