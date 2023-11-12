const sliderPortfolio = document.querySelector('.slider-portfolio')
const srcImgDisplay = document.querySelector('.img-display');
const allPics = Array.from(document.querySelectorAll('.grid-item img'))
const rightBtn = document.querySelector('.btn-right')
const leftBtn = document.querySelector('.btn-left')
const closeBtn = document.querySelector('.btn-close-slider')


let imgDisplay;
let currentIndex;

allPics.forEach((pic, id)=>{
  pic.addEventListener('click', e=>{
    sliderPortfolio.style.display = "block";
    srcImgDisplay.src = e.target.src;
    imgDisplay = e.target;
    currentIndex = id
  })
})

rightBtn.addEventListener('click', (e)=>{
if(currentIndex<allPics.length){
  currentIndex++
}else{
  currentIndex=0
}
srcImgDisplay.src = allPics[currentIndex].src
imgDisplay = allPics[currentIndex]
})

leftBtn.addEventListener('click', (e)=>{
  if(currentIndex==0){
    currentIndex=allPics.length-1
  }else{
    currentIndex--
  }
  srcImgDisplay.src = allPics[currentIndex].src
  imgDisplay = allPics[currentIndex]
  })


closeBtn.addEventListener('click', ()=>{
sliderPortfolio.style.display = "none";
})
