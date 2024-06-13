// window.onload=function(){ anime({
//   targets:'.text6',
//   opacity: [1,0],
//   duration:1000
//  })
//  }

let grid_2=document.querySelector('.sozdanie ');
 let buttom=document.querySelector('.grid-2'); 
  let  interface=document.querySelector('.interface');
  let navigation=document.querySelector('.navigation')
  let front_end_main=document.querySelector('.front-end-main');
  let kod=document.querySelector('.kod');
  let designe=document.querySelector('.disigne');
  let back=document.querySelector('.back-end');
  let base=document.querySelector('.base');
  let cms=document.querySelector('.cms');
  let back_end_main=document.querySelector('.back-end-main');
  let host=document.querySelector('.host');
  let content=document.querySelector('.content');

    buttom.addEventListener('click' , function(){
    grid_2.classList.toggle('active');
    interface.classList.toggle('active');
    navigation.classList.toggle('active');
    front_end_main.classList.toggle('active');
    kod.classList.toggle('active');
    designe.classList.toggle('active');
    back.classList.toggle('active');
    base.classList.toggle('active');
    cms.classList.toggle('active');
    back_end_main.classList.toggle('active');
    host.classList.toggle('active');
    content.classList.toggle('active');

    })

    $('.karusel-html').bxSlider({
      auto: true,
      autoControls: true,
      stopAutoOnClick: true,
      pager: true,
      slideWidth: 488,
      
    });

    $('.karusel-css').bxSlider({
      auto: true,
      autoControls: true,
      stopAutoOnClick: true,
      pager: true,
      slideWidth: 488,
      
    });

    $('.karusel-js').bxSlider({
      auto: true,
      autoControls: true,
      stopAutoOnClick: true,
      pager: true,
      slideWidth: 488,
      
    });

