const express=require('express');
const bodyParser=require('body-parser');
const morgan=require('morgan');
const cors=require('cors');
const Route=require('./route/route');

const app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use(morgan('tiny'));
app.use(cors());

app.use(express.static('public'))

app.use('/api',Route)

const PORT=process.env.PORT||5000;
app.listen(PORT,()=>{
    console.log(`listening at port ${PORT}`)
});
