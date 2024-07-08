import { FC } from 'react';

export const DashboardPreSkeleton: FC = () => {
  return (
    <div className="grid grid-cols-3 place-items-stretch gap-5">
      <div className="rounded-md border border-neutral-50 p-5">
        <div className="mb-5">
          <p className="size-8 animate-pulse bg-neutral-50" />
        </div>
        <p className="mb-4 size-3 w-full animate-pulse rounded-md bg-neutral-50 text-sm16 font-medium text-neutral-70" />
        <h2 className="size-8 w-full animate-pulse rounded-md bg-neutral-50 text-md24 font-semibold text-black" />
      </div>
      <div className="rounded-md border border-neutral-50 p-5">
        <div className="mb-5">
          <p className="size-8 animate-pulse bg-neutral-50" />
        </div>
        <p className="mb-4 size-3 w-full animate-pulse rounded-md bg-neutral-50 text-sm16 font-medium text-neutral-70" />
        <h2 className="size-8 w-full animate-pulse rounded-md bg-neutral-50 text-md24 font-semibold text-black" />
      </div>
      <div className="rounded-md border border-neutral-50 p-5">
        <div className="mb-5">
          <p className="size-8 animate-pulse bg-neutral-50" />
        </div>
        <p className="mb-4 size-3 w-full animate-pulse rounded-md bg-neutral-50 text-sm16 font-medium text-neutral-70" />
        <h2 className="size-8 w-full animate-pulse rounded-md bg-neutral-50 text-md24 font-semibold text-black" />
      </div>
    </div>
  );
};
