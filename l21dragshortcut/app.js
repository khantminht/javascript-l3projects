const getbox = document.querySelector(".box");

dragme(getbox);

function dragme(getele){
    // console.log(getele);

    var getcx,getcy,setcx,setcy;

    getele.onmousedown = getmousedown;

    function getmousedown(e){
        // console.log("I am working");
        // console.log(e.target);

        getcx = e.clientX;
        getcy = e.clientY;
        // console.log(getcx, getcy);

        document.onmousemove = dragme;
        document.onmouseup = stopdragme;
    }

    function dragme(e){
        // console.log(e.target);

        setcx = getcx - e.clientX;
        setcy = getcy - e.clientY;

        getcx = e.clientX;
        getcy = e.clientY;

        const btnleft = getele.offsetLeft;
        const btntop = getele.offsetTop;

        getele.style.left = (btnleft - setcx)+ "px";
        getele.style.top = (btntop - setcy)+ "px";
    }

    function stopdragme(){
        document.onmousemove = null;
        document.onmouseup = null;
    }
}