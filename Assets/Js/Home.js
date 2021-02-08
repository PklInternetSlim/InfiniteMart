const dataHeader = [
  {
    img: "../Assets/img/header/car1.jpg",
    title: "Car 1",
  },
  {
    img: "../Assets/img/header/car2.jpg",
    title: "Car 2",
  },
  {
    img: "../Assets/img/header/car3.jpg",
    title: "Car 3",
  },
];

const carWrap = document.querySelector(".headerCarousel");
const dotWrap = document.querySelector(".slideIconCarousel");
let caraosel = "";
let dot = "";
dataHeader.map((data, i) => {
  if (i == 0) {
    caraosel += `<img src="${data.img}" alt="${data.title}" class="carausel-img">`;
    dot += `<div class="slider active"></div>`;
  } else {
    caraosel += `<img src="${data.img}" alt="${data.title}" class="carausel-img" style="margin-left:100%">`;
    dot += `<div class="slider"></div>`;
  }
});

carWrap.innerHTML = caraosel;
dotWrap.innerHTML = dot;

let cek = 0;
setInterval(() => {
  startCaraosel();
}, 5000);

function startCaraosel() {
  const cards = Array.from(document.querySelectorAll(".carausel-img"));
  const cardNow = cards[cek];

  const dot = Array.from(document.querySelectorAll(".slider"));
  const dotNow = dot[cek];

  cek == dataHeader.length - 1 ? (cek = 0) : (cek += 1);
  const cardNext = cards[cek];
  const dotNext = dot[cek];

  dotNow.classList.remove("active");
  dotNext.classList.add("active");

  cardNow.style.marginLeft = `-100%`;
  cardNow.style.opacity = "0";
  cardNext.style.opacity = "1";
  cardNext.style.marginLeft = `0`;

  setTimeout(() => {
    cardNow.style.position = "absolute";
    cardNow.style.marginLeft = "100%";
  }, 500);
}
