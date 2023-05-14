import { render, screen } from '@testing-library/react';
import AutshRedirect, { getServerSideProps } from './[token]';
import AuthService from '../../services/auth.service';
import { IBasicResponse } from '../../services/response.interfaces';


// Mock the next/router module and provide a mock implementation for useRouter()
jest.mock('next/router', () => ({
    useRouter: jest.fn().mockImplementation(() => ({
      replace: jest.fn(),
    })),
  }));
  
  // Mock the AuthService module and provide a mock implementation for login() and checkAuth()
  jest.mock('../../services/auth.service', () => ({
    login: jest.fn().mockResolvedValue({ token: 'abc123' }),
    checkAuth: jest.fn().mockResolvedValue({ success: true }),
  }));

describe('AutshRedirect', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the component', () => {
    render(<AutshRedirect token={'abc123'}  />);
    const textElement = screen.getByText(/Redirecting/i);
    expect(textElement).toBeInTheDocument();
  });

  it('fetches the server side props', async () => {
    const params = { token: 'abc123' };
    const result = await getServerSideProps({ params } as any);
    expect(result.props.token).toEqual('abc123');
  });

  it('calls AuthService.login and AuthService.checkAuth with the correct data', async () => {
    const mockLogin = jest.spyOn(AuthService, 'login').mockResolvedValueOnce({ token: 'def456' });
    const mockCheckAuth = jest.spyOn(AuthService, 'checkAuth').mockResolvedValueOnce({ success: true } as IBasicResponse);
    render(<AutshRedirect token={'abc123'} />);
    await new Promise((resolve) => setTimeout(resolve, 0));
    expect(mockLogin).toHaveBeenCalledWith({ email: 'a@ab.com', password: '12345' });
    expect(mockCheckAuth).toHaveBeenCalledWith('def456');
  });
});
