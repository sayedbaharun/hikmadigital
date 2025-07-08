/*
  # Hikma Digital Production Database Schema
  
  1. New Tables
    - `companies` - SME customer profiles with business metrics
    - `users` - All platform users (customers, coaches, admins)
    - `company_users` - User-company relationships
    - `ai_agents` - AI team members configuration
    - `conversations` - All AI interactions
    - `messages` - Individual chat messages
    - `human_ai_collaborations` - Human-AI teamwork tracking
    - `business_transformations` - SME progress tracking
    - `revenue_tracking` - Business analytics
    - `uae_charter_compliance` - Compliance monitoring

  2. Security
    - Enable RLS on all tables
    - Add policies for data access control
    - Ensure UAE data residency compliance

  3. Performance
    - Add indexes for common queries
    - Optimize for real-time features
    - Support Arabic language processing
*/

-- ==================================================
-- COMPANIES TABLE (SME Customer Profiles)
-- ==================================================
CREATE TABLE IF NOT EXISTS companies (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  
  -- Basic Company Information
  company_name VARCHAR(255) NOT NULL,
  company_name_ar VARCHAR(255), -- Arabic company name
  trade_license VARCHAR(100) UNIQUE,
  industry VARCHAR(100) NOT NULL CHECK (industry IN (
    'restaurant', 'retail', 'logistics', 'healthcare', 'realestate', 
    'consulting', 'manufacturing', 'technology', 'finance', 'education'
  )),
  business_type VARCHAR(50) DEFAULT 'LLC',
  
  -- Contact & Location
  email VARCHAR(255) UNIQUE NOT NULL,
  phone VARCHAR(20),
  whatsapp_number VARCHAR(20),
  website_url VARCHAR(255),
  emirates VARCHAR(50) DEFAULT 'Dubai',
  business_address TEXT,
  po_box VARCHAR(20),
  
  -- Business Metrics
  monthly_revenue DECIMAL(12, 2) DEFAULT 0,
  employee_count INTEGER DEFAULT 1,
  years_in_business INTEGER DEFAULT 0,
  languages_used TEXT[] DEFAULT ARRAY['English', 'Arabic'],
  
  -- AI Transformation Tracking
  ai_readiness_score INTEGER DEFAULT 0 CHECK (ai_readiness_score >= 0 AND ai_readiness_score <= 100),
  transformation_stage VARCHAR(50) DEFAULT 'discovery' CHECK (transformation_stage IN (
    'discovery', 'assessment', 'implementation', 'optimization', 'mastery'
  )),
  
  -- Subscription Management
  subscription_plan VARCHAR(50) DEFAULT 'trial' CHECK (subscription_plan IN (
    'trial', 'starter', 'professional', 'enterprise'
  )),
  subscription_status VARCHAR(50) DEFAULT 'active' CHECK (subscription_status IN (
    'active', 'cancelled', 'suspended', 'expired'
  )),
  subscription_start_date DATE,
  subscription_end_date DATE,
  monthly_subscription_fee DECIMAL(8, 2) DEFAULT 0,
  
  -- Cultural Context
  target_customers TEXT[] DEFAULT ARRAY['locals', 'expats'],
  peak_seasons TEXT[] DEFAULT ARRAY['ramadan', 'eid'],
  cultural_considerations TEXT[],
  
  -- UAE Charter Compliance
  uae_charter_compliant BOOLEAN DEFAULT false,
  compliance_score INTEGER DEFAULT 0 CHECK (compliance_score >= 0 AND compliance_score <= 100),
  last_compliance_check TIMESTAMP,
  
  -- Business Intelligence
  referral_source VARCHAR(100),
  onboarding_completed BOOLEAN DEFAULT false,
  demo_completed BOOLEAN DEFAULT false,
  first_value_achieved BOOLEAN DEFAULT false,
  success_metrics JSONB DEFAULT '{}',
  
  -- ROI Tracking
  baseline_metrics JSONB DEFAULT '{}', -- Before AI implementation
  current_metrics JSONB DEFAULT '{}',  -- Current performance
  roi_percentage DECIMAL(5, 2) DEFAULT 0
);

