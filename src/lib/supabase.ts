// Commented out for marketing site - no database needed
// import { createClient } from '@supabase/supabase-js';

// const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
// const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Mock supabase for marketing site
export const supabase = null;

// Database Types
export interface Company {
  id: string;
  created_at: string;
  updated_at: string;
  company_name: string;
  company_name_ar?: string;
  trade_license?: string;
  industry: string;
  business_type: string;
  email: string;
  phone?: string;
  whatsapp_number?: string;
  website_url?: string;
  emirates: string;
  business_address?: string;
  po_box?: string;
  monthly_revenue: number;
  employee_count: number;
  years_in_business: number;
  languages_used: string[];
  ai_readiness_score: number;
  transformation_stage: string;
  subscription_plan: string;
  subscription_status: string;
  subscription_start_date?: string;
  subscription_end_date?: string;
  monthly_subscription_fee: number;
  target_customers: string[];
  peak_seasons: string[];
  cultural_considerations: string[];
  uae_charter_compliant: boolean;
  compliance_score: number;
  last_compliance_check?: string;
  referral_source?: string;
  onboarding_completed: boolean;
  demo_completed: boolean;
  first_value_achieved: boolean;
  success_metrics: Record<string, any>;
  baseline_metrics: Record<string, any>;
  current_metrics: Record<string, any>;
  roi_percentage: number;
}

export interface User {
  id: string;
  created_at: string;
  updated_at: string;
  full_name: string;
  full_name_ar?: string;
  email: string;
  phone?: string;
  avatar_url?: string;
  user_type: 'customer' | 'human_coach' | 'admin' | 'ai_agent';
  is_active: boolean;
  preferred_language: 'en' | 'ar';
  timezone: string;
  specializations?: string[];
  certifications?: string[];
  languages_spoken: string[];
  years_experience?: number;
  hourly_rate?: number;
  job_title?: string;
  department?: string;
  business_role?: string;
  ai_comfort_level: number;
  last_login?: string;
  total_sessions: number;
  total_conversation_time: number;
  notification_preferences: Record<string, boolean>;
}

export interface Conversation {
  id: string;
  created_at: string;
  updated_at: string;
  company_id?: string;
  user_id?: string;
  ai_agent_id?: string;
  human_coach_id?: string;
  conversation_type: string;
  title?: string;
  primary_language: string;
  industry_context?: string;
  business_scenario?: string;
  status: string;
  satisfaction_rating?: number;
  total_messages: number;
  duration_minutes: number;
  resolution_achieved: boolean;
  cultural_sensitivity_score: number;
  uae_charter_compliance_score: number;
}

export interface Message {
  id: string;
  created_at: string;
  conversation_id: string;
  sender_id?: string;
  sender_type: 'user' | 'ai_agent' | 'human_coach';
  content: string;
  content_ar?: string;
  message_type: string;
  ai_confidence_score?: number;
  requires_human_review: boolean;
  human_approved: boolean;
  detected_language?: string;
  is_mixed_language: boolean;
  response_time_seconds?: number;
  tokens_used?: number;
  sentiment?: string;
  business_intent?: string;
  cultural_references?: string[];
}

export interface BusinessTransformation {
  id: string;
  created_at: string;
  updated_at: string;
  company_id: string;
  transformation_type: string;
  start_date: string;
  target_completion_date?: string;
  actual_completion_date?: string;
  baseline_metrics: Record<string, any>;
  current_metrics: Record<string, any>;
  target_metrics: Record<string, any>;
  completion_percentage: number;
  milestones_completed: number;
  total_milestones: number;
  time_saved_hours: number;
  cost_reduction_aed: number;
  revenue_increase_aed: number;
  cultural_adaptation_score: number;
  employee_satisfaction_score: number;
  status: string;
}

// Database Functions - Commented out for marketing site
export const createConversation = async (data: Partial<Conversation>) => {
  // Mock response for marketing site
  return { data: null, error: new Error('Database not available in marketing site') };
};

export const addMessage = async (data: Partial<Message>) => {
  // Mock response for marketing site
  return { data: null, error: new Error('Database not available in marketing site') };
};

export const getCompanyConversations = async (companyId: string) => {
  // Mock response for marketing site
  return { data: [], error: null };
};

export const updateCompanyMetrics = async (companyId: string, metrics: Record<string, any>) => {
  // Mock response for marketing site
  return { data: null, error: new Error('Database not available in marketing site') };
};

export const calculateCompanyROI = async (companyId: string) => {
  // Mock response for marketing site
  return { data: { roi: 250 }, error: null };
};

export const updateAIReadinessScore = async (companyId: string) => {
  // Mock response for marketing site
  return { data: { score: 75 }, error: null };
};

export const getCompanyPerformanceDashboard = async () => {
  // Mock response for marketing site
  return { data: [], error: null };
};

export const getAIAgentPerformance = async () => {
  // Mock response for marketing site
  return { data: [], error: null };
};

export const getMonthlyRevenueAnalytics = async () => {
  // Mock response for marketing site
  return { data: [], error: null };
};

// Real-time subscriptions - Mocked for marketing site
export const subscribeToConversations = (companyId: string, callback: (payload: any) => void) => {
  // Return mock subscription
  return {
    unsubscribe: () => {}
  };
};

export const subscribeToMessages = (conversationId: string, callback: (payload: any) => void) => {
  // Return mock subscription
  return {
    unsubscribe: () => {}
  };
};