import React from 'react'
import '../StyleComponent/Blog.css'
import { AiFillDelete } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { loggedInContext } from '../App'
import "../StyleComponent/Responsive.css"

function Blog(props) {
    const navigate = useNavigate()
    const [login] = useContext(loggedInContext)

    const deleteBlog = (id) => {

        if (window.confirm("Are you sure to delete the blog?")) {
            fetch(`http://localhost:5000/api/delete-blog/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(res => {
                    alert(res.message)
                    setTimeout(()=>{
                        navigate('/create')
                    }, 2000);
                })
                .catch(err => console.log(err))
        }
    }

    const { title, description, author, _id } = props.blog;
    return (
        <>
            <div className="blog"> 
                <div className="card">
                    {
                        login.email && <AiFillDelete onClick={() => deleteBlog(_id)} className='Icons' />
                    }
                    <div className="card-body">
                        <div className="cardHeader">
                            <h4 className="card-title">{title}</h4>
                        </div>
                        <h6 className="card-subtitle mb-2">{author}</h6>
                        <p className="card-text">{`${description.slice(0, 200)}  . . .  `}
                        </p>
                        <Link to={`/readMore/${_id}`}>Read More</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blog