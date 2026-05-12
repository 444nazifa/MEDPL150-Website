(function () {
  document.body.classList.add("horror-mode");

  const cursor = document.querySelector(".cursor");
  const ring = document.querySelector(".cursor-ring");

  if (cursor && ring && matchMedia("(pointer: fine)").matches) {
    let x = innerWidth / 2;
    let y = innerHeight / 2;
    let ringX = x;
    let ringY = y;

    addEventListener("mousemove", (event) => {
      x = event.clientX;
      y = event.clientY;
      cursor.style.left = `${x}px`;
      cursor.style.top = `${y}px`;
    });

    const animateCursor = () => {
      ringX += (x-ringX) * 0.18;
      ringY += (y-ringY) * 0.18;
      ring.style.left = `${ringX}px`;
      ring.style.top = `${ringY}px`;
      requestAnimationFrame(animateCursor);
    };
    animateCursor();

    document.querySelectorAll("a, button").forEach((element) => {
      element.addEventListener("mouseenter", () => document.body.classList.add("is-hovering"));
      element.addEventListener("mouseleave", () => document.body.classList.remove("is-hovering"));
    });
  }

  const rainContainer = document.querySelector(".rain-container");
  if (rainContainer && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const drops = Math.min(90, Math.floor(innerWidth / 16));
    const fragment = document.createDocumentFragment();

    for (let index = 0; index < drops; index += 1) {
      const drop = document.createElement("span");
      drop.className = "rain-drop";
      drop.style.left = `${Math.random() * 100}%`;
      drop.style.setProperty("--drop-height", `${36 + Math.random() * 70}px`);
      drop.style.setProperty("--drop-speed", `${0.9 + Math.random() * 1.6}s`);
      drop.style.setProperty("--drop-delay", `${Math.random() * -3}s`);
      fragment.appendChild(drop);
    }

    rainContainer.appendChild(fragment);
  }
})();
