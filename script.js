const pg1 = document.getElementById('pg1');
const pg2 = document.getElementById('pg2');
const pg3 = document.getElementById('pg3');
const pg4 = document.getElementById('pg4');

const  page1 = document.getElementById('page1');
const  page2 = document.getElementById('page2');
const  page3 = document.getElementById('page3');
const  page4 = document.getElementById('page4');
const  page0 = document.getElementById('page0');
const  page9 = document.getElementById('page9');
const  page_p = document.getElementById('page-p');

pg1.addEventListener('click', ()=>{
    page1.classList.add('turn-to-left');
    page2.classList.add('visible_left');
});

pg3.addEventListener('click', ()=>{
    page3.classList.add('turn-to-left');
    page4.classList.add('visible_left2');
});

pg4.addEventListener('click', ()=>{
    document.getElementById('ri-z').style.zIndex = '-1';

    page0.classList.add('turn-to-right');


    setInterval(() => {
        page4.classList.remove('visible_left2');
    }, 2150);
    page3.classList.add('for_pg2');


});

pg2.addEventListener('click', ()=>{
    page2.classList.add('turn-to-right2');
    setInterval(() => {
        page1.classList.add('for_pg1');        
    }, 2500);
});
