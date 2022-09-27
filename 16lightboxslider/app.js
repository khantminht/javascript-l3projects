var getimgs = document.querySelectorAll('.img');
// console.log(getimgs);

var getmodal = document.querySelector('.modal');
var getbtnclose = document.querySelector('.btn-close');
var getviews = document.getElementsByClassName('view');

var getprevbtn = document.querySelector('.prev');
var getnextbtn = document.querySelector('.next');

var getcounter = document.querySelector('.counter');
var getcaption = document.querySelector('.caption');

var getnoactives = document.getElementsByClassName('noactive');
// console.log(getnoactives.length);

var curidx = 1;

for(var i=0; i < getimgs.length; i++){
    // console.log(getimgs[i]);

    getimgs[i].addEventListener('click',showmodal);
}

function showmodal(){
    getmodal.style.display = 'block';
}

// getbtnclose.addEventListener('click',function(){
//     getmodal.style.display = 'none';
// });

getbtnclose.onclick = function(){
    getmodal.style.display= 'none';
}

document.addEventListener('click',function(e){
    // console.log(e.target);

    if(e.target === getmodal){
        getmodal.style.display = 'none';
    }
});

getnextbtn.addEventListener('click',function(){
    // console.log('iam next');
    slideshow(curidx += 1);
});

getprevbtn.addEventListener('click', function(){
    // console.log('iam prev');
    slideshow(curidx -= 1);
});

function currentview(num){
    slideshow(num);
}

slideshow(curidx);

function slideshow(num){
    // console.log(num);
    console.log(getnoactives.length);

    if(num > getviews.length){
        num =1;
        curidx=1;
    }

    if(num <1){
        num = getviews.length;
        curidx = getviews.length;
    }

    // console.log('this is currennt idx' , curidx);
    // console.log('this is num' , num);
    // console.log(getviews.length);

    getcounter.textContent = `${num} / ${getviews.length}`;
}

// 26LB    

