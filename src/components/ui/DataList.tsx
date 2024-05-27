import { ReactNode } from 'react';

type DataListProps<T> = {
  data: T[];
  item: (child: T, index: number) => ReactNode;
};

export const DataList = <T extends {}>({ data, item }: DataListProps<T>) => {
  return <>{data?.length ? data.map(item) : null}</>;
};
