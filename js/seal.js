const symbols=['☠','🐍','🐙','🦅','🐺','☀','☾','⚒'];
const target=['🐍','☠','🐙'];
const idx=[0,0,0];
const c=document.getElementById('wheels');
for(let i=0;i<3;i++){let d=document.createElement('div');d.className='wheel';d.id='w'+i;d.textContent=symbols[0];
d.onclick=()=>{idx[i]=(idx[i]+1)%symbols.length;d.style.transform='rotate('+(idx[i]*45)+'deg)';d.textContent=symbols[idx[i]];};
c.appendChild(d);}
function check(){let ok=true;for(let i=0;i<3;i++)if(symbols[idx[i]]!==target[i])ok=false;
if(ok)window.location='journal.html';else document.getElementById('msg').textContent='The seal does not yield.';}
