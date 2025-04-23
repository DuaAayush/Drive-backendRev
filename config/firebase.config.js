const Firebase=require('firebase-admin')

const serviceAccount=require('../drive-b6a5b-firebase-adminsdk-fbsvc-805b6d26d7.json')

const firebase=Firebase.initializeApp({
    credential: Firebase.credential.cert(serviceAccount),
    storageBucket:'drive-b6a5b.firebasestorage.app'
})

module.exports=Firebase;