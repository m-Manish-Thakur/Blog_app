import React,{useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import axios from 'axios';
import Navbar from './Componets/Navbar';
import Home from './Pages/Home';
import Footer from './Componets/Footer';

// Blogs
import AddBlog from './Pages/Addblog';
import Blogs from './Pages/Blogs';
import SinglePost from './Pages/SinglePost';

// User
import Register from './Pages/Register';
import Login from './Pages/Login';

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
          <Route index element={<Home data={Posts} />} />
          <Route path='/blogs' element={<Blogs data={Posts} />} />
          <Route path='/blogs/:postId' element={<SinglePost data={Posts} />} />
          <Route path='blogs/addBlog' element={<AddBlog/>} />
          <Route path='/user/register' element={<Register/>} />
          <Route path='/user/login' element={<Login />} />


      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