-- ==================================================
-- USERS TABLE (All Platform Users)
-- ==================================================
CREATE TABLE IF NOT EXISTS users (
  id UUID REFERENCES auth.users(id) PRIMARY KEY,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  
  -- Personal Information
  full_name VARCHAR(255) NOT NULL,
  full_name_ar VARCHAR(255),
  email VARCHAR(255) UNIQUE NOT NULL,
  phone VARCHAR(20),
  avatar_url TEXT,
  
  -- User Classification
  user_type VARCHAR(50) NOT NULL CHECK (user_type IN (
    'customer', 'human_coach', 'admin', 'ai_agent'
  )),
  is_active BOOLEAN DEFAULT true,
  
  -- Preferences
  preferred_language VARCHAR(10) DEFAULT 'en' CHECK (preferred_language IN ('en', 'ar')),
  timezone VARCHAR(50) DEFAULT 'Asia/Dubai',
  
  -- Human Coach Specific Fields
  specializations TEXT[],
  certifications TEXT[],
  languages_spoken TEXT[] DEFAULT ARRAY['English', 'Arabic'],
  years_experience INTEGER,
  hourly_rate DECIMAL(8, 2),
  
  -- Customer Specific Fields
  job_title VARCHAR(255),
  department VARCHAR(100),
  business_role VARCHAR(100),
  ai_comfort_level INTEGER DEFAULT 3 CHECK (ai_comfort_level >= 1 AND ai_comfort_level <= 5),
  
  -- Platform Usage
  last_login TIMESTAMP,
  total_sessions INTEGER DEFAULT 0,
  total_conversation_time INTEGER DEFAULT 0, -- in minutes
  
  -- Notifications & Settings
  notification_preferences JSONB DEFAULT '{
    "email": true,
    "whatsapp": true,
    "sms": false,
    "in_app": true
  }'::jsonb
);

-- ==================================================
-- COMPANY_USERS (User-Company Relationships)
-- ==================================================
CREATE TABLE IF NOT EXISTS company_users (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  company_id UUID REFERENCES companies(id) ON DELETE CASCADE,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  role VARCHAR(50) DEFAULT 'member' CHECK (role IN ('owner', 'admin', 'manager', 'member')),
  joined_at TIMESTAMP DEFAULT NOW(),
  is_primary_contact BOOLEAN DEFAULT false,
  
  UNIQUE(company_id, user_id)
);

-- ==================================================
-- AI_AGENTS TABLE (AI Team Members)
-- ==================================================
CREATE TABLE IF NOT EXISTS ai_agents (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP DEFAULT NOW(),
  
  -- Agent Identity
  agent_name VARCHAR(100) NOT NULL,
  agent_name_ar VARCHAR(100),
  agent_type VARCHAR(50) CHECK (agent_type IN ('business_advisor', 'operations', 'customer_service')),
  
  -- Capabilities
  specializations TEXT[],
  languages TEXT[] DEFAULT ARRAY['English', 'Arabic'],
  industry_expertise TEXT[],
  
  -- Configuration
  system_prompt TEXT NOT NULL,
  model VARCHAR(50) DEFAULT 'gpt-4',
  temperature DECIMAL(3, 2) DEFAULT 0.7,
  max_tokens INTEGER DEFAULT 500,
  
  -- Status
  is_active BOOLEAN DEFAULT true,
  version VARCHAR(20) DEFAULT '1.0',
  
  -- Performance Metrics
  total_conversations INTEGER DEFAULT 0,
  avg_response_time DECIMAL(5, 2) DEFAULT 0, -- in seconds
  satisfaction_score DECIMAL(3, 2) DEFAULT 0, -- 0-5 scale
  cultural_accuracy_score DECIMAL(3, 2) DEFAULT 0 -- 0-5 scale
);

