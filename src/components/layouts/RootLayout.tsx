import { AnimatePresence, motion } from 'framer-motion';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { Header } from '../ui/Header';
import { SideBar } from '../ui/SideBar';
import { useSession } from '../../hooks/useSession';
import { PATH } from '../../utils/path';

const RootLayout = () => {
  const location = useLocation();

  const isAuth = useSession();
  if (!isAuth) {
    return <Navigate to={PATH.authorization} />;
  }

  return (
    <AnimatePresence mode='wait'>
      <>
        <SideBar />
        <main className='ml-[250px] min-h-full'>
          <Header />
          <motion.div
            className='relative z-10'
            key={location.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0, duration: 0.5 }}
          >
            <Outlet />
          </motion.div>
        </main>
      </>
    </AnimatePresence>
  );
};

export default RootLayout;
