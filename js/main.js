const stars = document.querySelector(".stars");
const rateDiv = document.querySelectorAll(".feedbacks-card-stars");

console.log(rateDiv);

for(rate of rateDiv) {
    rate.innerHTML = stars.innerHTML;
}