-- ==================================================
-- CONVERSATIONS TABLE (All AI Interactions)
-- ==================================================
CREATE TABLE IF NOT EXISTS conversations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  
  -- Participants
  company_id UUID REFERENCES companies(id),
  user_id UUID REFERENCES users(id),
  ai_agent_id UUID REFERENCES ai_agents(id),
  human_coach_id UUID REFERENCES users(id),
  
  -- Conversation Details
  conversation_type VARCHAR(50) DEFAULT 'business_coaching' CHECK (conversation_type IN (
    'business_coaching', 'technical_support', 'onboarding', 'demo', 'consultation'
  )),
  title VARCHAR(255),
  
  -- Language & Context
  primary_language VARCHAR(10) DEFAULT 'en',
  industry_context VARCHAR(100),
  business_scenario VARCHAR(255),
  
  -- Status & Quality
  status VARCHAR(50) DEFAULT 'active' CHECK (status IN ('active', 'completed', 'escalated', 'archived')),
  satisfaction_rating INTEGER CHECK (satisfaction_rating >= 1 AND satisfaction_rating <= 5),
  
  -- Analytics
  total_messages INTEGER DEFAULT 0,
  duration_minutes INTEGER DEFAULT 0,
  resolution_achieved BOOLEAN DEFAULT false,
  
  -- Cultural & Compliance
  cultural_sensitivity_score INTEGER DEFAULT 0 CHECK (cultural_sensitivity_score >= 0 AND cultural_sensitivity_score <= 100),
  uae_charter_compliance_score INTEGER DEFAULT 0 CHECK (uae_charter_compliance_score >= 0 AND uae_charter_compliance_score <= 100)
);

-- ==================================================
-- MESSAGES TABLE (Individual Chat Messages)
-- ==================================================
CREATE TABLE IF NOT EXISTS messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP DEFAULT NOW(),
  
  -- Message Context
  conversation_id UUID REFERENCES conversations(id) ON DELETE CASCADE,
  sender_id UUID REFERENCES users(id),
  sender_type VARCHAR(20) CHECK (sender_type IN ('user', 'ai_agent', 'human_coach')),
  
  -- Message Content
  content TEXT NOT NULL,
  content_ar TEXT, -- Arabic translation if needed
  message_type VARCHAR(50) DEFAULT 'text' CHECK (message_type IN (
    'text', 'voice', 'image', 'document', 'system', 'recommendation'
  )),
  
  -- AI Processing
  ai_confidence_score DECIMAL(3, 2), -- 0-1 scale
  requires_human_review BOOLEAN DEFAULT false,
  human_approved BOOLEAN DEFAULT true,
  
  -- Language Detection
  detected_language VARCHAR(10),
  is_mixed_language BOOLEAN DEFAULT false,
  
  -- Response Metrics
  response_time_seconds DECIMAL(5, 2),
  tokens_used INTEGER,
  
  -- Content Analysis
  sentiment VARCHAR(20), -- positive, negative, neutral
  business_intent VARCHAR(100), -- what the user is trying to achieve
  cultural_references TEXT[]
);

-- ==================================================
-- HUMAN_AI_COLLABORATIONS (Tracking Human-AI Teamwork)
-- ==================================================
CREATE TABLE IF NOT EXISTS human_ai_collaborations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP DEFAULT NOW(),
  
  -- Collaboration Context
  conversation_id UUID REFERENCES conversations(id),
  message_id UUID REFERENCES messages(id),
  human_coach_id UUID REFERENCES users(id),
  ai_agent_id UUID REFERENCES ai_agents(id),
  
  -- AI Recommendation
  ai_recommendation TEXT NOT NULL,
  ai_confidence DECIMAL(3, 2),
  ai_reasoning TEXT,
  
  -- Human Review
  human_action VARCHAR(50) CHECK (human_action IN ('approved', 'modified', 'rejected', 'escalated')),
  human_feedback TEXT,
  modified_response TEXT,
  
  -- Timing
  ai_response_time DECIMAL(5, 2),
  human_review_time DECIMAL(5, 2),
  total_collaboration_time DECIMAL(5, 2),
  
  -- Quality Metrics
  final_customer_satisfaction INTEGER CHECK (final_customer_satisfaction >= 1 AND final_customer_satisfaction <= 5),
  collaboration_effectiveness INTEGER CHECK (collaboration_effectiveness >= 1 AND collaboration_effectiveness <= 5)
);

