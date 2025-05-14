export function createBubbleFunction(){
    const bubbleZone = document.querySelector('#bubble-zone')
    const createBubble = document.createElement('span')
    let size = Math.random() * 60
    
    createBubble.className = 'bubble'
    createBubble.style.width = 20 + size + 'px'
    createBubble.style.height = 20 + size + 'px'
    createBubble.style.left = Math.random() * innerWidth + 'px'

    bubbleZone.appendChild(createBubble)

    setTimeout(() => {
        createBubble.remove()
    }, 4000)
}