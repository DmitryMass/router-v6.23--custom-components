import { FC } from 'react';
import { Link } from 'react-router-dom';

import { linkArrowIcon } from '@utils/icons';

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
    <Link to={pathLink} className="rounded-md border border-neutral-50 p-5">
      <div className="mb-5 flex items-center justify-between">
        <img className="size-8" src={icon} alt="icon" />
        <img className="size-4" src={linkArrowIcon} alt="arrow" />
      </div>
      <p className="mb-1 text-sm16 font-medium text-neutral-70">{subtitle}</p>
      <h2 className="text-md24 font-semibold text-black">{title}</h2>
    </Link>
  );
};
