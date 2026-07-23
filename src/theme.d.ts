import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface CommonColors {
    blue: string;
    orange: string;
    red: string;
    grey: string;
  }

  interface TypographyVariants {
    tab: React.CSSProperties;
    estimate: React.CSSProperties;
    bodyPlain: React.CSSProperties;
    learnButton: React.CSSProperties;
    goButton: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    tab?: React.CSSProperties;
    estimate?: React.CSSProperties;
    bodyPlain?: React.CSSProperties;
    learnButton?: React.CSSProperties;
    goButton?: React.CSSProperties;
  }
}
