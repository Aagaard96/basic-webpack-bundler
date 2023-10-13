export default (function burgerMenu(){
  const btn = document.querySelector('button')
  const menu = document.querySelector('.primaryMenu')
  let isClicked = false
  btn.addEventListener('click', () => {
    if(isClicked) {
      menu.style.right = '-19em'
      isClicked = false
    } else {
      menu.style.right = '0'
      isClicked = true
    }
    
  })
})()