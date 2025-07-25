import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface NavbarProps {
  openContactForm?: (type: 'general' | 'assessment' | 'partnership' | 'licensing') => void;
}

const Navbar: React.FC<NavbarProps> = ({ openContactForm }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const { language, setLanguage, isRTL } = useLanguage();
  const location = useLocation();

  // Steve Jobs Navigation - 4 links maximum
  const navigation = [
    { name: language === 'ar' ? 'الحلول' : 'Solutions', href: '/solutions' },
    { name: language === 'ar' ? 'الأسعار' : 'Pricing', href: '/pricing' },
    { name: language === 'ar' ? 'عرض توضيحي' : 'Demo', href: '/demo' },
    { name: language === 'ar' ? 'عنا' : 'About', href: '/about' },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  // Mobile navigation sections
  const mobileNavSections = [
    {
      id: 'products',
      title: language === 'ar' ? 'المنتجات والخدمات' : 'Products & Services',
      items: [
        { name: language === 'ar' ? 'الحلول' : 'Solutions', href: '/solutions' },
        { name: language === 'ar' ? 'وكلاء الذكاء الاصطناعي' : 'AI Agents', href: '/ai-agents' },
        { name: language === 'ar' ? 'التحول' : 'Transform', href: '/transform' },
        { name: language === 'ar' ? 'عرض توضيحي' : 'Demo', href: '/demo' },
        { name: language === 'ar' ? 'الأسعار' : 'Pricing', href: '/pricing' },
      ]
    },
    {
      id: 'company',
      title: language === 'ar' ? 'الشركة' : 'Company',
      items: [
        { name: language === 'ar' ? 'من نحن' : 'About', href: '/about' },
        { name: language === 'ar' ? 'الفريق' : 'Team', href: '/team' },
        { name: language === 'ar' ? 'قصص النجاح' : 'Success Stories', href: '/success-stories' },
        { name: language === 'ar' ? 'ميثاق الإمارات' : 'UAE Charter', href: '/charter' },
      ]
    },
    {
      id: 'partnerships',
      title: language === 'ar' ? 'الشراكات' : 'Partnerships',
      items: [
        { name: language === 'ar' ? 'الشراكات' : 'Partnerships', href: '/partnerships' },
        { name: language === 'ar' ? 'الترخيص' : 'Licensing', href: '/licensing' },
      ]
    },
    {
      id: 'support',
      title: language === 'ar' ? 'الدعم' : 'Support',
      items: [
        { name: language === 'ar' ? 'اتصل بنا' : 'Contact', href: '#', onClick: () => openContactForm?.('general') },
        { name: language === 'ar' ? 'التقييم' : 'Assessment', href: '/assessment' },
      ]
    },
    {
      id: 'legal',
      title: language === 'ar' ? 'القانونية' : 'Legal',
      items: [
        { name: language === 'ar' ? 'الشروط والأحكام' : 'Terms & Conditions', href: '/terms' },
        { name: language === 'ar' ? 'سياسة الخصوصية' : 'Privacy Policy', href: '/privacy' },
        { name: language === 'ar' ? 'القانونية' : 'Legal', href: '/legal' },
      ]
    }
  ];

  const toggleSection = (sectionId: string) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-xl border-b border-neutral-200 z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center h-16">
          {/* Logo - Clean Wordmark */}
          <Link to="/" className="flex items-center">
            <span className={`text-xl font-semibold text-primary ${isRTL ? 'font-arabic' : ''}`}>
              {language === 'ar' ? 'حكمة' : 'Hikma'}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
            {navigation.map((item) => (
              item.onClick ? (
                <button
                  key={item.name}
                  onClick={item.onClick}
                  className={`text-base text-secondary hover:text-primary transition-colors ${
                    isRTL ? 'font-arabic' : ''
                  }`}
                >
                  {item.name}
                </button>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-base transition-colors ${
                    location.pathname === item.href ? 'text-primary' : 'text-secondary hover:text-primary'
                  } ${isRTL ? 'font-arabic' : ''}`}
                >
                  {item.name}
                </Link>
              )
            ))}
            
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="p-2 text-secondary hover:text-primary transition-colors"
              aria-label="Toggle language"
            >
              <Globe className="w-5 h-5" />
            </button>

            {/* Primary CTA */}
            <button
              onClick={() => openContactForm?.('assessment')}
              className="btn-primary focus-ring"
            >
              {language === 'ar' ? 'احصل على التقييم' : 'Get Assessment'}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2 rtl:space-x-reverse">
            <button
              onClick={toggleLanguage}
              className="p-2 text-secondary hover:text-primary transition-colors"
              aria-label="Toggle language"
            >
              <Globe className="w-5 h-5" />
            </button>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-secondary hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-background border-t border-neutral-200 max-h-[calc(100vh-64px)] overflow-y-auto">
          <div className="container-custom py-4">
            {/* Primary CTA at top */}
            <button
              onClick={() => {
                openContactForm?.('assessment');
                setIsOpen(false);
              }}
              className="btn-primary focus-ring w-full mb-6"
            >
              {language === 'ar' ? 'احصل على التقييم' : 'Get Assessment'}
            </button>

            {/* Navigation Sections */}
            <div className="space-y-1">
              {mobileNavSections.map((section) => (
                <div key={section.id} className="border-b border-neutral-100 last:border-b-0">
                  {/* Section Header */}
                  <button
                    onClick={() => toggleSection(section.id)}
                    className={`w-full flex items-center justify-between py-3 text-left ${
                      isRTL ? 'text-right' : ''
                    } transition-colors`}
                  >
                    <span className={`text-base font-medium text-primary ${
                      isRTL ? 'font-arabic' : ''
                    }`}>
                      {section.title}
                    </span>
                    <ChevronDown 
                      className={`w-4 h-4 text-secondary transition-transform duration-200 ${
                        expandedSection === section.id ? 'rotate-180' : ''
                      } ${isRTL ? 'mr-2' : 'ml-2'}`}
                    />
                  </button>

                  {/* Section Items */}
                  <div className={`overflow-hidden transition-all duration-200 ${
                    expandedSection === section.id ? 'max-h-96 pb-3' : 'max-h-0'
                  }`}>
                    <div className={`space-y-1 ${isRTL ? 'pr-4' : 'pl-4'}`}>
                      {section.items.map((item, itemIndex) => (
                        item.onClick ? (
                          <button
                            key={itemIndex}
                            onClick={() => {
                              item.onClick();
                              setIsOpen(false);
                              setExpandedSection(null);
                            }}
                            className={`block w-full text-left py-2 text-base text-secondary hover:text-primary transition-colors ${
                              isRTL ? 'font-arabic text-right' : ''
                            }`}
                          >
                            {item.name}
                          </button>
                        ) : (
                          <Link
                            key={itemIndex}
                            to={item.href}
                            onClick={() => {
                              setIsOpen(false);
                              setExpandedSection(null);
                            }}
                            className={`block py-2 text-base transition-colors ${
                              location.pathname === item.href ? 'text-primary' : 'text-secondary hover:text-primary'
                            } ${isRTL ? 'font-arabic text-right' : ''}`}
                          >
                            {item.name}
                          </Link>
                        )
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Info */}
            <div className={`mt-6 pt-6 border-t border-neutral-200 space-y-3 ${
              isRTL ? 'text-right' : ''
            }`}>
              <div className={`text-sm text-secondary ${isRTL ? 'font-arabic' : ''}`}>
                <a href="mailto:info@hikmadigital.com" className="hover:text-primary transition-colors">
                  info@hikmadigital.com
                </a>
              </div>
              <div className={`text-sm text-secondary ${isRTL ? 'font-arabic' : ''}`}>
                <a href="tel:+97144567890" className="hover:text-primary transition-colors">
                  +971 4 456 7890
                </a>
              </div>
              <div className={`text-sm text-secondary ${isRTL ? 'font-arabic' : ''}`}>
                Dubai, UAE
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;