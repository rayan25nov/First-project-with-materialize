const headingChanger = () => {
  let inputText = document.getElementById("input").value;
  if (inputText == "") {
    return;
  }
  document.getElementById("heading").innerHTML = inputText.toUpperCase();
};

const imageChanger = () => {
  const natureimage = document.querySelector("img");
  let myimages = natureimage.getAttribute("src");
  if (myimages === "img/nature.jpg") {
    natureimage.setAttribute("src", "img/beach.jpg");
  } else {
    natureimage.setAttribute("src", "img/nature.jpg");
  }
};
const deg = 6;
const hr = document.querySelector("#hr");
const mn = document.querySelector("#mn");
const sc = document.querySelector("#sc");

setInterval(() => {
  let day = new Date();
  let hh = day.getHours() * 30;
  let mm = day.getMinutes() * deg;
  let ss = day.getSeconds() * deg;

  hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
  mn.style.transform = `rotateZ(${mm}deg)`;
  sc.style.transform = `rotateZ(${ss}deg)`;
});
