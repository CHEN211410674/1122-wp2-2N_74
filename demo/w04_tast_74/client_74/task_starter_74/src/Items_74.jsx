import SingleItem_74 from './SingleItem_74';

import { useQuery } from '@tanstack/react-query';

import customFetch_74 from './utils_74';

const Items_74 = () => {
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ['tasks'],
    queryFn: async () => {
      const { data } = await customFetch_74.get('/');
      return data;
    },
  });
  console.log('data', data);
  if (isLoading) {
    return <p style={{ marginTop: 'irem' }}>Loading...</p>;
  }

  if (error) {
    return <p style={{ marginTop: 'irem' }}>{error.response.data}</p>;
  }

  return (
    <div className='items'>
      {data.taskList.map((item) => {
        return <SingleItem_74 key={item.id} item={item} />;
      })}
    </div>
  );
};
export default Items_74;
