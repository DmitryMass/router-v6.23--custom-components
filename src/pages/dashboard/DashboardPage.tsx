import { Suspense } from 'react';
import { useForm } from 'react-hook-form';
import { Await, useLoaderData } from 'react-router-dom';

import { TDashboardPageLoadedData, TFormProps } from 'types/dashboardPageTypes';
import { DashboardLoadedData } from 'types/requestTypes';

import { ContentLayout } from '@components/layouts/ContentLayout';
import { DashboardPreInfo } from '@components/pageComponents/dashboard/DashboardPreInfo';
import { DashboardPreSkeleton } from '@components/pageComponents/dashboard/DashboardPreSkeleton';
import { AsyncError } from '@components/ui/AsyncError';
import { FormInput } from '@components/ui/FormInput';

const DashboardPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<TFormProps>({ mode: 'onChange' });

  const handleSSearch = async (data: TFormProps) => {
    console.log(data);
  };

  const { dashboardLoadedData } = useLoaderData() as TDashboardPageLoadedData;
  return (
    <ContentLayout title="Dashboard" containerModificator="flex items-center">
      <div className="p-5">
        <Suspense fallback={<DashboardPreSkeleton />}>
          <Await resolve={dashboardLoadedData} errorElement={<AsyncError />}>
            {(data: DashboardLoadedData[]) => (
              <DashboardPreInfo initialData={data} />
            )}
          </Await>
        </Suspense>
        <div>
          <h3>Custom input</h3>
          <form
            onSubmit={handleSubmit(handleSSearch)}
            className="w-full max-w-sm"
          >
            <FormInput
              label="Search"
              watch={watch}
              name="search"
              register={register('search', {
                required: 'This is required field',
              })}
              type="text"
              error={errors.search}
            />
          </form>
        </div>
      </div>
    </ContentLayout>
  );
};

export default DashboardPage;
