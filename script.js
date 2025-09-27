/*let accordians=document.querySelectorAll(".accordian");
accordians.forEach((acco)=>{
    let ans=accordian.querySelector(".answer");
    acco.addEventListener("click",()=>{
        accordians.forEach((items)=>{
            if(items!==accordian){
                items.querySelector(".answer").classList.remove(".active");
            }
        });
        answer.classList.toggle(".active")
    })
})*/
const accordions = document.querySelectorAll(".accordian");

accordions.forEach((accordion) => {
  const question = accordion.querySelector(".question");
  const answer = accordion.querySelector(".answer");
  const btn = accordion.querySelector(".btn");

  question.addEventListener("click", () => {
    // Close all others first
    accordions.forEach((other) => {
      if (other !== accordion) {
        other.querySelector(".answer").classList.add("active");
        other.querySelector(".btn").textContent = "+"; // reset sign
      }
    });

    // Toggle the clicked one
    answer.classList.toggle("active");

    // Toggle plus ↔ cross sign
    if (answer.classList.contains("active")) {
      btn.textContent = "+";
    } else {
      btn.textContent = "×"; // cross sign
    }
  });
});