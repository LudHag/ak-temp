import "./styles/general.scss";

const ticketsButton = document.querySelector(".show-tickets");
const ticketsinfo = document.querySelector(".biljettinfo");

ticketsButton.addEventListener("click", (e) => {
    e.preventDefault();
    ticketsinfo.classList.toggle("open");
});