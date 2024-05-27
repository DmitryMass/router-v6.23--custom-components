import { useAsyncError } from 'react-router-dom';
import { motion } from 'framer-motion';

export const AsyncError = () => {
  // need to change type
  const error = useAsyncError() as any;
  return (
    <div className='border rounded-3xl shadow-md min-h-[200px] flex justify-center items-center text-md24 flex-col gap-4 overflow-hidden'>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ rotate: -4, opacity: [0, 1, 1], scale: 1.1 }}
        transition={{
          duration: 1,
          delay: 0,
          repeatDelay: 1,
          ease: 'easeOut',
        }}
      >
        {error.statusText || `${error}`}
      </motion.p>
      <motion.p animate={{ rotate: 11 }}>{error.status}</motion.p>
    </div>
  );
};
