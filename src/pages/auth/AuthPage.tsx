import { useSession } from '../../hooks/useSession';
import { Navigate } from 'react-router-dom';
import { PATH } from '../../utils/path';

const AuthPage = () => {
  const isAuth = useSession();
  if (isAuth) {
    return <Navigate to={PATH.home} />;
  }
  return <div>Auth</div>;
};

export default AuthPage;
