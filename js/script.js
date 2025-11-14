document.addEventListener("DOMContentLoaded", () => {
  gsap.from(".secao-imagem", {
    y: 50,
    opacity: 0,
    duration: 1.25,
    ease: "power4.out",
  });
});
