


let ti = document.querySelector('.square');

let btn = document.querySelector('.btn');
let sq = document.querySelectorAll('.box');

let count_x = 0;
let count_o = 0;



let player = document.querySelectorAll('.player');
let b = {
    1: "", 2: "", 3: "", 4: "", 5: "", 6: "", 7: "", 8: "", 9: ""
};

btn.addEventListener("click", restart);
function restart(e) {
    location.reload();
    
    for (let i in sq) {
        
        sq[i].innerText = "";
        player[1].classList.remove("active");
        player[0].classList.add("active");
        sq[i].addEventListener("click", listener, { once: true });
    }
}




for (let i in sq) {
    sq[i].addEventListener("click", listener, { once: true });
}



//    FUNCTIONS 
function listener(e) {


    if (player[0].classList.contains("active")) {
        e.currentTarget.innerText = "X";
        player[0].classList.remove("active");
        player[1].classList.add("active");
        e.currentTarget.classList.add("x");

    } else {
        e.currentTarget.innerText = "O";
        player[1].classList.remove("active");
        player[0].classList.add("active");
        e.currentTarget.classList.add("o");
    }

    let c = e.currentTarget.classList[2];
    let x = e.currentTarget.classList[0].split("-")[1];
    for (let i = 1; i <= 9; i++) {
        if (i == x) {
            b[i] = c;
        }

    }
    
    if ((b[1] == "x" && b[2] == "x" && b[3] == "x") || (b[4] == "x" && b[5] == "x" && b[6] == "x") || (b[7] == "x" && b[8] == "x" && b[9] == "x")
        || (b[1] == "x" && b[4] == "x" && b[7] == "x") || (b[2] == "x" && b[5] == "x" && b[8] == "x") || (b[3] == "x" && b[9] == "x" && b[6] == "x") ||
        (b[1] == "x" && b[5] == "x" && b[9] == "x") || (b[3] == "x" && b[5] == "x" && b[7] == "x")) {
        
        ti.innerHTML=`<div id="prompt">player X winner</div>`;
 

        

    }
    if ((b[1] == "o" && b[2] == "o" && b[3] == "o") || (b[4] == "o" && b[5] == "o" && b[6] == "o") || (b[7] == "o" && b[8] == "o" && b[9] == "o")
        || (b[1] == "o" && b[4] == "o" && b[7] == "o") || (b[2] == "o" && b[5] == "o" && b[8] == "o") || (b[3] == "o" && b[9] == "o" && b[6] == "o") ||
        (b[1] == "o" && b[5] == "o" && b[9] == "o") || (b[3] == "o" && b[5] == "o" && b[7] == "o")) {
        
        ti.innerHTML=`<div id="prompt">player  O winner</div>`;
    }


}













