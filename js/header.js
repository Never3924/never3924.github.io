document.addEventListener('DOMContentLoaded',()=>{
  //head
  document.head.innerHTML+='<title>Never3924 | '+document.getElementById('pageinside').className+'</title>';
  document.head.innerHTML+='<link href="https://fonts.googleapis.com/css?family=M+PLUS+1p" rel="stylesheet"></link>';
  
  //body
  var newhead=document.createElement('header');
  newhead.id='header';
  newhead.style='background-color:#0062ff;font-weight:10px;position:absolute;top:0px;left:0px;width:100%;font-size:70px;';
  
  var newa=document.createElement('a');
  newa.href='/';
  newa.id='hddiv';
  newa.style='text-align:center;text-decoration:none;color:#ffffff;';
  
  var newhdd=document.createElement('div');
  newhdd.id='text';
  newhdd.textContent='Never3924 Blog (?)'
  
  //element add
  newa.appendChild(newhdd);
  newhead.appendChild(newa);
  
  document.body.prepend(newhead);
});
