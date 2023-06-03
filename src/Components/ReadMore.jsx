import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import '../StyleComponent/readMore.css'
import Spinner from './Spinner';
import "../StyleComponent/Responsive.css"

function ReadMore() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [readBlog, setReadBlog] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/api/get-blog')
      .then(res => res.json())
      .then(data => {
        setReadBlog(data)
        setIsLoading(false)
      })
       .catch(error => {
        // Handle fetch error
        console.error(error);
      });
  }, [])

  if (isLoading) {
     return <Spinner/>
  }

  const blog = readBlog.find(blog => blog._id === id);
   

  return (
    <div className='readMore'> 
      <div className="blogArticle">
        <h1 className='text-center my-3 text-primary'>{blog?.title}</h1>
        <p className='text-primary'>Author Name : {blog?.author}</p>
        <p>  {blog?.description}</p>
      </div>
      <Link to="/blog" className='goBackBtn'>Go Back</Link>
    </div>
  )
}

export default ReadMore