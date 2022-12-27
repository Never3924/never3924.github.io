document.addEventListener('DOMContentLoaded',()=>{
  //head
  document.head.innerHTML+='<title>Never3924 | '+document.getElementById('pageinside').className+'</title>';
  document.head.innerHTML+='<link href="https://fonts.googleapis.com/css?family=M+PLUS+1p" rel="stylesheet"></link>';
  document.head.innerHTML+='<link rel="icon" type="image/png" href="/img/paper.png"></link>';
  
  //body 
  var newhead=document.createElement('header');
  newhead.id='header';
  newhead.style.backgroundColor='#0062ff';
  newhead.style.fontWeight='10px';
  newhead.style.position='absolute';
  newhead.style.top='0px';
  newhead.style.left='0px';
  newhead.style.width='100%';
  
  var newa=document.createElement('a');
  newa.href='/';
  newa.id='hddiv';
  newa.style.textAlign='center';
  newa.style.textDecoration='none';
  newa.style.color='#ffffff';
  
  var newhdd=document.createElement('div');
  newhdd.style.fontSize='30px';
  newhdd.id='text';
  newhdd.textContent='Never3924 Blog (?)'
  
  //element add
  newa.appendChild(newhdd);
  newhead.appendChild(newa);
  
  document.body.prepend(newhead);
});
