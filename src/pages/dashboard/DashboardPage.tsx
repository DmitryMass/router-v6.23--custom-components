import { Suspense } from 'react';
import { ContentLayout } from '../../components/layouts/ContentLayout';
import { DashboardPreInfo } from '../../components/pageComponents/dashboard/DashboardPreInfo';
import { DashboardPreSkeleton } from '../../components/pageComponents/dashboard/DashboardPreSkeleton';
import { Await, useLoaderData } from 'react-router-dom';
import { AsyncError } from '../../components/ui/AsyncError';
import { DashboardLoadedData } from '../../types/requestTypes';

type TDashboardPageLoadedData = {
  dashboardLoadedData: DashboardLoadedData[];
};

const DashboardPage = () => {
  const { dashboardLoadedData } = useLoaderData() as TDashboardPageLoadedData;
  return (
    <ContentLayout title='Dashboard' containerModificator='flex items-center'>
      <div className='p-5'>
        <Suspense fallback={<DashboardPreSkeleton />}>
          <Await resolve={dashboardLoadedData} errorElement={<AsyncError />}>
            {(data: DashboardLoadedData[]) => (
              <DashboardPreInfo initialData={data} />
            )}
          </Await>
        </Suspense>
      </div>
    </ContentLayout>
  );
};

export default DashboardPage;
