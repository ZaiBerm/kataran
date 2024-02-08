let heartbtn = document.getElementById("heart-img");

heartbtn.addEventListener("click", function () {

  console.log("zairus");
  let content = document.getElementById("content");

  if (window.getComputedStyle(content).opacity == "0")
  {
    content.style.opacity = "1";
    heartbtn.style.transform = "translateY(0)"
  }
  else if (window.getComputedStyle(content).opacity == "1")
  {
    content.style.opacity = "0";
    heartbtn.style.transform = "translateY(120%)"
  }

});