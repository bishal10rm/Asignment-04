let totalcount = document.getElementById('totalcount');
let interviewcount = document.getElementById('interviewcount');
let rejectedcount = document.getElementById('rejectedcount');

const jobCardsSection = document.getElementById('jobcards');
 

const allFilterBtn= document.getElementById('btn-all')
const interviewBtn= document.getElementById('btn-interview')
const rejectedBtn= document.getElementById('btn-rejected')

let interviewList = [];
let rejectedList = [];



function toggleStyle(id){
    allFilterBtn.classList.remove('bg-black','text-white')
    interviewBtn.classList.remove('bg-black','text-white')
    rejectedBtn.classList.remove('bg-black','text-white')

    allFilterBtn.classList.add('bg-gray-300','text-black')
    interviewBtn.classList.add('bg-gray-300','text-black')
    rejectedBtn.classList.add('bg-gray-300','text-black')
    

const selected = document.getElementById(id)
 console.log(selected);

 selected.classList.remove('bg-gray-300','text-black')
 selected.classList.add('bg-black','text-white')



 }




// const jobCardsSection =document.getElementById('jobcards');




let totalCountNumber = document.querySelector('#totalcount').nextElementSibling;
let interviewCountNumber = document.querySelector('#interviewcount').nextElementSibling;
let rejectedCountNumber = document.querySelector('#rejectedcount').nextElementSibling;


// const jobCardsSection = document.getElementById('jobcards');

// const allFilterBtn = document.getElementById('btn-all');
// const interviewBtn = document.getElementById('btn-interview');
// const rejectedBtn = document.getElementById('btn-rejected');

let interviewCount = 0;
let rejectedCount = 0;

totalCountNumber.innerText=jobCardsSection.children.length;



jobCardsSection.addEventListener('click',function(event){
  
  const interviewBtnClicked = event.target.closest('.interview-btn');
  const rejectedBtnClicked = event.target.closest('.rejected-btn');

  const card=event.target.closest('.card');
  if (!card) return;
  const statusText = card.querySelector('.status');


    if (interviewBtnClicked){

     if (statusText.innerText!=="Interview"){
      
       statusText.innerText="Interview";
       statusText.classList.remove('text-red-500');
      statusText.classList.add('text-green-500');

      interviewCount++;
      interviewCountNumber.innerText = interviewCount;
    }
  }
  

    
    if  (rejectedBtnClicked){
     if (statusText.innerText !== "Rejected"){
      
      statusText.innerText="Rejected";
      statusText.classList.remove('text-green-500');
      statusText.classList.add('text-red-500');

      rejectedCount++;
      rejectedCountNumber.innerText = rejectedCount;
      }
    }
  });


allFilterBtn.addEventListener('click',function(){
   const cards=document.querySelectorAll('.card');
   cards.forEach(card=>card.style.display="flex");
});

interviewBtn.addEventListener('click',function(){
  const cards=document.querySelectorAll('.card');

  cards.forEach(card=> {
    const status =card.querySelector('.status');
      if (status.innerText === "Interview") {
      card.style.display="flex"

    } else {
        card.style.display="none";
    }
  });

});
rejectedBtn.addEventListener('click',function(){
  const cards = document.querySelectorAll('.card');
  
  cards.forEach(card=> {
      const status=card.querySelector('.status');
      if (status.innerText==="Rejected"){
        card.style.display="flex";

      } else {
         card.style.display="none"
      }
  });
});

