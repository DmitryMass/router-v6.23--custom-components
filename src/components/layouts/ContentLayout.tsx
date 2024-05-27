import clsx from 'clsx';
import { FC, ReactNode } from 'react';

type TContentLayoutProps = {
  children: ReactNode;
  title: string;
  contentPanel?: ReactNode;
  containerModificator?: string;
};

export const ContentLayout: FC<TContentLayoutProps> = ({
  children,
  title,
  contentPanel,
  containerModificator,
}) => {
  return (
    <>
      <div
        className={clsx(
          'h-[72px] border-b border-neutral-50 px-5',
          containerModificator
        )}
      >
        <h1 className='text-md24'>{title}</h1>
        {contentPanel}
      </div>
      {children}
    </>
  );
};
