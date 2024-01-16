var splashScreen = document.querySelector('.splash');
splashScreen.addEventListener('click', ()=>{
    splashScreen.style.opacity = 0;
    setTimeout(() =>{
        splashScreen.classList.add('hidden')
    },610)
})


var follow = document.getElementsByClassName('.insta');

follow.addEventListener('click', ()=>{
    alert("Don't forget to follow me..... \u{1F605}")
})
