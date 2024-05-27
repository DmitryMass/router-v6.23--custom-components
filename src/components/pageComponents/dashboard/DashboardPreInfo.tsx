import { useQuery } from '@tanstack/react-query';
import { FC } from 'react';
import { DashboardLoadedData } from '../../../types/requestTypes';
import { fakeRequest } from '../../../utils/fakeRequest';
import { teamsIcon } from '../../../utils/icons';
import { DashboardPreItem } from './DashboardPreItem';

type TDashboardPreInfo = {
  initialData: DashboardLoadedData[];
};

export const DashboardPreInfo: FC<TDashboardPreInfo> = ({ initialData }) => {
  const { data }: { data: DashboardLoadedData[] } = useQuery({
    queryKey: ['fakeQueryKey'],
    queryFn: () => fakeRequest(),
    initialData,
    staleTime: 3 * 60 * 1000,
  });

  return (
    <>
      {data.length ? (
        <div className='grid grid-cols-3 place-items-stretch gap-5'>
          {data.map((item) => (
            <DashboardPreItem
              key={item.id}
              icon={teamsIcon}
              title={item.title}
              subtitle={item.subtitle}
              pathLink={item.pathLink}
            />
          ))}
        </div>
      ) : null}
    </>
  );
};
