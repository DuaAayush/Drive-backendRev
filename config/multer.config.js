const multer=require('multer');
const firebaseStorage=require('multer-firebase-storage');
const firebase=require('./firebase.config')
const serviceAccount=require('../drive-b6a5b-firebase-adminsdk-fbsvc-805b6d26d7.json');

const storage=firebaseStorage({
    credentials: firebase.credential.cert(serviceAccount),
    bucketName:'drive-b6a5b.firebasestorage.app',
    unique:true
})

const upload=multer({
  storage:storage
})

module.exports=upload;