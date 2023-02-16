"use strict";

const designerArray = [ 
  {
    name: 'Ralph Lauren',
    background: 'The owner and founder of the famous ralph lauren clothing brand',
    image: './images/lauren.jpg',
    message:' Selling ties that he designed himself to becoming one of the best fashion designers on earth',
  },
  {
    name: 'Palesa Madisakwane',
    background: 'South African Designer known all across SA',
    image: './images/pal.jpg',
    message:'Palesa, one of the most famous designer in South Africa, with her pieces worn all across the SA',
  },
  {
    name: 'Marc Jacobs',
    background: 'An American fashion designer, head of his own label',
    image: './images/jacobs.jpg',
    message:'Designer has taken The fashion world by storm with his pieces being worn by Cara Delevingne',
  },
  {
     name: 'Donna Karran',
     background: 'Brought upper class New York style into America',
     image: './images/donna.jpg',
     message:'Donna Karan founder of the DKNY fashion line worn all across America. A woman who has it all',
   },
  {
    name: 'Tom Ford',
    background: 'Known as the perfectionist and a workaholic',
    image: './images/tom.jpg',
    message:'"If Im awake, I am working" Is what he is known for saying, perhaps why his brand is so huge.',
 
  },
  {
     name: 'Giorgio Armani',
     background: 'Italian Fashion designer, owner of label Armani',
     image: './images/Armani.jpg',
     message:'First got notoriety working for Cerruti and then for many others including Hilton and Bagutta'
   } 
 ];
const startingPoint = document.querySelector('.main-program');


document.addEventListener('DOMContentLoaded', () => {
  startingPoint.insertAdjacentHTML('afterend', `
  <section class="featured-speakers">
  <h2>Featured Designers</h2>
  <div class="designers">
      <div class="speaker">
        <button type="button" class="pop-up ralph" id="1"> <span class="sr-hidden">Pop</span></button>
        <div class="speaker-detail">
          <h3>${designerArray[0].name}</h3>
          <span class="about-speaker">${designerArray[0].background}</span>
          <p>${designerArray[0].message}</p>
        </div>
      </div>
      <div class="speaker">
        <button type="button" class="pop-up pal" id="2"> <span class="sr-hidden">Pop</span></button>            
        <div class="speaker-detail">
            <h3>${designerArray[1].name}</h3>
            <span class="about-speaker">${designerArray[1].background}</span>
            <p>${designerArray[1].message}</p>
        </div>
        </div>
        <div class="speaker">
          <button type="button" class="pop-up jacobs" id="3"><span class="sr-hidden">Pop</span></button>             
        <div class="speaker-detail">
            <h3>${designerArray[2].name}</h3>
            <span class="about-speaker">${designerArray[2].background}</span>
            <p>${designerArray[2].message} </p>
        </div>
        </div>
        <div class="speaker">
          <button type="button" class="pop-up donna" id="4"><span class="sr-hidden">Pop</span></button>               
        <div class="speaker-detail">
            <h3>${designerArray[3].name}</h3>
            <span class="about-speaker">${designerArray[3].background}</span>
            <p>${designerArray[3].message}</p>
        </div>
        </div>
        <div class="speaker">
          <button type="button" class="pop-up tom" id="5"><span class="sr-hidden">Pop</span></button>             
        <div class="speaker-detail">
            <h3>${designerArray[4].name}</h3>
            <span class="about-speaker">${designerArray[4].background}</span>
            <p>${designerArray[4].message}</p>
        </div>
        </div>
        <div class="speaker">
          <button type="button" class="pop-up armani" id="6"><span class="sr-hidden">Pop</span></button> 
        <div class="speaker-detail">
            <h3>${designerArray[5].name}</h3>
            <span class="about-speaker">${designerArray[5].background}</span>
            <p>${designerArray[5].message}</p>
        </div>
      </div>

  </div>

</section> 
  ` )
})