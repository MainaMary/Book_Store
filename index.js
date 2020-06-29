// set the width of the side navigation to 250px and the left margin of the page content to 250px
 const sideNav = document.getElementById('mySidenav');
 sideNav.addEventListener('mouseover',openNav);

function openNav(e){
    document.getElementById("mySidenav").style.width= "200px";
    document.querySelector('.main').style.marginLeft="200px";
    document.getElementById('.layout');
    sideNav.style.backgroundColor=`rgb(${e.offsetX},${e.offsetY}, 40)`;
}
function closeNav(){
    document.getElementById('mySidenav').style.width="0";
    document.querySelector('.main').style.marginLeft="0";
}



const books = document.querySelectorAll('.content_books');
books.forEach(book => { 
   let btn = book.querySelector('.readMore');
   const image = book.querySelector('.img_coverpage');
   const moreText = book.querySelector('.more');
   const intro = book.querySelector('.book_intro');

   btn.addEventListener('click', function(){
    if( moreText.style.display ==='inline'){
        btn.innerHTML='Read More'
        moreText.style.display ="none";
        // image.style.width="250px";
        image.style.height="150px";
         introBook.style.fontSize ='1.4em';
    }else{
        moreText.style.display ="inline";
        btn.innerHTML= 'Read Less'; 
        // image.style.width="120px";
        image.style.height="120px";
        introBook.style.fontSize='1.2em';

    }

})
});






function getMore(e){
    
  
    }

// Get the body element and toggle between the .dark-mode class
 const toggleBtn = document.querySelector('.toggle');
 toggleBtn.addEventListener('click', myToggle);
function myToggle(e){
     e.preventDefault();
     if(toggleBtn){
        const element = document.body;
        element.classList.toggle('dark-mode');
        // myButton.style.backgroundColor="#fff";
        // myButton.style.color="#000";
     }else{
         myButton.style.backgroundColor="#000";
         myButton.style.color="yellow";
     }
    
 }

 let sliderImages= document.querySelectorAll('.slide');
 let arrowLeft= document.querySelector('#arrow-left');
 let arrowRight= document.querySelector('#arrow-right');
 let current =0;
 //clear all images
 function reset(){
     for(let i=0; i < sliderImages.length; i++){
       sliderImages[i].style.display='none';
     }
 }
 //start slide
 function startSlide(){
     reset();
     sliderImages[0].style.display='block';
 }
 
 //show prev slide Left
 function slideLeft(){
     reset();
     sliderImages[current - 1].style.display="block";
     current--;
 }
 // show next 
 function slideRight(){
     reset();
     sliderImages[current + 1].style.display='block';
     current++;
 }
 
 //Left arrow click
 arrowLeft.addEventListener('click',function(){
     if(current === 0){
         current = sliderImages.length;
     }
     slideLeft(); 
 });
 
 //Right arrow
 arrowRight.addEventListener('click',function(){
     if(current === sliderImages.length - 1){
         current = - 1;
     }
     slideRight(); 
 });
 
 startSlide();
 
 //Adding Books
 let btnAdd= document.querySelector('.submit_btn');
 btnAdd.addEventListener('click', addItems);
 function addItems(e){
     e.preventDefault();
    let inputValue = document.querySelector('.add_items').value;
    let textNode= document.createTextNode(inputValue);
    let newList= document.createElement('li');
    newList.appendChild(textNode);
    document.querySelector('.items').appendChild(newList);

    let dltBtn= document.createElement('button');
    dltBtn.className ='delete';
    dltBtn.innerHTML='delete';
    newList.appendChild(dltBtn);
    // document.querySelector('.items').style.border ='1px solid #000';
    document.querySelector('.items').style.width='700px';
    document.querySelector('.items').style.margin =' 30px auto';

 }
 //Delete functionality
 let itemList= document.querySelector('.items');
 itemList.addEventListener('click', deleteItems);
 function deleteItems(e){
     e.preventDefault();
     if(e.target.classList.contains('delete')){
         if(confirm('Are you sure?')){
             let newList = e.target.parentElement;
             itemList.removeChild(newList);
         }
     }
     for(let i=0;i>newList.length; i--){
         if(newList[0]){
             itemList.style.border='none';
         }
     }
 }
 



