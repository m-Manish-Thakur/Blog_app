import React,{useState, useEffect} from 'react';
import Navbar from './Componets/Navbar';
import Home from './Pages/Home';
import AddPost from './Pages/addPost';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
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
      <BrowserRouter>
      <Navbar/>
      <Routes>
          <Route index element={<Home data={Posts}/>} />
          <Route path='/addPost' element={<AddPost/>} />

      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
