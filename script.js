function toggleMode(){
  const html = document.documentElement
  html.classList.toggle("light")
const img = document.querySelector("#profile img")

  if(html.classList.contains('light')){
img.setAttribute('src', './assets/profileLightCrop.png')
img.setAttribute('alt', 'Darllington olhando para um mural de quadros')
html.setAttribute('class', 'light')
  } else{
    html.setAttribute('class', 'dark');
img.setAttribute('src', './assets/profileDarkCrop.png')
img.setAttribute('alt', 'Darllington de blusa azul, olhando para a tela do celular')
  }
 

}


