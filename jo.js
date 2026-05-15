// corazones

const hearts = document.querySelector('.hearts');

for(let i = 0; i < 40; i++){

    const heart = document.createElement('span');

    heart.style.left = Math.random() * 100 + 'vw';

    heart.style.animationDuration =
    (Math.random() * 5 + 5) + 's';

    heart.style.width =
    heart.style.height =
    (Math.random() * 20 + 10) + 'px';

    hearts.appendChild(heart);

}



// modal

const modal = document.getElementById('modal');

const openBtn = document.getElementById('openBtn');

const closeBtn = document.getElementById('closeBtn');

openBtn.addEventListener('click', ()=>{

    modal.classList.add('active');

});

closeBtn.addEventListener('click', ()=>{

    modal.classList.remove('active');

});

window.addEventListener('click', (e)=>{

    if(e.target == modal){

        modal.classList.remove('active');

    }

});