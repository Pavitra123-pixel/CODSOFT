const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
let currentinput  ="";
buttons.forEach(button=>{
    button.addEventListener("click",()=>{
        const value=button.innerText;
        if(value==="C"){
            currentinput="";
            display.value="";
        }

        else if(value=="="){
            try{
                currentinput=eval(currentinput);
                display.value=currentinput;
            } catch{
                display.value ="error";
                currentinput="";
            }
        }
        else{
            // Prevent multiple operators in a row
            if (["+", "-", "*", "/"].includes(value)) {
                if (currentinput === "" || /[+\-*/]$/.test(currentinput)) {
                    return;
                }
            }
            // Prevent multiple decimals in a number
            if (value === ".") {
                const parts = currentinput.split(/[+\-*/]/);
                if (parts[parts.length - 1].includes(".")) {
                    return;
                }
            }
            currentinput+=value;
            display.value=currentinput;


        }
    });
});