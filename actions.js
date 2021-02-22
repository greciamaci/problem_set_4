const input = document.getElementById("type-input");
const button = document.getElementById("submitbtn");
const colorchanged = document.getElementById("colorchange1");
const colorchangel = document.getElementById("colorchange2");
const scrt = document.getElementById("pic");

button.addEventListener('click', () => {
    let submission = input.value;
    document.getElementById("output").innerHTML = submission;
});

colorchanged.addEventListener('click', () => {
    document.body.style.backgroundColor = "#000000";
})

colorchangel.addEventListener('click', () => {
    document.body.style.backgroundColor = "#404477";
})

scrt.addEventListener('click', () => {
    const secret = document.createElement("img");
    secret.setAttribute("src", "imgs/6.jpg");
    secret.setAttribute("height", "400");
    secret.setAttribute("width", "350");
    secret.setAttribute("alt", "Peacin' out at the top of a top rope wall");
    document.body.appendChild(secret);
})


function greeting(){
    alert("Hello! remember to check in with your local rock climbing gym about their COVID-19 regulations.")
}
window.setTimeout(greeting, 1000);
