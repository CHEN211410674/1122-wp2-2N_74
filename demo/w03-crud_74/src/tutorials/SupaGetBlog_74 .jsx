import axios from 'axios';
import { useState, useEffect } from 'react';

// let api_url = `http://localhost:5000/api/card_xx`;

//import { supabase } from '../db/clientSupabase';

let api_url ='https://sgtwgxsjtbibcbrzrfra.supabase.co/rest/v1/card_74?select=*';

const SupaGetBlog_74 = () => {
  const [name, setName] = useState('Chen Yi Zhen');
  const [id, setId] = useState(211410674);
  const [blogs, setBlogs] = useState([]);
  const fetchBlogsFromSupabase = async () => {
    try {
      const response = await axios.get(api_url,{
        headers:{
          apikey:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNndHdneHNqdGJpYmNicnpyZnJhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODYzMjI5NjQsImV4cCI6MjAwMTg5ODk2NH0.DSXsHYJOUjW3z5tJyNO6qxjBOuJKqH2H0szLeF1-mDA',
          Authorization:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNndHdneHNqdGJpYmNicnpyZnJhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODYzMjI5NjQsImV4cCI6MjAwMTg5ODk2NH0.DSXsHYJOUjW3z5tJyNO6qxjBOuJKqH2H0szLeF1-mDA'
        },
      });
     
      console.log('blogs data', response.data);
      //setBlogs(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBlogsFromSupabase();
  }, []);

  return (
    <section className='blogs'>
      <div className='section-title'>
        <h2> Get Blogs Using Bash </h2>
        <h3>
          {name}, {id}
        </h3>
      </div>
      <div className='blogs-center'>
        {blogs.map((item) => {
          const { id, img, remote_url, title, category, descrip } = item;
          return (
            <article key={id} className='blog'>
              <img src={img} alt='Coffee photo' className='img blog-img' />
              <div className='blog-content'>
                <span>
                  {' '}
                  {category} <i className='fa-solid fa-mug-saucer'></i>
                </span>
                <h3>{title}</h3>
                <p>{descrip}</p>
                <a href='#'>read more</a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default SupaGetBlog_74;