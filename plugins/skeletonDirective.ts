import Vue from 'vue'

Vue.directive('skeleton', {
  bind(el, binding) {
    function createImage() {
      const img = new Image()
      if (binding.value && binding.value.src) {
        const { src, alt } = binding.value
        img.setAttribute('alt', alt)
        img.setAttribute('src', src)
      }

      img.onload = function () {
        el.appendChild(img)
        el.classList.remove('loading')
        el.style.minHeight = '0'
      }
    }

    function createText() {
      const p = document.createElement('p')
      p.innerText = binding.value.text
      el.replaceWith(p)
      el.classList.remove('loading')
    }

    setTimeout(() => {
      if (binding.value && binding.value.text) {
        createText()
      } else {
        createImage()
      }
    }, 300)
  },
})
