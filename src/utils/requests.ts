import { QueryClient } from '@tanstack/react-query';
import { DashboardLoadedData } from '../types/requestTypes';
import { fakeRequest } from './fakeRequest';

const queryClient = new QueryClient();

const dashboardLoadedData = (async (): Promise<DashboardLoadedData[]> => {
  return (
    queryClient.getQueryData(['fakeQueryKey']) ??
    (await queryClient.fetchQuery({
      queryKey: ['fakeQueryKey'],
      queryFn: () => fakeRequest(),
    }))
  );
})();

export { queryClient, dashboardLoadedData };
