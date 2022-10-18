const languages = ['Node.JS', 'React.JS', 'Vue.JS', 'Lalavel'];
const colors = ['red', 'skyblue', 'violet', 'yellow'];
const gettextani = document.querySelector('.text-ani');

// console.log(languages);

// console.log(languages[0]);
// console.log(languages[0]);
// console.log(languages[0]);
// console.log(languages[0]);

// console.log(languages.indexOf('Node.Js'));

// console.log(colors[languages.indexOf('Node.Js')]);
// console.log(colors[languages.indexOf('Vue.Js')]);

// Generator Function

function* genfun(){
    yield 1;
    yield 2;
    yield 3;
}

const getgen = genfun();

// console.log(getgen.next().value);   //1
// console.log(getgen.next().value);   //2
// console.log(getgen.next().value);   //3

// console.log(getgen.next().value);   //undefined

// console.log(getgen.next());
// console.log(getgen.next().value);
// console.log(getgen.next().value);

// console.log(getgen.next().value);

function* generator(){
    var idx = 0;

    while(true){
        yield idx++;

        if(idx > 3){
            idx = 0;
        }
    }
}

const testnumber = generator();

// console.log(testnumber.next().value);
// console.log(testnumber.next().value);
// console.log(testnumber.next().value);
// console.log(testnumber.next().value);
// console.log(testnumber.next().value);
// console.log(testnumber.next().value);
// console.log(testnumber.next().value);

function showwords(word){
    // console.log(word);
    
    let x =0;

    gettextani.innerHTML= "";
    gettextani.classList.add(colors[languages.indexOf(word)]);

    // gettextani.innerHTML = word;
    // gettextani.innerHTML += word[0];
    // gettextani.innerHTML += word[1];

    let showintaval = setInterval(function(){

        // gettextani.innerHTML = word[0];
        // gettextani.innerHTML += word[1];

        if( x >= word.length){
            clearInterval(showintaval);
            deletewords();
        }else{
            gettextani.innerHTML += word[x];

            x++;
        }
    }, 500);
}

function deletewords(){
    let getword = gettextani.innerHTML;

    let getlastidx = getword.length - 1 ;

    let delintval = setInterval(function(){

        if(getlastidx >= 0){

            gettextani.innerHTML = gettextani.innerHTML.substring(0, gettextani.innerHTML.length -1 );
            getlastidx--;
        }else{
            gettextani.classList.remove(colors[languages.indexOf(getword)]);

            showwords(languages[gen.next().value]);
            clearInterval(delintval);
        }

    }, 500);
}

let gen = generator();
showwords(languages[gen.next().value]);
// showwords(languages[gen.next().value]);
// showwords(languages[gen.next().value]);
// showwords(languages[gen.next().value]);

let gettextlights = document.querySelectorAll('.text-light');

    gettextlights.forEach(function(gettextlight){
        let arrtexts = gettextlight.textContent.split('');
        console.log(arrtexts);

        gettextlight.textContent = "";

        arrtexts.forEach(function(arrtext, idx){
            console.log(arrtext);

            let newem = document.createElement('em');

            newem.textContent = arrtext;
            newem.style.animationDelay = `${idx * 0.05}s`;

            gettextlight.append(newem);
        });

    });

