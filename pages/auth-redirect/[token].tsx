import AuthService from '../../services/auth.service';
import React, { useEffect } from 'react'
import { Dna } from 'react-loader-spinner'
import { useRouter } from 'next/navigation'
import { IBasicResponse } from '../../services/response.interfaces';

export async function getServerSideProps({ params }: { params: { token: string } }) {
  return {
    props: {
      token: params.token,
    },
  };
}

export default function AutshRedirect({ token }: { token: string }) {
  const router = useRouter();
  
  const data = {
    email: 'a@ab.com',
    password: '12345',
  }

  useEffect(() => {
    AuthService.login(data).then((res: any) => {
      console.log(res.token);
      AuthService.checkAuth(res.token).then((res: IBasicResponse) => {
        console.log(res);
        // if (res.success) {
        //   router.replace(Routes.HOME);
        // } else {
        //   router.replace(Routes.AUTH_APP);
        // }
      });
    });
  }, []);

  return (
    <div className='flex flex-col items-center justify-center h-screen w-screen bg-blue-100'>
      <h1 className='text-3xl font-bold text-blue-900 mb-4'>
        Redirecting...
      </h1>
      <Dna
        visible={true}
        height="100"
        width="100"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </div>
  )
}
