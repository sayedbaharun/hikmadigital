import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface FooterProps {
  openContactForm: (type: 'general' | 'assessment' | 'partnership' | 'licensing') => void;
}

const Footer: React.FC<FooterProps> = ({ openContactForm }) => {
  const { language, isRTL } = useLanguage();
  const currentYear = new Date().getFullYear();

  const solutionsLinks = [
    { name: language === 'ar' ? 'التحول' : 'Transform', href: '/transform' },
    { name: language === 'ar' ? 'وكلاء الذكاء الاصطناعي' : 'AI Agents', href: '/ai-agents' },
    { name: language === 'ar' ? 'تجربة' : 'Demo', href: '/demo' },
    { name: language === 'ar' ? 'قصص النجاح' : 'Success Stories', href: '/success-stories' },
  ];

  const companyLinks = [
    { name: language === 'ar' ? 'من نحن' : 'About', href: '/about' },
    { name: language === 'ar' ? 'الفريق' : 'Team', href: '/team' },
    { name: language === 'ar' ? 'الميثاق' : 'Charter', href: '/charter' },
    { name: language === 'ar' ? 'الشراكات' : 'Partnerships', href: '/partnerships' },
  ];

  const resourcesLinks = [
    { name: language === 'ar' ? 'التقييم' : 'Assessment', href: '/assessment' },
    { name: language === 'ar' ? 'الأسعار' : 'Pricing', href: '/pricing' },
    { name: language === 'ar' ? 'الموارد' : 'Resources', href: '/resources' },
    { name: language === 'ar' ? 'اتصل بنا' : 'Contact', href: '#', onClick: () => openContactForm('general') },
  ];

  const legalLinks = [
    { name: language === 'ar' ? 'الشروط' : 'Terms', href: '/terms' },
    { name: language === 'ar' ? 'الخصوصية' : 'Privacy', href: '/privacy' },
    { name: language === 'ar' ? 'قانوني' : 'Legal', href: '/legal' },
  ];

  return (
    <footer className="bg-white border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className={`text-lg font-medium gradient-text mb-4 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
              {language === 'ar' ? 'حكمة ديجيتال' : 'Hikma Digital'}
            </h3>
            <div className="uae-badge mb-3">
              {language === 'ar' ? 'معتمد من ميثاق الإمارات' : 'UAE Charter Certified'}
            </div>
            <p className={`text-secondary mb-4 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
              {language === 'ar' 
                ? 'تحويل الأعمال من خلال الذكاء الاصطناعي'
                : 'Transforming business through AI'
              }
            </p>
            {/* Contact Info */}
            <div className="space-y-2 mt-6">
              <div className="flex items-center space-x-2 rtl:space-x-reverse text-secondary">
                <Mail className="w-4 h-4" />
                <a href="mailto:info@hikmadigital.com" className="hover:text-primary transition-opacity duration-200">
                  info@hikmadigital.com
                </a>
              </div>
              <div className="flex items-center space-x-2 rtl:space-x-reverse text-secondary">
                <Phone className="w-4 h-4" />
                <a href="tel:+97144567890" className="hover:text-primary transition-opacity duration-200">
                  +971 4 456 7890
                </a>
              </div>
              <div className="flex items-start space-x-2 rtl:space-x-reverse text-secondary">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>Dubai, UAE</span>
              </div>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className={`text-base font-medium text-primary mb-4 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
              {language === 'ar' ? 'الحلول' : 'Solutions'}
            </h4>
            <ul className="space-y-2">
              {solutionsLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href} 
                    className={`text-secondary hover:text-primary transition-opacity duration-200 ${isRTL ? 'font-arabic' : 'font-inter'}`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className={`text-base font-medium text-primary mb-4 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
              {language === 'ar' ? 'الشركة' : 'Company'}
            </h4>
            <ul className="space-y-2">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href} 
                    className={`text-secondary hover:text-primary transition-opacity duration-200 ${isRTL ? 'font-arabic' : 'font-inter'}`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className={`text-base font-medium text-primary mb-4 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
              {language === 'ar' ? 'الموارد' : 'Resources'}
            </h4>
            <ul className="space-y-2">
              {resourcesLinks.map((link, index) => (
                <li key={index}>
                  {link.onClick ? (
                    <button 
                      onClick={link.onClick}
                      className={`text-secondary hover:text-primary transition-opacity duration-200 ${isRTL ? 'font-arabic' : 'font-inter'}`}
                    >
                      {link.name}
                    </button>
                  ) : (
                    <Link 
                      to={link.href} 
                      className={`text-secondary hover:text-primary transition-opacity duration-200 ${isRTL ? 'font-arabic' : 'font-inter'}`}
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-4">
            <p className={`text-sm text-secondary ${isRTL ? 'font-arabic' : 'font-inter'}`}>
              © {currentYear} Hikma Digital. {language === 'ar' ? 'جميع الحقوق محفوظة' : 'All rights reserved'}.
            </p>
            <div className="flex space-x-4 rtl:space-x-reverse mt-4 md:mt-0">
              {legalLinks.map((link, index) => (
                <Link 
                  key={index}
                  to={link.href} 
                  className={`text-sm text-secondary hover:text-primary transition-opacity duration-200 ${isRTL ? 'font-arabic' : 'font-inter'}`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;