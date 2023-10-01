import React,{useState, useEffect, useCallback, useContext} from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import axios from 'axios';
import Navbar from './Componets/Navbar';
import Home from './Pages/Home';
import Footer from './Componets/Footer';
import Profile from './Pages/Profile';

// Blogs
import AddBlog from './Pages/Addblog';
import Blogs from './Pages/Blogs';
import SinglePost from './Pages/SinglePost';

// User
import Register from './Pages/Register';
import Login from './Pages/Login';
import UserContext from './Contexts/UserContext';

const App = () => {

  const { user, setUser } = useContext(UserContext);

  const [Posts, setPosts] = useState([]);

  useEffect(()=>{  

    // Get user info from localStorage
    const user = JSON.parse(localStorage.getItem('user'));
    setUser(user);

    // Fetch data from the backend API Data
    axios.get('http://localhost:8000/api/allPosts')
      .then((response) => {
        setPosts(response.data);
        console.log(Posts);
      }) 
      .catch((error) => {
        console.error(error);
      });

  }, []);

  return (
    <> 
      <BrowserRouter>
      <Navbar/>
      <Routes>
          <Route index element={<Home data={Posts} />} />
          <Route path='/blogs' element={<Blogs data={Posts} />} />
          <Route path='/blogs/:postId' element={<SinglePost />} />
          <Route path='blogs/addBlog' element={<AddBlog/>} />
          <Route path='/user/register' element={<Register/>} />
          <Route path='/user/profile' element={<Profile />} />
          <Route path='/user/login' element={<Login />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
