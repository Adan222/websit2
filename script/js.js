let circle = document.querySelectorAll(".progress_ring__circle");
const radius = circle[0].r.baseVal.value;
let circumference = radius * 2 * Math.PI;

//fucking circle
function setProgress(whith) {
    let percent = circle[whith].getAttribute("percent");

    const offset = circumference - percent / 100 * circumference;
    circle[whith].style.strokeDashoffset = offset;
}

//seting images size 
function setImageSize(){
    let sec = document.querySelectorAll(".sec");
    let howMuch = 0;

    if(window.innerWidth <= 500){
        howMuch = 3;                
    }
    else{
        howMuch = 7;
    }

    let whatSize = window.innerWidth / howMuch;

    for(let i = 0; i < sec.length; i++){
        let child = sec[i].children;
        for(let j = 0; j < howMuch; j++){
            child[j].style.width = whatSize + "px";
        }
    }
}

function setImage(){
    let sec = document.querySelectorAll(".sec");

    setImageSize();

    for(let i = 0; i < sec.length; i++){
        let child = sec[i].children;

        for(let j = 0; j < child.length; j++){
            //get source to 
            let src = child[j].getAttribute('src');

            //this is what will be in style
            let img = "url('" + src + "')";

            //set style
            child[j].style.backgroundImage = img;
        }
    }
}


//main function :)
document.addEventListener("DOMContentLoaded", function(){

    document.querySelector("body").style.width = window.Width + "px";

    for(let i = 0; i < 6; i++){

        circle[i].style.strokeDasharray = `${circumference}  ${circumference}`;
        circle[i].style.strokeDashoffset = `${circumference}`;
    
        setProgress(i);
    }

    setImage();
});