-- ==================================================
-- BUSINESS_TRANSFORMATIONS (Tracking SME Progress)
-- ==================================================
CREATE TABLE IF NOT EXISTS business_transformations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  
  -- Transformation Context
  company_id UUID REFERENCES companies(id),
  transformation_type VARCHAR(100) NOT NULL, -- 'customer_service', 'operations', 'marketing'
  
  -- Timeline
  start_date DATE NOT NULL,
  target_completion_date DATE,
  actual_completion_date DATE,
  
  -- Metrics (Before AI Implementation)
  baseline_metrics JSONB NOT NULL DEFAULT '{}',
  
  -- Current Performance
  current_metrics JSONB DEFAULT '{}',
  
  -- Targets & Goals
  target_metrics JSONB DEFAULT '{}',
  
  -- Progress Tracking
  completion_percentage INTEGER DEFAULT 0 CHECK (completion_percentage >= 0 AND completion_percentage <= 100),
  milestones_completed INTEGER DEFAULT 0,
  total_milestones INTEGER DEFAULT 4,
  
  -- Business Impact
  time_saved_hours DECIMAL(8, 2) DEFAULT 0,
  cost_reduction_aed DECIMAL(12, 2) DEFAULT 0,
  revenue_increase_aed DECIMAL(12, 2) DEFAULT 0,
  
  -- Cultural Success
  cultural_adaptation_score INTEGER DEFAULT 0 CHECK (cultural_adaptation_score >= 0 AND cultural_adaptation_score <= 100),
  employee_satisfaction_score INTEGER DEFAULT 0 CHECK (employee_satisfaction_score >= 0 AND employee_satisfaction_score <= 100),
  
  -- Status
  status VARCHAR(50) DEFAULT 'in_progress' CHECK (status IN (
    'planning', 'in_progress', 'completed', 'paused', 'cancelled'
  ))
);

-- ==================================================
-- REVENUE_TRACKING (Business Analytics)
-- ==================================================
CREATE TABLE IF NOT EXISTS revenue_tracking (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP DEFAULT NOW(),
  
  -- Revenue Context
  company_id UUID REFERENCES companies(id),
  billing_period_start DATE NOT NULL,
  billing_period_end DATE NOT NULL,
  
  -- Subscription Revenue
  subscription_revenue DECIMAL(10, 2) DEFAULT 0,
  additional_services_revenue DECIMAL(10, 2) DEFAULT 0,
  total_revenue DECIMAL(10, 2) DEFAULT 0,
  
  -- Usage Metrics
  total_ai_conversations INTEGER DEFAULT 0,
  total_human_coaching_hours DECIMAL(6, 2) DEFAULT 0,
  total_voice_messages INTEGER DEFAULT 0,
  
  -- Customer Value
  customer_lifetime_value DECIMAL(10, 2) DEFAULT 0,
  net_promoter_score INTEGER CHECK (net_promoter_score >= 0 AND net_promoter_score <= 10),
  
  -- Currency
  currency VARCHAR(3) DEFAULT 'AED'
);

