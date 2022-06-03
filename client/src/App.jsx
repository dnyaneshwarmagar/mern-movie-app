import { useEffect, useState } from 'react'
import './App.css';
import axios from 'axios'

function App() {
  const [data, setData] = useState([]);

  useEffect(()=>{
    getMovies()
  },[])

  const getMovies= ()=>{
    axios("http://localhost:8080/movies").then(res => setData(res.data)).catch(err=> console.log(err))
  }

  return (
    <div className="App">
     <h1 style={{color:"red"}}>Movie App</h1>
     <div className='list'>
       {data?.map((el)=>(
         <div>
           <h3>Movie_Name:<span style={{color:"tomato"}}>{el.movie_name}</span></h3>
           <p>Release_Year:{el.release_date}</p>
           <p>Rating:{el.rating}</p>

         </div>
       ))}
     </div>
    </div>
  )
}

export default App
