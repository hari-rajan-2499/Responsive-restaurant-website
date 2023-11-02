const mymenubar=document.querySelector('#myicondiv');
const myullist=document.querySelector('.ul-links');
const mybodyy=document.querySelector('body');
mymenubar.addEventListener('click',()=>{
    myullist.classList.toggle('addul')
    mybodyy.classList.toggle('byaxis')
})
