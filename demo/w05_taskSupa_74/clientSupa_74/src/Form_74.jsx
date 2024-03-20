import { useState } from 'react';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from './db/clientSupabase';
import { toast } from 'react-toastify';

const Form_74 = () => {
  const [newItemName, setNewItemName] = useState('');

  const queryClient = useQueryClient();
  const { mutate: createTask, isLoading } = useMutation({
    mutationFn: async (title) => {
      try {
        const { data, error } = await supabase
          .from('task_74')
          .insert([{ title, is_done: false }])
          .select();
      } catch (error) {
        console.log(error);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['tasks'],
      });
      toast.success('task added');
      setNewItemName('');
    },
    onError: () => {
      toast.error(error.response.data);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newItemName === '') {
      toast.warning('Please Provide title');
    } else {
      createTask(newItemName);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <h4>task bud -- htchung</h4>
      <div className='form-control'>
        <input
          type='text '
          className='form-input'
          value={newItemName}
          onChange={(event) => setNewItemName(event.target.value)}
        />
        <button type='submit' className='btn'>
          add task
        </button>
      </div>
    </form>
  );
};
export default Form_74;
