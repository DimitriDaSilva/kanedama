import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      accent: string;
      background: string;
      surface: string;
      text: string;
      skeleton: string;
    };
    spacing: {
      xs: string;
      sm: string;
      md: string;
      xl: string;
    };
    borderRadius: {
      md: string;
      lg: string;
    };
  }
}
