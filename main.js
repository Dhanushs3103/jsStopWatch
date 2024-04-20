
let hr = 0;
let min = 0;
let sec = 0;
let milsec = 0;

let hourText = document.querySelector("#hours");
let minText = document.querySelector("#minutes");
let secText = document.querySelector("#seconds");
let milsecText = document.querySelector("#milsec");

let btnDiv =  document.querySelector("#btn");

// Start and stop button
let startBtn = document.createElement("button");
startBtn.textContent = "START   ";
startBtn.id = "Start";

// Reset button
let resetBtn = document.createElement("button");
resetBtn.textContent = "RESET";
resetBtn.id = "Reset";

btnDiv.append(startBtn,resetBtn);

let interval;

let buttonState = true;

let startStopWatch = () => {


     milsec++;
     
     if(milsec <= 9) {
        milsecText.textContent = `0 ${milsec}`;
     }
     else {
        milsecText.textContent = milsec;
     }

     if( milsec > 99) {
        sec++;
        secText.textContent = `0 ${sec}`;
        milsec = 0;
        milsecText.textContent = `0 ${milsec}`;
     }

     if(sec > 9) {
        secText.textContent = sec;
     }

     if( sec > 59) {
        min++;
        minText.textContent = `0 ${min}`;
        sec = 0;
        secText.textContent = `0 ${sec}`;
     }

     if(min > 9) {
        minText.textContent = min;
     }

     if( min > 59) {
        hr++;
        hourText.textContent = `0 ${hr}`;
        min = 0;
        minText.textContent = `0 ${min}`;
     }

     if(hr > 9) {
        hourText.textContent = hr;
     }

};

startBtn.addEventListener("click", () => {
    if(buttonState) {
       clearInterval(interval);
        if(startBtn.textContent = "START") {
            startBtn.style.backgroundColor = "#65B741";
        }
    }else {
        startBtn.textContent = "STOP";
        if(startBtn.textContent = "STOP") {
            startBtn.style.backgroundColor = "#EF4040";
        }
        interval = setInterval(startStopWatch, 10);
    }

    buttonState = !buttonState;
});

resetBtn.addEventListener("click", () => {
    clearInterval(interval);
    hr = "00";
    min = "00";
    sec = "00";
    milsec = "00";

    hourText.textContent = hr;
    minText.textContent = min;
    secText.textContent = sec;
    milsecText.textContent = milsec;

});