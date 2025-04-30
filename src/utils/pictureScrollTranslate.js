export function pictureScrollTranslate(targetId = '', options = {}) {
  const {
    maxOffsetPercent = 50 // de +50% à -50%
  } = options

  const handleScrollTranslate = () => {
    const element = document.getElementById(targetId)
    if (!element) return

    const rect = element.getBoundingClientRect()
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
    const progress = Math.max(-1, Math.min(1, distance / maxDistance))
    const offset = progress * maxOffsetPercent // -1 → +max, +1 → -max

    element.style.transform = `translateX(${offset}%)`
    element.style.transition = 'transform 0.1s ease-out'
  }

  return {
    handleScrollTranslate
  }
}