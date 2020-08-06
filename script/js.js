let circle = document.querySelectorAll(".progress_ring__circle");
const radius = circle[0].r.baseVal.value;
let circumference = radius * 2 * Math.PI;

//fucking circle
function setProgress(whith) {
    let percent = circle[whith].getAttribute("percent");

    const offset = circumference - percent / 100 * circumference;
    circle[whith].style.strokeDashoffset = offset;
}

//give iamges size and pictures
function setImage(){
    let sec = document.querySelectorAll(".sec");
    let howMuch = 0;

    if(window.innerWidth <= 500){
        howMuch = 3;                
    }else{
        howMuch = 7;
    }

    let whatSize = window.innerWidth / howMuch;

    for(let i = 0; i < sec.length; i++){
        let child = sec[i].children;

        for(let j = 0; j < howMuch; j++){
            //get source to variable
            let src = child[j].getAttribute('src');

            //this is what will be in style
            let img = "url('" + src + "')";

            //set style
            child[j].style.backgroundImage = img;
            child[j].style.width = whatSize + "px";
        }
    }
}

function setLogos(){
    let sec = document.querySelectorAll(".free");

    let which = [];     //its all element index
    if(window.innerWidth <= 500){
        which = [2,3,4];
    }
    else{
        which = [0,1,2,3,4,5,6];    
    }

    let whatSize = window.innerWidth / which.length;

    for(let i = 0; i < sec.length; i++){
        let child = sec[i].children;

        for(let j = 0; j < child.length; j++){

            for(let x = 0; x < which.length; x++){
                
                if(which[x] == j){
                    //set display and witdh
                    child[j].style.display = "block";

                    if(x > 0){
                        child[j].style.width = whatSize-1 + "px";
                    }else{
                        child[j].style.width = whatSize + "px";
                    }

                    //set images
                    if(child[j].hasAttribute("src")){
                        let img = "url('" + child[j].getAttribute("src") + "')";
                        child[j].style.backgroundImage = img;
                    }

                    //dont display left border in first element
                    if(which[x] == 2 && which.length <= 3 || which[x] == 0){
                        child[j].style.borderLeft = "none";
                    }        
                    break;
                }
                else{
                    child[j].style.display = "none";
                }
            }   //for x

            if(i == 5){
                child[j].style.borderTop = "1px solid purple";
            }
        }   //for j
    }   //for i
}

//main function :)
document.addEventListener("DOMContentLoaded", function(){

    document.querySelector("body").style.width = window.Width + "px";

    for(let i = 0; i < 6; i++){

        circle[i].style.strokeDasharray = `${circumference}  ${circumference}`;
        circle[i].style.strokeDashoffset = `${circumference}`;
    
        setProgress(i);
    }

    setLogos();
    setImage();
});

