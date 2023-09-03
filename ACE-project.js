const slides=document.getElementsByClassName("slide")
var counter=0;
console.log(slides)
const gonext=()=>{
   counter=counter+1;
   alert("I will add it soon")
   slideImage()

}
const goprev=()=>{
   counter=counter-1;
   alert("I will add it soon")
   slideImage()

}
const slideImage=()=>{
   slides.forEach( 
      (slide)=> {
           slide.style.transform='translateX(-${counter * 100}%)'
      }
   ) 
}