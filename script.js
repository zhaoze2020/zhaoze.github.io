const scrollTopButton = document.querySelector(".scroll-top");

const syncScrollTopButton = () => {
  if (!scrollTopButton) {
    return;
  }

  const shouldShow = window.scrollY > 320;
  scrollTopButton.classList.toggle("is-visible", shouldShow);
};

window.addEventListener("scroll", syncScrollTopButton, { passive: true });

scrollTopButton?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

syncScrollTopButton();