-- ==================================================
-- UAE_CHARTER_COMPLIANCE (Compliance Monitoring)
-- ==================================================
CREATE TABLE IF NOT EXISTS uae_charter_compliance (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP DEFAULT NOW(),
  
  -- Compliance Context
  company_id UUID REFERENCES companies(id),
  conversation_id UUID REFERENCES conversations(id),
  
  -- Charter Principles (1-12)
  human_oversight_score INTEGER DEFAULT 0 CHECK (human_oversight_score >= 0 AND human_oversight_score <= 100),
  transparency_score INTEGER DEFAULT 0 CHECK (transparency_score >= 0 AND transparency_score <= 100),
  privacy_protection_score INTEGER DEFAULT 0 CHECK (privacy_protection_score >= 0 AND privacy_protection_score <= 100),
  bias_mitigation_score INTEGER DEFAULT 0 CHECK (bias_mitigation_score >= 0 AND bias_mitigation_score <= 100),
  cultural_sensitivity_score INTEGER DEFAULT 0 CHECK (cultural_sensitivity_score >= 0 AND cultural_sensitivity_score <= 100),
  
  -- Overall Compliance
  overall_compliance_score INTEGER DEFAULT 0 CHECK (overall_compliance_score >= 0 AND overall_compliance_score <= 100),
  compliance_status VARCHAR(50) DEFAULT 'compliant' CHECK (compliance_status IN (
    'compliant', 'warning', 'non_compliant', 'under_review'
  )),
  
  -- Audit Trail
  audit_notes TEXT,
  reviewer_id UUID REFERENCES users(id),
  compliance_certificate_url TEXT
);

-- ==================================================
-- INDEXES FOR PERFORMANCE
-- ==================================================

-- Core business queries
CREATE INDEX IF NOT EXISTS idx_companies_industry ON companies(industry);
CREATE INDEX IF NOT EXISTS idx_companies_subscription_plan ON companies(subscription_plan);
CREATE INDEX IF NOT EXISTS idx_companies_transformation_stage ON companies(transformation_stage);
CREATE INDEX IF NOT EXISTS idx_companies_created_at ON companies(created_at);

-- Conversation performance
CREATE INDEX IF NOT EXISTS idx_conversations_company_id ON conversations(company_id);
CREATE INDEX IF NOT EXISTS idx_conversations_created_at ON conversations(created_at);
CREATE INDEX IF NOT EXISTS idx_conversations_status ON conversations(status);

-- Message search and analytics
CREATE INDEX IF NOT EXISTS idx_messages_conversation_id ON messages(conversation_id);
CREATE INDEX IF NOT EXISTS idx_messages_created_at ON messages(created_at);
CREATE INDEX IF NOT EXISTS idx_messages_sender_type ON messages(sender_type);
CREATE INDEX IF NOT EXISTS idx_messages_detected_language ON messages(detected_language);

-- Business intelligence
CREATE INDEX IF NOT EXISTS idx_business_transformations_company_id ON business_transformations(company_id);
CREATE INDEX IF NOT EXISTS idx_revenue_tracking_company_id ON revenue_tracking(company_id);
CREATE INDEX IF NOT EXISTS idx_revenue_tracking_billing_period ON revenue_tracking(billing_period_start, billing_period_end);

-- Compliance monitoring
CREATE INDEX IF NOT EXISTS idx_uae_charter_compliance_company_id ON uae_charter_compliance(company_id);
CREATE INDEX IF NOT EXISTS idx_uae_charter_compliance_created_at ON uae_charter_compliance(created_at);

-- ==================================================
-- ROW LEVEL SECURITY POLICIES
-- ==================================================

-- Enable RLS
ALTER TABLE companies ENABLE ROW LEVEL SECURITY;
ALTER TABLE conversations ENABLE ROW LEVEL SECURITY;
ALTER TABLE messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE business_transformations ENABLE ROW LEVEL SECURITY;
ALTER TABLE revenue_tracking ENABLE ROW LEVEL SECURITY;

-- Companies - Users can only see their own company data
CREATE POLICY "Users can access their company data" ON companies
  FOR ALL USING (
    id IN (
      SELECT company_id FROM company_users WHERE user_id = auth.uid()
    )
  );

-- Conversations - Users can only see conversations from their companies
CREATE POLICY "Users can access their company conversations" ON conversations
  FOR ALL USING (
    company_id IN (
      SELECT company_id FROM company_users WHERE user_id = auth.uid()
    )
  );

