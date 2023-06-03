import React from 'react' 
import Carusel from './Carusel'
import '../StyleComponent/Home.css'
import "../StyleComponent/Responsive.css"
import { Link } from 'react-router-dom'
function Home() {
  return (
    <>
      <div className="container"> 
          <h1 className='text-center my-3'>Welcome to 𝓢𝓽𝓸𝓻𝔂 𝓢𝓮𝓮𝓭𝓼</h1>
          <Carusel/>

          <div className="homeArticle">
             <h3>Why read blogs?</h3>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum ratione quod laborum, aut laudantium dignissimos voluptatem dolores voluptas deserunt labore sunt, expedita fugiat, perferendis quis ipsa culpa nesciunt dolorum facere magnam! Sed ex quibusdam hic facere facilis molestiae cumque doloribus in quo quidem vitae, iste cupiditate possimus tenetur sunt consectetur aut ratione asperiores. Itaque ex beatae pariatur amet ullam, qui molestiae quidem quo quos explicabo repudiandae facere inventore ducimus ipsa nulla. Itaque quos necessitatibus iusto unde quam expedita alias iure animi magnam, error sapiente! Amet officia, quia debitis aspernatur modi velit rerum? Deleniti minus similique, libero laboriosam possimus consectetur sunt!</p>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum ratione quod laborum, aut laudantium dignissimos voluptatem dolores voluptas deserunt labore sunt, expedita fugiat, perferendis quis ipsa culpa nesciunt dolorum facere magnam! Sed ex quibusdam hic facere facilis molestiae cumque doloribus in quo quidem vitae, iste cupiditate possimus tenetur sunt consectetur aut ratione asperiores. Itaque ex beatae pariatur amet ullam, qui molestiae quidem quo quos explicabo repudiandae facere inventore ducimus ipsa nulla. Itaque quos necessitatibus iusto unde quam expedita alias iure animi magnam, error sapiente! Amet officia, quia debitis aspernatur modi velit rerum? Deleniti minus similique, libero laboriosam possimus consectetur sunt!</p>
            <Link to='/blog'>Read Blog</Link>
          </div>
      </div>
    </>
  )
}

export default Home