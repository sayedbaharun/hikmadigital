import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface NavbarProps {
  openContactForm?: (type: 'general' | 'assessment' | 'partnership' | 'licensing') => void;
}

const Navbar: React.FC<NavbarProps> = ({ openContactForm }) => {
  const [isOpen, setIsOpen] = useState(false);
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
        <div className="md:hidden bg-background border-t border-neutral-200">
          <div className="container-custom py-4 space-y-4">
            {navigation.map((item) => (
              item.onClick ? (
                <button
                  key={item.name}
                  onClick={() => {
                    item.onClick();
                    setIsOpen(false);
                  }}
                  className={`block w-full text-left py-2 text-base text-secondary hover:text-primary transition-colors ${
                    isRTL ? 'font-arabic text-right' : ''
                  }`}
                >
                  {item.name}
                </button>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block py-2 text-base transition-colors ${
                    location.pathname === item.href ? 'text-primary' : 'text-secondary hover:text-primary'
                  } ${isRTL ? 'font-arabic text-right' : ''}`}
                >
                  {item.name}
                </Link>
              )
            ))}
            
            <button
              onClick={() => {
                openContactForm?.('assessment');
                setIsOpen(false);
              }}
              className="btn-primary focus-ring w-full mt-4"
            >
              {language === 'ar' ? 'احصل على التقييم' : 'Get Assessment'}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;