const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://root:123@cluster0.gq2rjja.mongodb.net/test")
.then(()=> console.log ("connection sucessfull...")) 
.catch((err) => console.log(err));

// schema
//A mongoose schema defines the structure of the documents,
// default values, validators, etc.

const playlistSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    ctype:String,
    videos: Number,
    author: String,
    active: Boolean,
    date: {
        type:Date,
        default:Date.now
    }

})

//A mongoose model is a wrapper on the mongoose schema,
// A mongoose schema defines the structure of the documents
// default values, validators, etc. where a mongoose model is  provides an interface 
// to the database for creting, querying,updateing  

//collection creation
const Playlist= new mongoose.model("Playlist", playlistSchema);

// create document or insert 

const reactPlaylist = new Playlist({
    name: "React JS",
    ctype: "Front End",
    videos: 80,
    author: "thapa Technical",
    active: true,
    
})

reactPlaylist.save()

// create document or insert using async await method

const creatDocument = async ()=> {

    try{
        const reactPlaylist = new Playlist({
            name: "Node JS",
            ctype:"Back End",
            videos: 50,
            author: "Thapa Technical",
            active: true
        })

        const result = await reactPlaylist.save();
        console.log(result);
    }catch (err){
        console.log (err);
    }
}

createDocument();