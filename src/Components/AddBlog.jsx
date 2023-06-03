import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "../StyleComponent/AddBlog.css" 
import "../StyleComponent/Responsive.css"

function AddBlog() {
    const navigate = useNavigate()
    const [blog , setBlog] = useState({
        title :"",
        description :"",
        author : ""
    })

    const handleChange = (e)=>{
        setBlog({...blog, [e.target.name] : e.target.value}) 
    }  
const handleSubmit = (e)=>{
    fetch("http://localhost:5000/api/add-blog", {
        method :"POST",
        headers : {
            "Content-Type" :"application/json"
        },
        body : JSON.stringify(blog) 
        
    }) 
    setTimeout(()=>{
        navigate('/blog')
    }, 2000);

    e.preventDefault() 
}


    return (
        <> 
            <h1 className='text-center border-bottom my-4'>Add Blog</h1>
            <div className="addBlogForm">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="Title" className="form-label">Title</label>
                        <input onChange={handleChange} required type="text" placeholder='Title ' className="form-control" id="Title" name="title" aria-describedby="title" />
                        <div id="title" className="form-text">Blog Title Here </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="describtion" className="form-label">Description</label>
                        <textarea onChange={handleChange} placeholder='Write Now ' required type="text" className="form-control" name='description' id="desgcription" />
                        <div id="title" className="form-text">Blog Description Here </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="author" className="form-label">Author</label>
                        <input onChange={handleChange} placeholder='Author' required type="text" className="form-control" name='author' id="author" />
                        <div id="title" className="form-text">Article Author Name  </div>
                    </div>
                    
                    <button  type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </>
    )
}

export default AddBlog