// utility.js
export const nextUtility = {
  stickyNav() {
    const header = document.getElementById("header-sticky");
    if (!header) return;

    window.addEventListener("scroll", function () {
      if (window.scrollY > 250) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    });
  },

  scrollAnimation() {
    if (typeof window !== "undefined") {
      window.WOW = require("wowjs");
    }
    new WOW.WOW().init();
  },

  preloader() {
    if (typeof window === "undefined") return;

    window.addEventListener("load", () => {
      const preloader = document.getElementById("preloader");
      if (preloader) {
        preloader.style.opacity = "0"; // fade out
        setTimeout(() => {
          preloader.style.display = "none"; // hide completely
        }, 500); // match CSS transition duration
      }
    });

    // 🔥 fallback: auto-hide after 3s in case "load" never fires
    setTimeout(() => {
      const preloader = document.getElementById("preloader");
      if (preloader && preloader.style.display !== "none") {
        preloader.style.opacity = "0";
        setTimeout(() => {
          preloader.style.display = "none";
        }, 500);
      }
    }, 3000);
  },
};
