import { useQuery } from '@tanstack/react-query';
import { FC } from 'react';
import { fakeRequest } from '../../../utils/routes';
import { DashboardPreItem } from './DashboardPreItem';
import { teamsIcon } from '../../../utils/icons';
import { PATH } from '../../../utils/path';
import { DashboardLoadedData } from '../../../types/requestTypes';

type TDashboardPreInfo = {
  initialData: DashboardLoadedData[];
};

export const DashboardPreInfo: FC<TDashboardPreInfo> = ({ initialData }) => {
  console.log(initialData);
  const { data, isFetching } = useQuery({
    queryKey: ['fakeQueryKey'],
    queryFn: () => fakeRequest(),
    initialData,
    staleTime: 3 * 60 * 1000,
  });

  console.log(isFetching, 'isFetching');

  return (
    <>
      {data.length
        ? data.map((item) => (
            <DashboardPreItem
              key={item.id}
              icon={teamsIcon}
              title={`${item.id}`}
              subtitle={`${item.id}`}
              pathLink={PATH.teams}
            />
          ))
        : null}
      {/* <DashboardPreItem
                    icon={teamsIcon}
                    title='4 Active Team'
                    subtitle='Active Team'
                    pathLink={PATH.teams}
                  /> */}
      {/* <DashboardPreItem
                  icon={memberIcon}
                  title='24 Members'
                  subtitle='Your Team Members'
                  pathLink={PATH.members}
                />
                <DashboardPreItem
                  icon={ongoingTaskIcon}
                  title='16 Tasks'
                  subtitle='Ongoing Task'
                  pathLink={PATH.tasks}
                /> */}
    </>
  );
};
