export function pictureScrollZoomTranslate(id, options = {}) {
    
    const {
        minScale = 0.75,
        maxScale = 1.25,
        maxOffsetPercent = 20
    } = options;
    
    const handleScroll = () => {
    const element = document.getElementById(id);
    const rect = element.getBoundingClientRect();

    const windowHeight = window.innerHeight

    // L’élément est hors viewport (en haut ou en bas)
    if (rect.bottom < 0 || rect.top > windowHeight) {
      return
    }

    const elementCenter = rect.top + rect.height / 2
    const screenCenter = windowHeight / 2

    // Distance entre le centre de l’élément et celui de l’écran
    const distance = elementCenter - screenCenter
    const maxDistance = windowHeight / 2 + rect.height / 2

    // Normaliser de -1 à 1
    const progress = Math.max(-1, Math.min(1, distance / maxDistance));
    const normalizedProgress = 1 - Math.abs(progress); // 1 = centré, 0 = éloigné

    const offset = progress * maxOffsetPercent;
    const scale = minScale + (maxScale - minScale) * normalizedProgress;

    element.style.transform = `translate(${-offset}%, ${-offset}%) scale(${scale})`
    element.style.transformOrigin = "center center";
    element.style.transition = 'transform 0.1s ease-out'
    element.style.position = 'relative'
    element.style.zIndex = '-1'
  };

  return { handleScroll };
}
