const btn=document.querySelector('.btn');
const closeIcon=document.querySelector('.closeicon');
 const popupSec= document.querySelector('.popupSec');
btn.addEventListener('click',()=>{
    popupSec.classList.remove('active')

})
closeIcon.addEventListener('click',()=>{
    popupSec.classList.add('active')

})