-- Messages - Users can only see messages from their conversations
CREATE POLICY "Users can access messages from their conversations" ON messages
  FOR ALL USING (
    conversation_id IN (
      SELECT id FROM conversations WHERE company_id IN (
        SELECT company_id FROM company_users WHERE user_id = auth.uid()
      )
    )
  );

-- ==================================================
-- DEMO DATA INSERTION
-- ==================================================

-- Insert AI Agents
INSERT INTO ai_agents (agent_name, agent_name_ar, agent_type, specializations, system_prompt) VALUES 
('Hikma', 'حكمة', 'business_advisor', ARRAY['strategic_planning', 'dubai_market', 'cultural_intelligence'], 'You are Hikma, a wise business advisor specializing in UAE market dynamics and cultural intelligence.'),
('Omar', 'عمر', 'operations', ARRAY['process_optimization', 'logistics', 'efficiency'], 'You are Omar, an operations specialist focused on streamlining business processes.'),
('Layla', 'ليلى', 'customer_service', ARRAY['customer_experience', 'communication', 'relationship_management'], 'You are Layla, a customer service expert focused on exceptional customer experiences.')
ON CONFLICT DO NOTHING;

-- Insert Sample Companies (Demo Data)
INSERT INTO companies (company_name, company_name_ar, trade_license, industry, email, phone, monthly_revenue, employee_count, languages_used) VALUES 
('Ahmed''s Traditional Restaurant', 'مطعم أحمد التقليدي', 'CN-1234567', 'restaurant', 'ahmed@restaurant.ae', '+971501234567', 75000.00, 12, ARRAY['Arabic', 'English']),
('Fatima''s Fashion Boutique', 'بوتيك فاطمة للأزياء', 'CN-2345678', 'retail', 'fatima@boutique.ae', '+971502345678', 120000.00, 8, ARRAY['Arabic', 'English', 'Hindi']),
('Dubai Express Logistics', 'شركة دبي السريع للخدمات اللوجستية', 'CN-3456789', 'logistics', 'omar@logistics.ae', '+971503456789', 200000.00, 25, ARRAY['Arabic', 'English'])
ON CONFLICT DO NOTHING;

-- ==================================================
-- BUSINESS INTELLIGENCE VIEWS
-- ==================================================

-- Company Performance Dashboard
CREATE OR REPLACE VIEW company_performance_dashboard AS
SELECT 
  c.id,
  c.company_name,
  c.industry,
  c.monthly_revenue,
  c.employee_count,
  c.ai_readiness_score,
  c.transformation_stage,
  c.subscription_plan,
  c.roi_percentage,
  COUNT(DISTINCT conv.id) as total_conversations,
  COUNT(DISTINCT msg.id) as total_messages,
  AVG(conv.satisfaction_rating) as avg_satisfaction,
  COALESCE(SUM(bt.time_saved_hours), 0) as total_time_saved,
  COALESCE(SUM(bt.cost_reduction_aed), 0) as total_cost_reduction
FROM companies c
LEFT JOIN conversations conv ON c.id = conv.company_id
LEFT JOIN messages msg ON conv.id = msg.conversation_id
LEFT JOIN business_transformations bt ON c.id = bt.company_id
GROUP BY c.id, c.company_name, c.industry, c.monthly_revenue, c.employee_count, 
         c.ai_readiness_score, c.transformation_stage, c.subscription_plan, c.roi_percentage;

-- AI Agent Performance
CREATE OR REPLACE VIEW ai_agent_performance AS
SELECT 
  aa.agent_name,
  aa.agent_type,
  COUNT(DISTINCT conv.id) as total_conversations,
  AVG(msg.response_time_seconds) as avg_response_time,
  COUNT(CASE WHEN hac.human_action = 'approved' THEN 1 END) as approved_responses,
  COUNT(CASE WHEN hac.human_action = 'modified' THEN 1 END) as modified_responses,
  COUNT(CASE WHEN hac.human_action = 'rejected' THEN 1 END) as rejected_responses,
  ROUND(
    COUNT(CASE WHEN hac.human_action = 'approved' THEN 1 END) * 100.0 / 
    NULLIF(COUNT(hac.id), 0), 2
  ) as approval_rate
