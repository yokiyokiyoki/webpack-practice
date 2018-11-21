import './style.css'
import png from './img/en.png'

import Vue from 'vue'

function component () {
  let element = document.createElement('div')

  element.innerHTML = 'hello world'
  element.classList.add('hello')

  let img = new Image()
  img.src = png

  element.appendChild(img)

  console.log(Vue)
  ;[1, 2, 3].map(n => n + 1)

  return element
}

document.body.appendChild(component())
