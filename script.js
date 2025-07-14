// Mudança de cor

function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // Pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a imagm
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/foto_dia.png")
  } else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/foto_noite.png")
  }
}

// mostra certificado

function toggle(element) {
  // adiciona/retira a classe "active" no switch clicado
  element.classList.toggle("active")

  // sobe até o pai .certificado e procura o .profile img
  const parent = element.closest(".certificado")
  const img = parent.querySelector(".profile img")

  const display = window.getComputedStyle(img).display
  img.style.display = display === "none" ? "block" : "none"
}


const switch2 = document.getElementById("switch_2")
switch2.addEventListener("click", () => {
  switch2.classList.toggle("active")
})

const switch3 = document.getElementById("switch_3")
switch3.addEventListener("click", () => {
  switch3.classList.toggle("active")
})

// alerta social-links 

function exibirAlerta(tipo) {
  alert(`Desculpe, ainda não tenho meu ${tipo} próprio!`)
}