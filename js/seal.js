const sets={left:['🐺','🌲','🐍','⚒','⛰'],middle:['☀','🌙','☠','ᚨ','🐦'],right:['⚓','⭐','🌊','🐙','🌀']};const current={left:0,middle:0,right:0};
function build(id){let e=document.getElementById(id);sets[id].forEach(s=>{let d=document.createElement('div');d.className='symbol';d.textContent=s;e.appendChild(d)});e.onclick=()=>rotate(id)}
function rotate(id){current[id]=(current[id]+1)%sets[id].length;document.querySelectorAll('#'+id+' .symbol').forEach((x)=>x.style.transform=`translateY(${-56*current[id]}px)`)}
['left','middle','right'].forEach(build);
document.getElementById('unlock').onclick=()=>{let c=[sets.left[current.left],sets.middle[current.middle],sets.right[current.right]];if(c.includes('🐍')&&c.includes('☠')&&c.includes('🐙')){document.getElementById('message').textContent='The seal breaks...';document.getElementById('journal').className='show'}else document.getElementById('message').textContent='The seal does not yield.'}
