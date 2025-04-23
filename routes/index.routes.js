const express=require('express')
const router=express.Router();
const authMiddleware=require('../middlewares/auth')
const upload=require('../config/multer.config');
const firebase=require('../config/firebase.config')

const fileModel=require('../models/files.models')
router.get('/home', authMiddleware,  async (req,res)=>{
    const userFiles=await fileModel.find({
        user:req.user.userId
    })
    res.render('home',{
        files:userFiles
    });
})

router.post('/upload',authMiddleware,upload.single('file'),async (req,res)=>{
    const newFile=await fileModel.create({
   path:req.file.path,
    originalname:req.file.originalname,
     user:req.user.userId   
})
res.redirect('/home');

})

router.get('/download/:path', authMiddleware, async (req, res) => {
    const loggedInUserId = req.user.userId;
    const path = req.params.path;
  
    const file = await fileModel.findOne({
      user: loggedInUserId,
      path: path
    });
  
    if (!file) {
      return res.status(404).json({
        message: 'Unauthorized'
      });
    }
  
    const signedUrl = await firebase
      .storage()
      .bucket()
      .file(path)
      .getSignedUrl({
        action: 'read',
        expires: Date.now() + 60 * 1000,
        responseDisposition: `attachment; filename="${file.originalname}"`
      });
  
    res.redirect(signedUrl[0]);
  });
  

module.exports=router;