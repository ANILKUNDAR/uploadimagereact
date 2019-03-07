const express=require('express');
const route=express.Router();
const multer=require('multer');

const courses=[
    {id:1,name:'course1'},
    {id:2,name:'course2'},
    {id:3,name:'course3'},
];
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images/uploads')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname)
    }
});
const upload = multer({
    storage
})
route.post('/upload', upload.single('image'), (req, res) => {
    if (req.file)
        res.json({
            imageUrl: `images/uploads/${req.file.filename}`
        });
    else
        res.status("409").json("No Files to Upload.");
});

module.exports=route;