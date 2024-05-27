import { DashboardLoadedData } from '../types/requestTypes';
import { memberIcon, ongoingTaskIcon, teamsIcon } from './icons';
import { PATH } from './path';
import { sleep } from './sleep';

export const fakeRequest = async (): Promise<DashboardLoadedData[]> => {
  await sleep(2000);
  //   throw new Error('Some Error Happens');
  return [
    {
      id: '1',
      icon: teamsIcon,
      title: '4 Active Team',
      subtitle: 'Active Team',
      pathLink: PATH.teams,
    },
    {
      id: '2',
      icon: memberIcon,
      title: '24 Members',
      subtitle: 'Your Team Members',
      pathLink: PATH.members,
    },
    {
      id: '3',
      icon: ongoingTaskIcon,
      title: '16 Tasks',
      subtitle: 'Ongoing Task',
      pathLink: PATH.tasks,
    },
  ];
};
