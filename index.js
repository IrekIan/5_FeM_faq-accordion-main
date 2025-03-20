document.addEventListener(`click`, function (e) {
  if (e.target.matches(`.answ-btn`)) {
    let answBtn = document.querySelector(
      `div[data-index="${e.target.dataset.index}"]`
    );
    answBtn.classList.toggle("answer");
    let plusImg = document.querySelector(
      `img[data-index="${e.target.dataset.index}"]`
    );
    if (plusImg.src.includes("icon-plus.svg")) {
      plusImg.src = "./assets/images/icon-minus.svg";
    } else {
      plusImg.src = "./assets/images/icon-plus.svg";
    }
  }
});
