let display = document.getElementById("display");

function add(value) {
    display.value += value;
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "ERROR";
    }
}
function clearDisplay()
{
    display.value = "";
}
const buttons = document.querySelectorAll(".button button");
buttons.forEach(button => {
    button.addEventListener("mouseenter",()=> {
        
        if(Math.random() < 0.6)
        {
            const x= Math.random() * 200 -100 ;
            const y= Math.random()* 150-75;
            button.style.transform = `translate(${x}px, ${y}px)`;
            button.dataset.moved= "true";
        }
    });
});