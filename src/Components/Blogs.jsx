import React, { useState, useEffect } from 'react';
import Blog from './Blog';
import '../StyleComponent/Blogs.css';
import Spinner from './Spinner';
function Blogs() {
    const [readBlog, setReadBlog] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/api/get-blog')
            .then(res => res.json())
            .then(data => {
                setReadBlog(data);
                setIsLoading(false);
            })
            .catch(error => {
                setError(error);
                setIsLoading(false);
            });
    }, []);

    if (isLoading) {
        return <Spinner/> // Render a loading state while data is being fetched
    }

    if (error) {
        return <p>Error: {error.message}</p>; // Render an error message if there's an error
    }

    return (
        <>
            <h2 className='text-center my-4 border' >Blogs</h2>
            <div className="blogContainer">
                {readBlog.map(blog => <Blog blog={blog} key={blog._id} />)}
            </div>
        </>
    );
}

export default Blogs;