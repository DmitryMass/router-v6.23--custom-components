import { FC } from 'react';
import { useRouteError } from 'react-router-dom';

const PageError: FC = () => {
  const errors = useRouteError();
  console.log(errors);

  return <div>PageError</div>;
};

export default PageError;
