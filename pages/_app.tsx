import SideMenu from '@/components/SideMenu/SideMenu'
import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter ();
  
  return (
    <>
      { !pathname.includes('/auth-redirect') && <SideMenu /> }
      <Component {...pageProps} />
    </>
  )
}
