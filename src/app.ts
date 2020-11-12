import express from 'express';

const app = express();

app.get('/',(req:any) =>{
  req.name = 'lol';
});


app.listen(3000,()=>{
  console.log('started on 3000');
});