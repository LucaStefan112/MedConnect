import SideMenu from '@/components/SideMenu/SideMenu'
import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }: AppProps) {
  const { pathname }: { pathname: string } = useRouter();

  return (
    <div className='page'>
      { !pathname.includes('auth-redirect') && <SideMenu /> }
      <Component {...pageProps} />
    </div>
  )
}
