const menuBtn=document.querySelector('#nav .container .navbar-header .change');
let mopen=false;
menuBtn.addEventListener('click',() => {
    if(!mopen){
        menuBtn.classList.add('open');
        mopen=true;
    }else{
        menuBtn.classList.remove('open');
        mopen=false;
    }
});