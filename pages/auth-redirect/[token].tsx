import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Dna } from 'react-loader-spinner';
import AuthService from '../../services/auth.service';
import Routes from '../../utils/Routes';
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
  };

  useEffect(() => {
    AuthService.login(data)
      .then((res: any) => {
        console.log(res.token);
        AuthService.checkAuth(res.token)
          .then((res: IBasicResponse) => {
            if (res.success) {
              router.push(Routes.HOME);
            } else {
              router.push(Routes.AUTH_APP);
            }
          })
          .catch((error: Error) => {
            console.log(error);
            router.push(Routes.AUTH_APP);
          });
      })
      .catch((error: Error) => {
        console.log(error);
        router.push(Routes.AUTH_APP);
      });
  }, []);

  return (
    <div className='flex flex-col items-center justify-center h-screen w-screen bg-blue-100'>
      <h1 className='text-3xl font-bold text-blue-900 mb-4'>Redirecting...</h1>
      <Dna
        visible={true}
        height='100'
        width='100'
        ariaLabel='dna-loading'
        wrapperStyle={{}}
        wrapperClass='dna-wrapper'
      />
    </div>
  );
}
