import { NavLink } from 'react-router-dom';
import { PATH } from '../../utils/path';
import {
  dashboardIcon,
  membersIcon,
  tasksIcon,
  teamsNavIcon,
} from '../../utils/icons';
import clsx from 'clsx';
import { motion } from 'framer-motion';

export const Navigation = () => {
  return (
    <nav className='w-full'>
      <ul className='flex justify-center items-start flex-col gap-4 pb-6 border-b border-neutral-50 px-2 mb-5'>
        <motion.li whileTap={{ scale: 0.85 }} className='w-full'>
          <NavLink
            className={({ isActive }) =>
              clsx(
                'text-neutral-80 text-sm16 font-medium flex items-center gap-3 px-5 w-full py-2',
                'hover:bg-neutral-20 hover:rounded-md hover:text-black hover:shadow-md',
                isActive && 'bg-neutral-20 rounded-md text-black shadow-md'
              )
            }
            to={PATH.home}
          >
            <motion.img
              whileHover={{ rotate: 360 }}
              className='size-5'
              src={dashboardIcon}
              alt='dashboard'
            />
            Dashboard
          </NavLink>
        </motion.li>
        <motion.li whileTap={{ scale: 0.85 }} className='w-full'>
          <NavLink
            className={({ isActive }) =>
              clsx(
                'text-neutral-80 text-sm16 font-medium flex items-center gap-3 px-5 w-full py-2',
                'hover:bg-neutral-20 hover:rounded-md hover:text-black hover:shadow-md',
                isActive && 'bg-neutral-20 rounded-md text-black shadow-md'
              )
            }
            to={PATH.tasks}
          >
            <motion.img
              whileHover={{ rotate: 360 }}
              className='size-5'
              src={tasksIcon}
              alt='tasks'
            />
            Tasks
          </NavLink>
        </motion.li>
        <motion.li whileTap={{ scale: 0.85 }} className='w-full'>
          <NavLink
            className={({ isActive }) =>
              clsx(
                'text-neutral-80 text-sm16 font-medium flex items-center gap-3 px-5 w-full py-2',
                'hover:bg-neutral-20 hover:rounded-md hover:text-black hover:shadow-md',
                isActive && 'bg-neutral-20 rounded-md text-black shadow-md'
              )
            }
            to={PATH.members}
          >
            <motion.img
              whileHover={{ rotate: 360 }}
              className='size-5'
              src={membersIcon}
              alt='members'
            />
            Members
          </NavLink>
        </motion.li>
      </ul>
      <ul className='flex justify-center items-start flex-col gap-4 pb-6 border-b border-neutral-50 px-2 mb-5'>
        <motion.li whileTap={{ scale: 0.85 }} className='w-full'>
          <NavLink
            className={({ isActive }) =>
              clsx(
                'text-neutral-80 text-sm16 font-medium flex items-center gap-3 px-5 w-full py-2',
                'hover:bg-neutral-20 hover:rounded-md hover:text-black hover:shadow-md',
                isActive && 'bg-neutral-20 rounded-md text-black shadow-md'
              )
            }
            to={PATH.teams}
          >
            <motion.img
              whileHover={{ rotate: 360 }}
              className='size-5'
              src={teamsNavIcon}
              alt='teams'
            />
            Teams
          </NavLink>
        </motion.li>
      </ul>
    </nav>
  );
};
