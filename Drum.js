"use srtict"
alert("لو فاتح من الفون خليه بالعرض")
window.onkeydown = function (event) {
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`)
    if (!audio) return
    audio.currentTime = 0
    audio.play()
    key.classList.add("active")

}
const keys = document.querySelectorAll(".key")
function removeTransition(e) {
    if (e.propertyName != `transform`) return
    this.classList.remove("active")
}
keys.forEach(key => {
    key.addEventListener("click", function (e) {
        const audio = document.querySelector(`audio[data-key="${e.target.dataset.key}"]`)
        audio.currentTime = 0;
        audio.play()
        e.target.classList.add("active")
    })
    key.addEventListener("transitionend", removeTransition)
})