const btnStart = document.querySelector(".main");
const btnReset = document.querySelector(".reset");
const time = document.querySelector(".time div");

let active = false;
let int;
let seconds = 0;

function startStoper() {

    if (!active) {
        active = !active;
        btnStart.textContent = "Pauza";

        function startInterval() {
            seconds += 0.01;
            time.textContent = seconds.toFixed(2);
        }

    } else {
        active = !active;
        btnStart.textContent = "Start";
        clearInterval(int);
    }

    int = setInterval(startInterval, 10);

};

function reset() {
    seconds = 0;
    time.textContent = "---";
    clearInterval(int);
    active = false;
    btnStart.textContent = "Start";

}


btnStart.addEventListener("click", startStoper);
btnReset.addEventListener("click", reset);