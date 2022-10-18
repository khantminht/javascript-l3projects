var getdots = document.getElementsByClassName('dot');

var getpages = document.getElementsByClassName('page');
console.log(getpages);

var getform = document.getElementById('form');
var getprevbtn = document.getElementById('prevbtn');
var getnextbtn = document.getElementById('nextbtn');


var curidx = 0;

showpage(curidx);

function showpage(num){
    console.log(num);

    getpages[num].style.display = 'block';

    num === 0 ? getprevbtn.style.display = 'none' : getprevbtn.style.display = 'inline-block';

    num === (getpages.length-1) ? getnextbtn.textContent = 'Submit' : getnextbtn.textContent = 'Next';

    dotindicators(num);
}

function dotindicators(num){
    
    for(var x = 0; x < getdots.length; x++){
        getdots[x].classList.remove("active");
    }

    getdots[num].className += " active";
}


function gonow(num){
    // console.log('hi');

    // if(formvalidation()){
    //     getpages[curidx].style.display = 'none';

    //     curidx = curidx + num;
    //     if(curidx >= getpages.length){
    //         getform.submit();
    //     }

    //     showpage(curidx);
    // }

    // if(!formvalidation()){
    //     return false;
    // }

    if(num === 1 && !formvalidation()){
        return false;
    }

    getpages[curidx].style.display = 'none';

    curidx = curidx + num;
    if(curidx >= getpages.length){
        // getform.submit();
        
        return false;
    }

    showpage(curidx);
 
}

function formvalidation(){
    var valid = true;

    var getcurinput = getpages[curidx].getElementsByTagName('input');

    for(var x =0; x < getcurinput.length; x++){
        if(getcurinput[x].value === ''){
            getcurinput[x].classList.add('invalid');
            valid = false;
        }
    }

    if(valid){
        getdots[curidx].className += " done";
    }

    return valid;
}

// 4FV