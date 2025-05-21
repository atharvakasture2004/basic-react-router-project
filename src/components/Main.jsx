 import { useState } from 'react'
 
 function Main(){
  const data= ["Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum expedita quam, vero pariatur porro consequatur quo error aspernatur animi sint inventore cupiditate, est molestiae! Quos, similique? Dicta sunt blanditiis molestiae","Laborum exercitationem distinctio nobis consequuntur adipisci omnis consequatur. Optio facere necessitatibus ea odio perspiciatis repellat non ipsam enim incidunt excepturi! Eaque aperiam quas voluptate. Quos in reprehenderit sit minima molestiae!"];

  const [index,setIndex]=useState(0);

  const [count,setCount]=useState(0);
  
  return (<main>
        <p>The value of data is : {data[index]}</p>
        <button onClick={()=>
          {
            setIndex(index === 0 ? 1 : 0);
          }
        }>click me </button>


        <button onClick={()=>{setCount(count+1)}}>counter : {count}</button>
    </main>);
}

export default Main;