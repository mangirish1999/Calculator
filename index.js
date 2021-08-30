let display = document.querySelector(".output");

let button = document.querySelectorAll('button');
let displayvalue = '';


for (btn of button) {
    btn.addEventListener('click', (e) => {


        buttontext = e.target.innerText;

        if (buttontext == "AC") {
            displayvalue = '';
            display.innerText = '';
        } else if (buttontext == "*") {
            // console.log(displayvalue[displayvalue.length - 1]);
            if (display.innerText.slice(-1) != "*") {
                console.log(displayvalue.slice(-1));
                displayvalue += buttontext;
                display.innerText = displayvalue;
            }


        } else if (buttontext == "+") {
            if (displayvalue.slice(-1) != '+') {
                displayvalue += buttontext;
                display.innerText = displayvalue;
            }

        } else if (buttontext == "÷") {
            buttontext = '/';
            if (displayvalue.slice(-1) != '/') {
                displayvalue += buttontext;
                display.innerText = displayvalue;
            }

        } else if (buttontext == "-") {

            if (displayvalue.slice(-1) != '-') {
                displayvalue += buttontext;
                display.innerText = displayvalue;
            }
        } else if (buttontext == ".") {

            if (displayvalue.slice(-1) != '.') {
                displayvalue += buttontext;
                display.innerText = displayvalue;
            }

        } else if (buttontext == "DEL") {

            displayvalue = displayvalue.slice(0, - 1);
            display.innerText = displayvalue;

        } else if (buttontext == "=") {
            try {
                display.innerText = eval(displayvalue)
                displayvalue = display.innerText;
            } catch (e) {
                display.innerText = 'Invalid Operation';
                displayvalue = '';
            }


        } else {
            displayvalue += buttontext;
            display.innerText = displayvalue;

        }


    })

}