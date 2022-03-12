const $ = document.querySelector.bind(document);

$("#navigation").onclick = (e) => {
  if (e.target.closest(".nav-item")) {
    switch (e.target.innerHTML) {
      case "Home":
        console.log("Home Dispatch");
        window.location.href = "../mainpage/main.html";
        break;
      default:
        break;
    }
  }
  if (e.target.closest(".nav-logo")) {
    window.location.href = "../mainpage/main.html";
  }
};
