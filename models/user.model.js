const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        trim:true,
        lowercase:true,
        unique:true,
        minlength:[3,'username must be atleast 3 chrachter long']
    },
    email:{
        type:String,
        required:true,
        trim:true,
        lowercase:true,
        unique:true,
        minlength:[13,'username must be atleast 13 chrachter long']
    },
    password:{
        type:String,
        required:true,
        trim:true,
        minlength:[5,'username must be atleast 5 chrachter long']
    }
})

const user=mongoose.model('user',userSchema);

module.exports=user;
//hello commit
//commiting again as made some minor changes