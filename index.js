function move(){

    const bouton = document.querySelector('.no');

    const maxX = window.innerWidth - bouton.offsetWidth;
    const maxY = window.innerHeight - bouton.offsetHeight;

    let posX = Math.random() * maxX;
    let posY = Math.random() * maxY;

    bouton.style.bottom = `${posY}px`;
    bouton.style.right = `${posX}px`;
}

function stop(){

    document.querySelectorAll('.active').forEach(el => el.classList.remove('active'));
    document.querySelector('.stop_no').classList.add('active');
    document.querySelector('.h1_stop').classList.add('active');
    document.querySelector('.retry').classList.add('active');
    song = document.querySelector('.love_song');
    song.pause();

    setTimeout(()=>{
        location.reload()
    },5000)
}

function yes_but(){
    document.querySelectorAll('.active').forEach(el => el.classList.remove('active'));
    document.querySelector('.merci_but').classList.add('active');
    video = document.querySelector('.accept_but');
    video.classList.add('active');
    video.setAttribute("autoplay","");
    song = document.querySelector('.love_song');
    song.pause();
}

function thank(){
    document.querySelectorAll('.active').forEach(el => el.classList.remove('active'));
    document.querySelector('.merci').classList.add('active');
    video = document.querySelector('.accept');
    video.classList.add('active');
    video.setAttribute("autoplay","");
    document.querySelector('.merci2').classList.add('active');
}

let count = 0;
let nb_reload = Number(localStorage.getItem('reloadCount')) || 0;
const bouton_no = document.querySelector('.no');
bouton_no.addEventListener('mouseover',() => {
    move();
    count++;
    if(count > 4){
        console.log(count);
        nb_reload++;
        localStorage.setItem('reloadCount',nb_reload)
        stop();
    }
});

const bouton_yes = document.querySelector('.yes');
bouton_yes.addEventListener('click',()=>{
    if(nb_reload >= 1){
        yes_but();
    }else{
        thank();
    }
    localStorage.setItem('reloadCount', 0);
});