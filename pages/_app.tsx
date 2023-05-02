import Header from '@/components/Header/Header';
import SideMenu from '@/components/SideMenu/SideMenu'
import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router';
import path from 'path';
import { createTheme , colors , ThemeProvider } from '@mui/material';

export default function App({ Component, pageProps }: AppProps) {
  const { pathname }: { pathname: string } = useRouter();

const theme = createTheme({
  palette: {
    primary: {
      main: colors.blue[500],
    },
    secondary: {
      main: colors.blue[500],
    },
  },
  typography: {
    fontFamily: 'Inner',
    fontWeightLight: 100,
    fontWeightRegular: 200,
    fontWeightMedium: 300,
    fontWeightBold: 400,

  },
});

  return (
    <div className='flex flex-col overflow-x-hidden'>
      { !pathname.includes('auth-redirect') && <Header />}
      <div className='flex flex-row'>
        { !pathname.includes('auth-redirect') && <SideMenu /> }
        <Component {...pageProps} />
      </div>
    </div>
  )
}
