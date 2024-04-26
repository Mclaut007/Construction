import Swiper from "swiper/bundle";

function introSwiper() {
  // ==== Слайдер intro (swiper) ==== //

  const introSwiper = new Swiper(".intro", {
    loop: true,
    pagination: {
      el: ".intro__swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".intro__swiper-button-next",
      prevEl: ".intro__swiper-button-prev",
    },
    keyboard: {
      enabled: true,
    },
  });

  // ======== Добавляем числа для буллетов top-slider ======== //

  const introPaginationBullet = document.querySelectorAll(
    ".intro .swiper-pagination-bullet"
  );
  introPaginationBullet.forEach(function (item, index) {
    const number = document.createElement("span");
    number.innerText = `0${index + 1}`;
    number.classList.add("swiper-pagination-bullet__number");
    item.insertAdjacentElement("afterbegin", number);
  });
}

export default introSwiper;
