let circle = document.querySelectorAll(".progress_ring__circle");
const radius = circle[0].r.baseVal.value;
let circumference = radius * 2 * Math.PI;

console.log(circle);

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