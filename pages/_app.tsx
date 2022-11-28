import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { theme } from '../src/theme';
import { ThemeProvider } from "@mui/system";

export default function App({ Component, pageProps }: AppProps)
{
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
