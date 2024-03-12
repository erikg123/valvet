import gsap from "https://cdn.skypack.dev/gsap@3.12.0";
import ScrollTrigger from "https://cdn.skypack.dev/gsap@3.12.0/ScrollTrigger";

if (!CSS.supports("animation-timeline: scroll()")) {
  gsap.registerPlugin(ScrollTrigger);

  gsap.to("header", {
    scale: 0.8,
    ease: "power1.in",
    scrollTrigger: {
      trigger: "header",
      scrub: true,
      start: "center top",
      end: "bottom top",
    },
  });
}

const encodedEmailTB = "dG9tLmJsb2htZUB2YWx2ZXQudGVjaA==";
const encodedEmailCP = "Y2hyaXN0aWFuLnBhbG1xdmlzdEB2YWx2ZXQudGVjaA==";
const emailTB = document.getElementById("email-tb");
emailTB.setAttribute("href", `mailto:${atob(encodedEmailTB)}`);
emailTB.innerText = atob(encodedEmailTB);
const emailCP = document.getElementById("email-cp");
emailCP.setAttribute("href", `mailto:${atob(encodedEmailCP)}`);
emailCP.innerText = atob(encodedEmailCP);
