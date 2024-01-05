// alert("welcome bro, do the job today pls");

const openFaq = document.querySelector(".details-news");
const openFisrtNews = document.querySelector(".answer-faq");
const iconPlus = document.querySelector(".icon-plus");
const iconMinus = document.querySelector(".icon-minus");

openFaq.addEventListener("click", () => {
  //   if (openFisrtNews.style.display == "none") {
  //     openFisrtNews.style.display = "block";
  //     console.log("hello world");
  //   }
  //   openFisrtNews.style.display = "block";
  openFisrtNews.classList.toggle("answer-faq");
  console.log(openFisrtNews.textContent);
});

// openFisrtNews.addEventListener("click", () => {
//   openFisrtNews.style.display = "none";
// });
