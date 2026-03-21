function crazyBtn() {
  const btn = document.querySelector('.button')

  function moveBtn() {
    const newX = Math.floor(Math.random() * (window.innerWidth - btn.offsetWidth));
    const newY = Math.floor(Math.random() * (window.innerHeight - btn.offsetHeight));
    btn.style.left = `${newX}px`;
    btn.style.top = `${newY}px`
  }

  btn.addEventListener('mouseover', () => {
    if (Math.random() < 0.5)
      moveBtn()
  })

  btn.addEventListener('click', () => {
    moveBtn()
  })
}
crazyBtn()