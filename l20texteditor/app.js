var gettxtarea = document.getElementById('textarea');

var getdivarea = document.getElementById('divarea')
    getdivarea.contentEditable = true;
    getdivarea.spellcheck = false;

var getbtns = document.querySelectorAll('.btn');

    getbtns.forEach(function(getbtn){
        getbtn.addEventListener('click',function(){
            // var getcommand = getbtn.getAttribute('data-command');
            var getcommand = getbtn.dataset['command'];
            // console.log(getcommand);

            document.execCommand(getcommand, false, null);
        })
    });

// function boldfun(){
//     gettxtarea.style.fontWeight = 'bold';
// }

// function italicfun(){
//     gettxtarea.style.fontStyle = 'italic';
// }

// function underlinefun(){
//     gettxtarea.style.textDecoration = 'underline';
// }

// function leftalign(){
//     gettxtarea.style.textAlign = 'left';
// }

// function centeralign(){
//     gettxtarea.style.textAlign = 'center';
// }

// function rightalign(){
//     gettxtarea.style.textAlign = 'right';
// }

function upcasefun(){
    gettxtarea.style.textTransform = 'uppercase';
}

function lowcasefun(){
    gettxtarea.style.textTransform = 'lowercase';
}

function capcasefun(){
    gettxtarea.style.textTransform = 'capitalize';
}

// function clearfun(){
//     gettxtarea.style.fontWeight='normal';
//     gettxtarea.style.fontStyle = 'normal';
//     gettxtarea.style.textDecoration = 'none';
//     gettxtarea.style.textAlign = 'left';
//     gettxtarea.value='';
// }

// execCommand (aCommmentName, a, aValue);