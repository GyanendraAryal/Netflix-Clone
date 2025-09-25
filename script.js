let btn = document.body.querySelectorAll("#btn");
let ans = document.body.querySelector(".answer");
let acc = document.body.querySelector("accordian");
let count = 0;
btns.forEach(btn => {
btn.addEventListener("click", () => {
    if (count === 0) {
        ans.classList.remove("passive");
        acc.style.width = "100vw";
        acc.style.height = "40vh";
        count = 1;
    } else {
        ans.classList.add("passive");
        acc.style.width = "auto";
        acc.style.height = "auto";
        count = 0;
    }
});
});