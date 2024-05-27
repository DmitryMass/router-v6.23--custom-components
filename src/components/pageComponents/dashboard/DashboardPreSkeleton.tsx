export const DashboardPreSkeleton = () => {
  return (
    <div className='grid grid-cols-3 place-items-stretch gap-5'>
      <div className='border border-neutral-50 rounded-md p-5'>
        <div className='mb-5'>
          <p className='size-8 bg-neutral-50 animate-pulse' />
        </div>
        <p className='text-neutral-70 text-sm16 font-medium mb-4 w-full bg-neutral-50 size-3 rounded-md animate-pulse' />
        <h2 className='text-black font-semibold text-md24 w-full bg-neutral-50 size-8 rounded-md animate-pulse' />
      </div>
      <div className='border border-neutral-50 rounded-md p-5'>
        <div className='mb-5'>
          <p className='size-8 bg-neutral-50 animate-pulse' />
        </div>
        <p className='text-neutral-70 text-sm16 font-medium mb-4 w-full bg-neutral-50 size-3 rounded-md animate-pulse' />
        <h2 className='text-black font-semibold text-md24 w-full bg-neutral-50 size-8 rounded-md animate-pulse' />
      </div>
      <div className='border border-neutral-50 rounded-md p-5'>
        <div className='mb-5'>
          <p className='size-8 bg-neutral-50 animate-pulse' />
        </div>
        <p className='text-neutral-70 text-sm16 font-medium mb-4 w-full bg-neutral-50 size-3 rounded-md animate-pulse' />
        <h2 className='text-black font-semibold text-md24 w-full bg-neutral-50 size-8 rounded-md animate-pulse' />
      </div>
    </div>
  );
};
