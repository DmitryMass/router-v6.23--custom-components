import { Link } from 'react-router-dom';
import { PATH } from '../../utils/path';

export const Logo = () => {
  return (
    <div className='border-b border-neutral-50 h-[72px] flex justify-start items-center mb-5 px-5 text-neutral-90'>
      <Link to={PATH.home}>LOGOTYPE HOME</Link>
    </div>
  );
};
