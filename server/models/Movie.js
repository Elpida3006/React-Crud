const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
    id: mongoose.Types.ObjectId,
    imageUrl: {
        type: String,
        required: true,
        unique: false,
        // validate: [/^http|https/, 'url have to start with http/https']
    },
    title: {
        type: String,
        required: true,
        // unique: true,

    },
    shortDescription: {
        type: String,
        required: true,
        maxlength: [154,'it is too long description']
    },
    description: {
        type: String,
        required: true,
        maxlength: [354,'it is too long description']
    },
    siteLink: {
        type: String,
        required: true,
        unique: false,
        validate: [/^http|https/, 'url have to start with http/https']
    },
   
    favorite: [{
        type: mongoose.Types.ObjectId,
        // ref: "Favorite"
    }],
    likeRate: {
        type: Number,
        required: true,
    }
  
  
});


module.exports = mongoose.model('Movie', productSchema)


// {
//     "id": "1",
//   "imageUrl": "dgfdgh",
//   "title": "66",
//   "shortDescription": "ghgh",
//   "description": "fdhgh",
//   "siteLink": "Silver",
//   "favorite": [],
//   "likeRate": "2"
// }