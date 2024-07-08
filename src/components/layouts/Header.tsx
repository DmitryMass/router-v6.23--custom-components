import { FC } from 'react';

export const Header: FC = () => {
  return (
    <header className="sticky left-0 top-0 z-20 flex h-[72px] items-center border-b border-neutral-50 bg-white px-5">
      <div className="flex w-full items-center justify-between">
        <span>ACCOUNT</span>
      </div>
    </header>
  );
};
