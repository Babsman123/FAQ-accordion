// alert("welcome bro, do the job today pls");

const openFaq = document.querySelectorAll(".details-news");
const openFirstNews = document.querySelectorAll(".answer-faq");
const iconPlus = document.querySelectorAll(".icon-plus");
const iconMinus = document.querySelectorAll(".icon-minus");

// console.log(openFirstNews[3].textContent);
for (let i = 0; i <= openFaq.length; i++) {
  openFaq[0].addEventListener("click", () => {
    console.log("hello world");
    iconPlus[0].classList.toggle("icon-plus-open");
    iconMinus[0].classList.toggle("icon-minus-open");
    openFirstNews[0].classList.toggle("answer-faq-open");
  });
  openFaq[1].addEventListener("click", () => {
    console.log("second clcik");
    iconPlus[1].classList.toggle("icon-plus-open");
    iconMinus[1].classList.toggle("icon-minus-open");
    openFirstNews[1].classList.toggle("answer-faq-open");
  });
  openFaq[2].addEventListener("click", () => {
    iconPlus[2].classList.toggle("icon-plus-open");
    iconMinus[2].classList.toggle("icon-minus-open");
    openFirstNews[2].classList.toggle("answer-faq-open");
  });
  openFaq[3].addEventListener("click", () => {
    console.log(openFirstNews[3].textContent);
    iconPlus[3].classList.toggle("icon-plus-open");
    iconMinus[3].classList.toggle("icon-minus-open");
    openFirstNews[3].classList.toggle("answer-faq-open");
  });
}
