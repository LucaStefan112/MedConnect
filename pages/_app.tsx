import Header from '../components/Header/Header';
// import SideMenu from '@/components/SideMenu/PatientSideMenu'
import PatientSideMenu from '@/components/SideMenu/PatientSideMenu';
import DoctorSideMenu from '../components/SideMenu/DoctorSideMenu';
import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }: AppProps) {
  const { pathname }: { pathname: string } = useRouter();

  return (
    <div className="flex flex-col overflow-x-hidden">
      {!pathname.includes("auth-redirect") && <Header />}
      <div className="flex flex-row">
        {!pathname.includes("auth-redirect") && <DoctorSideMenu />}
        <Component {...pageProps} />
      </div>
    </div>
  );
}
