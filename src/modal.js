"use strict";

const modal = document.querySelector(".modal");
const showModal = document.querySelectorAll(".show-modal");
const closeModal = document.querySelector(".close-modal");

for (let i = 0; i < showModal.length; i++) {
  showModal[i].addEventListener("click", function () {
    modal.classList.remove("hidden");
    overLay.classList.remove("hidden");
  });
}

closeModal.addEventListener("click", function () {
  modal.classList.add("hidden");
});

//Using the ESC key to close the modal
document.addEventListener("keydown", function (e) {
  if (e.key == "Escape") {
    if (!modal.classList.contains("hidden")) {
      modal.classList.add("hidden");
    }
  }
});
