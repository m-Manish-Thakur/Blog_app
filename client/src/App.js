import React,{useState, useEffect} from 'react';
import Navbar from './Componets/Navbar';
import Home from './Componets/Home';
import axios from 'axios';
 
const App = () => {
  const [Posts, setPosts] = useState([]);

  useEffect(()=>{  
    // Fetch data from the backend API Data
    axios.get('http://localhost:8000/api/allPosts')
      .then((response) => {
        setPosts(response.data);
        console.log(Posts);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []) 

  return (
    <>
      <Navbar/>
      <Home data={Posts}/>
    </>
  )
}

export default App
