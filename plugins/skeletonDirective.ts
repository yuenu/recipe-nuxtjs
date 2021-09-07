import Vue from 'vue'

Vue.directive('skeleton', {
  bind(el, binding) {
    function createImage() {
      const img = new Image()
      if(binding.value) {
        const { src, alt } = binding.value
        img.setAttribute('alt', alt)
        img.setAttribute('src', src)
      } else {
        img.setAttribute('alt', 'image')
        img.setAttribute('src', 'https://www.globalsign.com/application/files/9516/0389/3750/What_Is_an_SSL_Common_Name_Mismatch_Error_-_Blog_Image.jpg')
      }
      img.onload = function () {
        el.appendChild(img)
        el.classList.remove('loading')
      }
    }

    function createText() {
      const p = document.createElement('p')
      p.innerText = binding.value.text
      el.replaceWith(p)
      el.classList.remove('loading')
    }

    setTimeout(() => {
      if(binding.value && binding.value.text) {
        createText()
      } else {
        createImage()
      }
    }, 3000)
  },
})
