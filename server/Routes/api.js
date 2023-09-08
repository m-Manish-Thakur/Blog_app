const express = require('express');
const router = express.Router();
const multer = require('multer');
const PostApi = require('../Models/api');



// Configure Multer for image uploads
const storage = multer.diskStorage({
    destination: 'uploads/',
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
  });
  const upload = multer({ storage });
  

// Create a new post 
router.post('/addPost', upload.single('file'), async (req, res) => {
    try{  
        const { title, desc, category } = req.body;
        const imagePath = req.file ? req.file.path : '';
        console.log(imagePath);

        const newPost = await PostApi.create({
            title, 
            coverImg: imagePath,
            desc,
            category
        });
 
        res.status(201).json(newPost);
    }catch(err){
        console.log("Error", err);
    }

});

router.get('/allPosts',async (req, res) => {
    const api = await PostApi.find({});
    res.json(api);
});



module.exports = router;