interface SEOData {
  title: string;
  description: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  canonical?: string;
}

export const updatePageSEO = (data: SEOData) => {
  // Update document title
  document.title = data.title;

  // Update meta description
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', data.description);
  } else {
    const meta = document.createElement('meta');
    meta.name = 'description';
    meta.content = data.description;
    document.head.appendChild(meta);
  }

  // Update keywords if provided
  if (data.keywords) {
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', data.keywords);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'keywords';
      meta.content = data.keywords;
      document.head.appendChild(meta);
    }
  }

  // Update Open Graph tags
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) {
    ogTitle.setAttribute('content', data.ogTitle || data.title);
  }

  const ogDescription = document.querySelector('meta[property="og:description"]');
  if (ogDescription) {
    ogDescription.setAttribute('content', data.ogDescription || data.description);
  }

  // Update canonical URL if provided
  if (data.canonical) {
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', data.canonical);
    } else {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      canonicalLink.setAttribute('href', data.canonical);
      document.head.appendChild(canonicalLink);
    }
  }
};

export const pageSEOData = {
  home: {
    title: "Hikma Digital - Leading AI Solutions in Dubai & UAE | Business Automation",
    description: "Transform your business with Hikma Digital's cutting-edge AI solutions. Leading AI consulting, automation, and digital transformation services in Dubai and UAE.",
    keywords: "AI solutions Dubai, artificial intelligence UAE, business automation, AI consulting, digital transformation, machine learning, Dubai AI company",
    canonical: "https://hikmadigital.com"
  },
  services: {
    title: "AI Services & Solutions - Custom AI Development | Hikma Digital",
    description: "Comprehensive AI services including custom AI agents, automation, knowledge bases, and consulting. Transform your business with proven AI solutions in Dubai.",
    keywords: "AI services Dubai, custom AI development, business automation, AI consulting, machine learning services, AI agents, digital transformation UAE",
    canonical: "https://hikmadigital.com/services"
  },
  about: {
    title: "About Hikma Digital - Leading AI Company in Dubai & UAE",
    description: "Learn about Hikma Digital's mission to transform businesses through AI. Expert team delivering cutting-edge AI solutions and digital transformation in the UAE.",
    keywords: "Hikma Digital about, AI company Dubai, AI team UAE, digital transformation experts, AI consulting company",
    canonical: "https://hikmadigital.com/about"
  },
  contact: {
    title: "Contact Hikma Digital - AI Solutions & Consulting in Dubai",
    description: "Get in touch with Hikma Digital for AI consulting and solutions. Schedule a free consultation to transform your business with artificial intelligence.",
    keywords: "contact Hikma Digital, AI consultation Dubai, AI services contact, Dubai AI company contact",
    canonical: "https://hikmadigital.com/contact"
  }
};