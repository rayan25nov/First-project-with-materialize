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