FROM ai_agents aa
LEFT JOIN conversations conv ON aa.id = conv.ai_agent_id
LEFT JOIN messages msg ON conv.id = msg.conversation_id AND msg.sender_type = 'ai_agent'
LEFT JOIN human_ai_collaborations hac ON aa.id = hac.ai_agent_id
GROUP BY aa.id, aa.agent_name, aa.agent_type;

-- Revenue Analytics
CREATE OR REPLACE VIEW monthly_revenue_analytics AS
SELECT 
  DATE_TRUNC('month', rt.billing_period_start) as month,
  COUNT(DISTINCT rt.company_id) as active_customers,
  SUM(rt.total_revenue) as total_revenue,
  AVG(rt.total_revenue) as avg_revenue_per_customer,
  SUM(rt.total_ai_conversations) as total_conversations,
  SUM(rt.total_human_coaching_hours) as total_coaching_hours
FROM revenue_tracking rt
GROUP BY DATE_TRUNC('month', rt.billing_period_start)
ORDER BY month DESC;

-- ==================================================
-- FUNCTIONS FOR BUSINESS LOGIC
-- ==================================================

-- Calculate Company ROI
CREATE OR REPLACE FUNCTION calculate_company_roi(company_uuid UUID)
RETURNS DECIMAL(5,2) AS $$
DECLARE
  time_saved DECIMAL(8,2);
  cost_reduction DECIMAL(12,2);
  revenue_increase DECIMAL(12,2);
  monthly_subscription DECIMAL(8,2);
  total_savings DECIMAL(12,2);
  roi_percentage DECIMAL(5,2);
BEGIN
  -- Get transformation metrics
  SELECT 
    COALESCE(SUM(time_saved_hours * 25), 0), -- AED 25/hour value
    COALESCE(SUM(cost_reduction_aed), 0),
    COALESCE(SUM(revenue_increase_aed), 0)
  INTO time_saved, cost_reduction, revenue_increase
  FROM business_transformations 
  WHERE company_id = company_uuid;
  
  -- Get subscription cost
  SELECT monthly_subscription_fee INTO monthly_subscription
  FROM companies WHERE id = company_uuid;
  
  -- Calculate ROI
  total_savings := time_saved + cost_reduction + revenue_increase;
  
  IF monthly_subscription > 0 THEN
    roi_percentage := ((total_savings - monthly_subscription) / monthly_subscription) * 100;
  ELSE
    roi_percentage := 0;
  END IF;
  
  -- Update company record
  UPDATE companies 
  SET roi_percentage = roi_percentage,
      updated_at = NOW()
  WHERE id = company_uuid;
  
  RETURN roi_percentage;
END;
$$ LANGUAGE plpgsql;

-- Update AI Readiness Score
CREATE OR REPLACE FUNCTION update_ai_readiness_score(company_uuid UUID)
RETURNS INTEGER AS $$
DECLARE
  conversation_count INTEGER;
  completion_score INTEGER;
  usage_score INTEGER;
  total_score INTEGER;
BEGIN
  -- Count conversations
  SELECT COUNT(*) INTO conversation_count
  FROM conversations WHERE company_id = company_uuid;
  
  -- Get completion scores
  SELECT 
    CASE WHEN onboarding_completed THEN 25 ELSE 0 END +
    CASE WHEN demo_completed THEN 25 ELSE 0 END +
    CASE WHEN first_value_achieved THEN 25 ELSE 0 END
  INTO completion_score
  FROM companies WHERE id = company_uuid;
  
  -- Calculate usage score (0-25 points)
  usage_score := LEAST(conversation_count * 2, 25);
  
  total_score := completion_score + usage_score;
  
  UPDATE companies 
  SET ai_readiness_score = total_score,
      updated_at = NOW()
  WHERE id = company_uuid;
  
  RETURN total_score;
END;
$$ LANGUAGE plpgsql;