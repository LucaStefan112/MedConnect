import Header from '@/components/Header/Header';
import SideMenu from '@/components/SideMenu/SideMenu'
import AuthService from '@/services/auth.service';
import { IBasicResponse } from '@/services/response.interfaces';
import '@/styles/globals.scss'
import Routes from '@/utils/Routes';
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    AuthService.checkAuth().then((res: IBasicResponse) => {
      if (res.success) {
        router.replace(Routes.HOME);
      } else {
        router.replace(Routes.AUTH_APP);
      }
    });
  }, []);

  return (
    <div className='flex flex-col overflow-x-hidden'>
      { !router.pathname.includes('auth-redirect') && <Header />}
      <div className='flex flex-row'>
        { !router.pathname.includes('auth-redirect') && <SideMenu /> }
        <Component {...pageProps} />
      </div>
    </div>
  )
}
