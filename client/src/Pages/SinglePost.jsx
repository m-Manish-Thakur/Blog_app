import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const SinglePost = ({data}) => {

    // Extracts pathname property(key) from an object
    const { pathname } = useLocation();

    // Automatically scrolls to top whenever pathname changes
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    const { postId } = useParams();
    const post = data.find((p) => p._id === postId);

    console.log(post);

    console.log(data);

  return (
    <>



        <div id="singlePost">

            {
                post ? 
                <div>
                    <img src={`http://localhost:8000/${post.coverImg}`} />
                    <h1>{post.title}</h1>
                    <p id='desc'  style={{ whiteSpace: 'pre-wrap' }}>{post.desc}</p>
                </div>
                :
                <div>
                    <h1>Loading...</h1>
                </div>
            }
            
        </div>
    </>
  )
}

export default SinglePost
