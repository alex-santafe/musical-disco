import React from "react"
import "./slider2.css"

// ⚙️ Setup ---------------------- //

const items = document.querySelectorAll(".item")
const color = gsap.utils.interpolate(["orange", "purple"]) // "green"
const map = gsap.utils.mapRange(0, items.length, 0, 1) // 150
const offset = 30

gsap.set(items, {
  backgroundColor: index => color(map(index)),
  x: index => offset * index,
  y: index => -offset * index,
  zIndex: index => items.length - index,
})
// END ⚙️ Setup ------------------ //
//const CardSlider = () => {
function slider2 = (items) => {
  let totalItems = items.length
  let currentItem = 0

  function updatePositions() {
    for (let i = 0; i < totalItems; i++) {
      let itemIndex = (currentItem + i) % totalItems
      let item = items[itemIndex]
      gsap.to(item, {
        duration: 0.8, // Dauer der Animation
        x: offset * i,
        y: -offset * i,
        zIndex: totalItems - i,
        scale: 1,
        opacity: 1,
        ease: "power2.out", // Ein easing Effekt für eine geschmeidigere Animation
      })
    }
  }

  function moveToNext() {
    currentItem = (currentItem + 1) % totalItems
    updatePositions()
  }

  setInterval(moveToNext, 2000) // Jeder 2 Sekunden

  updatePositions()
 
}
}
return (

    <div class="slider">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
    <div class="item">4</div>
    <div class="item">5</div>
    </div>
      )
//document.addEventListener("DOMContentLoaded", function () {
//  diagonalLoop(items)
//})
export default slider2