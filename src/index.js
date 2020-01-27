if ("objectFit" in document.documentElement.style === false) {
  document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll("img[data-object-fit]");
    for (let i = 0; i < images.length; i++) {
      const image = images[i];
      image.style.backgroundImage = `url("${image.src}")`;
      image.style.backgroundPosition = image.getAttribute(
        "data-object-position"
      ) || 'center';
      image.style.backgroundRepeat = "no-repeat";
      image.style.backgroundSize = image.getAttribute("data-object-fit") || 'cover';
      image.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${image.width}' height='${image.height}'%3E%3C/svg%3E`;
    }
  });
}
