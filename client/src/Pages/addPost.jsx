import React, {useState} from 'react'
import axios from 'axios'
import './addPost.css'


const AddPost = () => {

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCate] = useState("");
  const [coverImg, setCoverImg] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();

      const postData = new FormData();
      postData.append("title", title);
      postData.append("desc", desc);
      postData.append("category", category);
      postData.append("coverImg", coverImg);

      console.log(postData);
     
        // Display the key/value pairs
        for (const pair of postData.entries()) {
          console.log(`${pair[0]}, ${pair[1]}`);
        }

      const res = await axios.post("http://localhost:8000/api/addPost", postData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      // console.log(res.data);
    }


  return (
    <div>
        <form onSubmit={handleSubmit} id='addPost'>
            <div class="mb-4">
                <input type="text" class="form-control" id="title" placeholder="Title" 
                       name="title" 
                       autoFocus={true}
                       onChange={e=>setTitle(e.target.value)} required/>
            </div>
            <div class="mb-4">
                <textarea class="form-control" id="desc" rows="5"  placeholder="Tell your story.."
                          name="desc" 
                          onChange={e=>setDesc(e.target.value)} required></textarea>
            </div>
            <div class="mb-3 d-flex justify-content-between">
                <label class="form-label" htmlFor='uploadBtn'><i class="fa-solid fa-cloud-arrow-up"></i> Upload Cover Image</label>
                <input type="file" id='uploadBtn' placeholder="Cover Image" 
                      name="coverImg" onChange={(e) => setCoverImg(e.target.files[0])}/>
            </div>
            <select class="form-select" aria-label="Default select example"
                    onChange={(e) => setCate(e.target.value)}>
              <option selected>Choose Category</option>
              <option value="Web Developmet">Coding</option>
              <option value="Backend">Health and fitness</option>
              <option value="React js">Food</option>
              <option value="Software Engineering">Lifestyle</option>
              <option value="AI ML">Photography</option>
              <option value="UI/UX">Sports</option>
            </select>

            <button type="submit" class="btn btn-dark mt-4"><i class="fa-solid fa-upload" style={{marginRight:'5px'}}></i> Publish</button>
        </form>
    </div>
  )
}

export default AddPost
