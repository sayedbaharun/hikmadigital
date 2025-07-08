export interface ColorTheme {
  name: string;
  colors: {
    primary: {
      DEFAULT: string;
      50: string;
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
      900: string;
      950: string;
    };
    accent: {
      DEFAULT: string;
      light: string;
      dark: string;
    };
    background: {
      DEFAULT: string;
      white: string;
      light: string;
      dark: string;
    };
    text: {
      primary: string;
      secondary: string;
      light: string;
      inverse: string;
    };
    success: {
      DEFAULT: string;
      light: string;
      dark: string;
    };
    error: {
      DEFAULT: string;
      light: string;
      dark: string;
    };
    neutral: {
      50: string;
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
      900: string;
    };
  };
  gradients: {
    primary: string;
    accent: string;
    hero: string;
    cta: string;
    hover: string;
  };
}

// Dubai-appropriate theme
export const dubaiTheme: ColorTheme = {
  name: 'dubai',
  colors: {
    primary: {
      DEFAULT: '#1F25BF',
      50: '#E0E2FA',
      100: '#C8CAF6',
      200: '#989CEE',
      300: '#686DE7',
      400: '#373EDF',
      500: '#1F25BF',
      600: '#171C8F',
      700: '#121670',
      800: '#0D1051',
      900: '#080A33',
      950: '#060723'
    },
    accent: {
      DEFAULT: '#E9C46A', // Gold
      light: '#F4D89C',
      dark: '#D4A84B'
    },
    background: {
      DEFAULT: '#F5F7FA',
      white: '#FFFFFF',
      light: '#FAFBFC',
      dark: '#E8ECF0'
    },
    text: {
      primary: '#37474F',
      secondary: '#606F7B',
      light: '#8795A1',
      inverse: '#FFFFFF'
    },
    success: {
      DEFAULT: '#43A047', // Emerald
      light: '#66BB6A',
      dark: '#388E3C'
    },
    error: {
      DEFAULT: '#FF3B30',
      light: '#FF6B60',
      dark: '#D32F2F'
    },
    neutral: {
      50: '#FAFAFA',
      100: '#F5F5F7',
      200: '#E5E5E7',
      300: '#D1D1D6',
      400: '#A1A1A6',
      500: '#8E8E93',
      600: '#636366',
      700: '#48484A',
      800: '#363638',
      900: '#1C1C1E'
    }
  },
  gradients: {
    primary: 'linear-gradient(135deg, #1F25BF 0%, #373EDF 100%)',
    accent: 'linear-gradient(135deg, #E9C46A 0%, #F4D89C 50%, #E9C46A 100%)',
    hero: 'linear-gradient(180deg, #060723 0%, #0D1051 50%, #171C8F 100%)',
    cta: 'linear-gradient(90deg, #E9C46A 0%, #F4D89C 100%)',
    hover: 'linear-gradient(90deg, #F4D89C 0%, #E9C46A 100%)'
  }
};

// Minimal Apple-inspired theme
export const minimalTheme: ColorTheme = {
  name: 'minimal',
  colors: {
    primary: {
      DEFAULT: '#000000',
      50: '#FAFAFA',
      100: '#F5F5F5',
      200: '#E5E5E5',
      300: '#D4D4D4',
      400: '#A3A3A3',
      500: '#737373',
      600: '#525252',
      700: '#404040',
      800: '#262626',
      900: '#171717',
      950: '#000000'
    },
    accent: {
      DEFAULT: '#0071E3',
      light: '#0077ED',
      dark: '#0051D5'
    },
    background: {
      DEFAULT: '#FFFFFF',
      white: '#FFFFFF',
      light: '#FAFAFA',
      dark: '#F5F5F7'
    },
    text: {
      primary: '#000000',
      secondary: '#6B7280',
      light: '#9CA3AF',
      inverse: '#FFFFFF'
    },
    success: {
      DEFAULT: '#34C759',
      light: '#4CD964',
      dark: '#30B84F'
    },
    error: {
      DEFAULT: '#FF3B30',
      light: '#FF6B60',
      dark: '#E5352B'
    },
    neutral: {
      50: '#FAFAFA',
      100: '#F5F5F7',
      200: '#E5E5E7',
      300: '#D1D1D6',
      400: '#A1A1A6',
      500: '#8E8E93',
      600: '#636366',
      700: '#48484A',
      800: '#363638',
      900: '#1C1C1E'
    }
  },
  gradients: {
    primary: 'linear-gradient(135deg, #000000 0%, #262626 100%)',
    accent: 'linear-gradient(135deg, #0071E3 0%, #0077ED 100%)',
    hero: 'linear-gradient(180deg, #000000 0%, #171717 100%)',
    cta: 'linear-gradient(90deg, #0071E3 0%, #0077ED 100%)',
    hover: 'linear-gradient(90deg, #0077ED 0%, #0071E3 100%)'
  }
};

// Export active theme
export const activeTheme = dubaiTheme;

// Helper function to get color value
export const getColor = (path: string): string => {
  const keys = path.split('.');
  let value: any = activeTheme.colors;
  
  for (const key of keys) {
    value = value[key];
    if (!value) return '#000000'; // Fallback
  }
  
  return value;
};

// Helper function to get gradient
export const getGradient = (name: keyof typeof activeTheme.gradients): string => {
  return activeTheme.gradients[name] || activeTheme.gradients.primary;
};