import { Logo } from './Logo';
import { Navigation } from './Navigation';

export const SideBar = () => {
  return (
    <div className='max-w-[250px] w-full bg-neutral-10 border-r border-neutral-50 fixed left-0 top-0 h-full z-20'>
      <Logo />
      <Navigation />
    </div>
  );
};
