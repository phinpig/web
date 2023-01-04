const backgroundImages =[
    '1.jpg',
    '2.jpg',
    '3.jpg', 
]
 
function bodyPaint(){
   const num = Math.floor(Math.random() * backgroundImages.length);
   const wrapper=document.querySelector('#wrapper');
   const selectBg = backgroundImages[num];  
  /* bg 0, 3  color => white */
   if(num === 0 || num === 3) { 
        wrapper.className ='white' 
   }
   wrapper.style.background = `url(image/${selectBg}) no-repeat center center`;
   wrapper.style.backgroundSize='cover';
}

bodyPaint()
 