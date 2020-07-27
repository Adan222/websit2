var circle = document.querySelectorAll(".progress-ring__circle");
var radius = circle[0].r.baseVal.value;     //can be whatever
var circumference = radius * 2 * Math.PI;

function setProgress(whith) {
    let percent = circle[whith].getAttribute("percent");

    const offset = circumference - percent / 100 * circumference;
    circle[whith].style.strokeDashoffset = offset;
}

for(let i = 0; i < 6; i++){

    circle[i].style.strokeDasharray = `${circumference}  ${circumference}`;
    circle[i].style.strokeDashoffset = `${circumference}`;

    setProgress(i);
}