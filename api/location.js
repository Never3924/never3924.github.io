const express=require('express');

//expressアプリを生成
const app=express();

var comments={};

app.get('/api/comments/',(req,res)=>{
  res.json(comments);
});
