import SingleItem_74 from './SingleItem_74';

import { useQuery } from '@tanstack/react-query';

// import customFetch_74 from './utils_74';

import axios from 'axios';

const Items_74 = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['tasks'],
    queryFn: () => axios.get('http://localhost:5050/api/tasks'),
  });
  console.log('data', data);

  if (isLoading) {
    return <p style={{ marginTop: '1rem' }}>Loading ...</p>;
  }

  return (
    <div className='items'>
      {data.data.taskList.map((item) => {
        return <SingleItem_74 key={item.id} item={item} />;
      })}
    </div>
  );
};
export default Items_74;
