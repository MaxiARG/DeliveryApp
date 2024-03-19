import AuthRepositoryImpl from '../../../data/repositories/AuthRepositoryImpl';

const { login } = new AuthRepositoryImpl();

const LoginAuthUseCase = async (email: string, password: string) => {
  return await login(email, password);
}

export default LoginAuthUseCase;