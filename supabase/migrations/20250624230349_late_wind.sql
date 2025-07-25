-- SME Leads table for assessment system
CREATE TABLE IF NOT EXISTS sme_leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP DEFAULT NOW(),
  
  -- Contact Information
  company_name VARCHAR(255) NOT NULL,
  company_name_ar VARCHAR(255),
  contact_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20),
  whatsapp_number VARCHAR(20),
  
  -- Business Details
  industry VARCHAR(100),
  emirates VARCHAR(50) DEFAULT 'Dubai',
  monthly_revenue_range VARCHAR(50),
  employee_count_range VARCHAR(50),
  trade_license VARCHAR(100),
  preferred_language VARCHAR(10) DEFAULT 'en',
  
  -- Assessment Results
  ai_readiness_score INTEGER CHECK (ai_readiness_score >= 0 AND ai_readiness_score <= 100),
  assessment_responses JSONB,
  personalized_plan JSONB,
  
  -- Lead Management
  lead_source VARCHAR(100) DEFAULT 'ai_readiness_assessment',
  lead_status VARCHAR(50) DEFAULT 'new' CHECK (lead_status IN ('new', 'contacted', 'qualified', 'demo_scheduled', 'converted', 'lost')),
  follow_up_priority VARCHAR(20) DEFAULT 'MEDIUM' CHECK (follow_up_priority IN ('LOW', 'MEDIUM', 'HIGH', 'URGENT')),
  conversion_probability INTEGER DEFAULT 0 CHECK (conversion_probability >= 0 AND conversion_probability <= 100),
  
  -- Engagement Tracking
  last_contact_date TIMESTAMP,
  next_follow_up_date TIMESTAMP,
  total_touchpoints INTEGER DEFAULT 0,
  consultation_scheduled BOOLEAN DEFAULT false,
  consultation_completed BOOLEAN DEFAULT false
);

-- WhatsApp conversations tracking
CREATE TABLE IF NOT EXISTS whatsapp_conversations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP DEFAULT NOW(),
  
  phone_number VARCHAR(20) NOT NULL,
  message_text TEXT NOT NULL,
  ai_response TEXT,
  detected_language VARCHAR(10),
  message_type VARCHAR(50) DEFAULT 'text',
  
  -- Lead connection
  lead_id UUID REFERENCES sme_leads(id),
  
  -- AI Processing
  intent_classification VARCHAR(100),
  confidence_score DECIMAL(3, 2),
  requires_human_followup BOOLEAN DEFAULT false
);

-- Voice messages tracking
CREATE TABLE IF NOT EXISTS voice_messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP DEFAULT NOW(),
  
  conversation_id UUID REFERENCES conversations(id),
  audio_file_url TEXT,
  transcript TEXT,
  detected_language VARCHAR(10),
  confidence_score DECIMAL(3, 2),
  processing_time_seconds DECIMAL(5, 2),
  
  -- Voice-specific metrics
  audio_duration_seconds INTEGER,
  audio_quality_score INTEGER CHECK (audio_quality_score >= 1 AND audio_quality_score <= 5)
);

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_sme_leads_created_at ON sme_leads(created_at);
CREATE INDEX IF NOT EXISTS idx_sme_leads_lead_status ON sme_leads(lead_status);
CREATE INDEX IF NOT EXISTS idx_sme_leads_follow_up_priority ON sme_leads(follow_up_priority);
CREATE INDEX IF NOT EXISTS idx_sme_leads_ai_readiness_score ON sme_leads(ai_readiness_score);
CREATE INDEX IF NOT EXISTS idx_sme_leads_industry ON sme_leads(industry);
CREATE INDEX IF NOT EXISTS idx_sme_leads_emirates ON sme_leads(emirates);

CREATE INDEX IF NOT EXISTS idx_whatsapp_conversations_phone_number ON whatsapp_conversations(phone_number);
CREATE INDEX IF NOT EXISTS idx_whatsapp_conversations_created_at ON whatsapp_conversations(created_at);
CREATE INDEX IF NOT EXISTS idx_whatsapp_conversations_lead_id ON whatsapp_conversations(lead_id);

CREATE INDEX IF NOT EXISTS idx_voice_messages_conversation_id ON voice_messages(conversation_id);
CREATE INDEX IF NOT EXISTS idx_voice_messages_created_at ON voice_messages(created_at);