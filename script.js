const accordions = document.querySelectorAll(".accordian");

accordions.forEach((accordion) => {
  const question = accordion.querySelector(".question");
  const answer = accordion.querySelector(".answer");
  const btn = accordion.querySelector(".btn");

  question.addEventListener("click", () => {
    // Close all others first
    accordions.forEach((other) => {
      if (other !== accordion) {
        other.querySelector(".answer").classList.remove("active");
        other.querySelector(".btn").textContent = "+"; // reset sign
      }
    });

    // Toggle the clicked one
    answer.classList.toggle("active");

    // Toggle plus ↔ cross sign
    if (answer.classList.contains("active")) {
      btn.textContent = "×";
    } else {
      btn.textContent = "+"; // cross sign
    }
  });
});
/*From Validation*/
let form=document.querySelector("#signin-form");
form.addEventListener("submit",(e)=>{
  e.defaultPrevented();//stop from submitting
  
let mail=document.querySelector("#mail").value.trim();//reduces spaces
let pass=document.querySelector("#pass").value.trim();

let emailPattern= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(mail===""||pass===""){
  mail.style.border="2px solid red"
  pass.style.border="2px solid red"
}
})