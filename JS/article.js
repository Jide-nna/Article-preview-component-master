var share = document.querySelector(".hidden")
var btn = document.querySelector('.share')
var menu = document.querySelector('.active')
btn.addEventListener("click", function() {
    btn.classList.toggle("btn")
    share.classList.toggle("active")
})