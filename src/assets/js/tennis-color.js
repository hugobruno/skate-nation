const $BlueTennis = document.querySelector("#tennis1");
const $GreenTennis = document.querySelector("#tennis2");
const $RedTennis = document.querySelector("#tennis3");
const $YellowTennis = document.querySelector("#tennis4");
//para el footer
const $logoImg = document.querySelector('#logo');
//background color y font color
const mainStyleB = "rgba(37, 105, 184, 1)"; //estilo 1, color principal y letras de footer
const compStyleB = "rgba(0, 43, 92, 1)"; //color de footer y color principal de letras :v-
const mainStyleG = "rgba(115, 149, 73, 1)"; //estilo 2, color principal y letras de footer
const compStyleG = "rgba(37, 37, 36, 1)"; //color de footer y principal de las letras
const mainStyleR = "rgba(228, 77, 65, 0.9)"; //estilo 3, color pincipal y de letras de footer
const compStyleRY = "rgba(16, 71, 110, 1)"; //color de footer y principal de letras de estilo 3 y 4
const mainStyleY = "rgba(254, 196, 81, 0.9)"; // estilo 4, color principal y de letras de footer

//localiza todos los elementos con esas etiquetas, se modificara atributo, no etiqueta
const BackColor = document.getElementsByClassName("style1"); //color background
const cBackColor = document.getElementsByClassName("style1-comp"); //color footer
const bordColor = document.getElementsByClassName("bordS"); //elementos que necesitan borde
const textMColor = document.getElementsByClassName("font-mainColor-s1"); //color de letra principal
const textCColor = document.getElementsByClassName("font-compColor-s1"); //texto de footer

$BlueTennis.onclick = (()=>{
    for (let i = 0; i < BackColor.length; i++) {
        BackColor[i].style.backgroundColor = mainStyleB; //color de fondo principal
      }
      for (let i = 0; i < cBackColor.length; i++) {
        cBackColor[i].style.backgroundColor = compStyleB; //color de footer
      }
      for (let i = 0; i < bordColor.length; i++) {
        bordColor[i].style.borderColor = compStyleB; //color de borde
      }
      for (let i = 0; i < textMColor.length; i++) {
        textMColor[i].style.color = compStyleB; //color de letras principal
      }
      for (let i = 0; i < textCColor.length; i++) {
        textCColor[i].style.color = mainStyleB; //letras de footer
      }
      //imagenes para navbar y footer
      $logoImg.src = "./assets/images/footer/logo-s1.png";
    
});

$GreenTennis.onclick = (()=>{
    for (let i = 0; i < BackColor.length; i++) {
        BackColor[i].style.backgroundColor = mainStyleG; //color de fondo principal
      }
      for (let i = 0; i < cBackColor.length; i++) {
        cBackColor[i].style.backgroundColor = compStyleG; //color de footer
      }
      for (let i = 0; i < bordColor.length; i++) {
        bordColor[i].style.borderColor = compStyleG; //color de borde
      }
      for (let i = 0; i < textMColor.length; i++) {
        textMColor[i].style.color = compStyleG; //color de letras principal
      }
      for (let i = 0; i < textCColor.length; i++) {
        textCColor[i].style.color = mainStyleG; //letras de footer
      }
      //imagenes para navbar y footer
      $logoImg.src = "./assets/images/footer/logo-s2.png";
});

$RedTennis.onclick = (()=>{
    for (let i = 0; i < BackColor.length; i++) {
        BackColor[i].style.backgroundColor = mainStyleR; //color de fondo principal
      }
      for (let i = 0; i < cBackColor.length; i++) {
        cBackColor[i].style.backgroundColor = compStyleRY; //color de footer
      }
      for (let i = 0; i < bordColor.length; i++) {
        bordColor[i].style.borderColor = compStyleRY; //color de borde
      }
      for (let i = 0; i < textMColor.length; i++) {
        textMColor[i].style.color = compStyleRY; //color de letras principal
      }
      for (let i = 0; i < textCColor.length; i++) {
        textCColor[i].style.color = mainStyleR; //letras de footer
      }
      //imagenes para navbar y footer
      $logoImg.src = "./assets/images/footer/logo-s3.png";
});

$YellowTennis.onclick = (()=>{
    for (let i = 0; i < BackColor.length; i++) {
        BackColor[i].style.backgroundColor = mainStyleY; //color de fondo principal
      }
      for (let i = 0; i < cBackColor.length; i++) {
        cBackColor[i].style.backgroundColor = compStyleRY; //color de footer
      }
      for (let i = 0; i < bordColor.length; i++) {
        bordColor[i].style.borderColor = compStyleRY; //color de borde
      }
      for (let i = 0; i < textMColor.length; i++) {
        textMColor[i].style.color = compStyleRY; //color de letras principal
      }
      for (let i = 0; i < textCColor.length; i++) {
        textCColor[i].style.color = mainStyleY; //letras de footer
      }
      //imagenes para navbar y footer
      $logoImg.src = "./assets/images/footer/logo-s4.png";
});