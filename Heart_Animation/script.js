const bodyEl = document.querySelector('body')

bodyEl.addEventListener("mousemove", (event) => {
  const xPos = event.offsetX
  const yPos = event.offsetY

  const span1 = document.createElement('span')
  span1.style.left = xPos + "px"
   span1.style.top = yPos + "px"
   const size = Math.random()*100
   span1.style.width = size + "px"
   span1.style.height = size + "px"
  bodyEl.appendChild(span1)
  setTimeout(() => {
      span1.remove()
  }, 3000)
})