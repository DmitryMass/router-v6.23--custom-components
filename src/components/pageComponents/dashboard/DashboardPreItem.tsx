import { FC } from 'react';
import { Link } from 'react-router-dom';
import { linkArrowIcon } from '../../../utils/icons';

type DashboardPreItemProps = {
  title: string;
  subtitle: string;
  icon: string;
  pathLink: string;
};

export const DashboardPreItem: FC<DashboardPreItemProps> = ({
  icon,
  subtitle,
  title,
  pathLink,
}) => {
  return (
    <Link to={pathLink} className='border border-neutral-50 rounded-md p-5'>
      <div className='flex justify-between items-center mb-5'>
        <img className='size-8' src={icon} alt='icon' />
        <img className='size-4' src={linkArrowIcon} alt='' />
      </div>
      <p className='text-neutral-70 text-sm16 font-medium mb-1'>{subtitle}</p>
      <h2 className='text-black font-semibold text-md24'>{title}</h2>
    </Link>
  );
};
