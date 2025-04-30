export function pictureScrollZoom(targetId = 'charaZoom', options = {}) {
  const {
    minScale = 0.5,
    maxScale = 2,
    scrollFactor = 1000
  } = options

  const handleScrollZoom = () => {
    const image = document.getElementById(targetId)
    if (!image) return

    const scrollY = window.scrollY
    const scale = Math.min(maxScale, minScale + scrollY / scrollFactor)

    image.style.transform = `scale(${scale})`
    image.style.transition = 'transform 0.1s ease-out'
  }

  return {
    handleScrollZoom
  }
}  