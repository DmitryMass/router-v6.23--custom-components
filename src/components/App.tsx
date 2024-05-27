import { RouterProvider } from 'react-router-dom';
import { Toaster } from 'sonner';
import { router } from '../utils/routes';

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster richColors position='top-right' duration={3000} />
    </>
  );
};

export default App;
