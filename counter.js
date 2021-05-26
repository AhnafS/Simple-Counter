let count = 0;

let currentCount = document.querySelector(".count");
let btns = document.querySelectorAll(".btn");

btns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        let currentBtn = e.currentTarget.classList;
        if (currentBtn.contains("increase")){
            count++;
        } 
        else if (currentBtn.contains("decrease")){
            count--;
        }
        else if(currentBtn.contains("reset")){
            count = 0;
        }

        currentCount.textContent = count;
    });
});