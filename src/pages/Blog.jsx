import { Outlet, useNavigate } from "react-router"


function Blog() {


  const navigate = useNavigate();
  return (
    <>
    <h1>Blogs Page</h1>
    <div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas distinctio, praesentium sequi deleniti laborum reiciendis dicta quibusdam dignissimos rem corrupti reprehenderit unde necessitatibus laudantium aperiam quos veritatis voluptates numquam dolores?</p>
        <p>Facere quod corporis eveniet repellendus! Molestiae assumenda incidunt accusamus culpa corporis dolores sequi voluptate beatae temporibus iste facere non blanditiis, eaque quaerat dolor. Deserunt ipsum omnis deleniti illo dolorum recusandae.
        Pariatur odio voluptatum atque natus harum minima nam, quidem culpa nihil libero. Sunt rerum libero reprehenderit! </p>
        <p>Consequuntur, tempore ad quas consectetur ut impedit aliquid, quibusdam, aut minus repellat laudantium at.</p>
        
        
    </div>
    <button onClick={()=>navigate('post1')}>
            goto
    </button>
    <button onClick={()=>navigate('post2')}>
            goto
    </button>
    <Outlet/>
    
    </>
  )
}

export default Blog