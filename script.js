// ===== Configuration =====
const WA_NUMBER = "628984967609"; // Nomor WhatsApp admin Next Level Innovator
const REGISTER_MESSAGE =
  "Halo Admin Next Level Innovator, saya ingin mendaftar Private Class #1 - Investor Ready (8 Juli 2026). Nama saya: ";
const ASK_MESSAGE =
  "Halo Admin Next Level Innovator, saya ingin tanya tentang Private Class #1 - Investor Ready.";

function buildWaLink(message) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}

// ===== Wire up all WhatsApp CTAs =====
document.addEventListener("DOMContentLoaded", () => {
  const registerLink = buildWaLink(REGISTER_MESSAGE);
  const askLink = buildWaLink(ASK_MESSAGE);

  const registerButtons = [
    document.getElementById("btnRegisterTop"),
    document.getElementById("btnRegisterDetail"),
  ];
  registerButtons.forEach((btn) => {
    if (btn) {
      btn.href = registerLink;
      btn.target = "_blank";
      btn.rel = "noopener";
    }
  });

  const askButtons = [
    document.getElementById("btnZoomInfo"),
    document.getElementById("btnSticky"),
    document.getElementById("footerWa"),
  ];
  askButtons.forEach((btn) => {
    if (btn) {
      btn.href = askLink;
      btn.target = "_blank";
      btn.rel = "noopener";
    }
  });

  // ===== Scroll reveal animation =====
  const revealEls = document.querySelectorAll(".reveal");
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );
  revealEls.forEach((el) => io.observe(el));
});
