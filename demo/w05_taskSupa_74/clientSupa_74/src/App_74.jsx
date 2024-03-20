import { ToastContainer } from 'react-toastify';
import { nanoid } from 'nanoid';
import Form_74 from './Form_74';
import Items_74 from './Items_74';
import { useState } from 'react';
const defaultItems = [
  { id: nanoid(), title: 'walk the dog', isDone: false },
  { id: nanoid(), title: 'wash dishes', isDone: false },
  { id: nanoid(), title: 'drink coffee', isDone: true },
  { id: nanoid(), title: 'take a nap', isDone: false },
];
const App_74 = () => {
  const [items, setItems] = useState(defaultItems);
  return (
    <section className='section-center'>
      <ToastContainer position='top-center' />
      <Form_74 />
      <Items_74 items={items} />
    </section>
  );
};
export default App_74;
