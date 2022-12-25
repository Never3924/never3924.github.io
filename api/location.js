const express=require('express');

//expressアプリを生成
const app=express();

var comments={};

app.get('/',(req,res)=>{
  res.json(comments);
});
