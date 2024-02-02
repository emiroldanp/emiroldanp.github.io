// Para Laurita

document
  .getElementById("mostrarMensaje")
  .addEventListener("click", function () {
    // Add new messages here
    var mensajes = [
      "Eres la luz que ilumina mis días.",
      "Tu sonrisa es mi razón para ser feliz.",
      "Cada momento contigo es un regalo.",
      "Eres la melodía perfecta en mi vida.",
      "Tu amor es mi refugio seguro.",
      "Eres mi suerte, mi fortuna y mi amor.",
      "Contigo, cada día es San Valentín.",
      "Tú y yo, un equipo imparable.",
      "Eres mi inspiración diaria.",
      "Contigo, el amor es eterno.",
      "Tu presencia es mi paz.",
      "Mis días son mejores porque estás en ellos.",
      "Amarte es lo más natural del mundo.",
      "Eres la pieza que completa mi rompecabezas.",
      "Tú eres mi sol en días nublados.",
      "A tu lado, el tiempo se detiene.",
      "Eres mi sueño hecho realidad.",
      "Tu amor es mi mayor logro.",
      "En tu abrazo, encuentro mi hogar.",
      "Siempre encuentro consuelo en tu amor.",
      "Tú eres mi sueño hecho realidad.",
      "Cada día te amo más que ayer.",
      "Eres mi amor incondicional.",
      "Contigo, el amor es un poema interminable.",
      "En tu mirada, encuentro mi paz.",
      "Amarte es mi deporte favorito.",
      "Eres el ingrediente secreto de mi felicidad.",
      "Gracias por hacer mi vida extraordinaria.",
      "Tú, yo, para siempre.",
      "Cada día a tu lado es un regalo.",
      "En tus besos, encuentro mi éxtasis.",
      "Contigo, el amor es un cuento interminable.",
      "Eres el motivo de mis sonrisas.",
      "A tu lado, cada día es especial.",
      "Tú, mi mayor inspiración.",
      "Eres mi razón para levantarme cada mañana.",
      "Tu amor es mi mejor regalo.",
      "Eres la melodía que nunca deja de sonar en mi corazón.",
      "Gracias por ser mi compañera de vida.",
      "En tu abrazo, el mundo desaparece.",
      "Tú eres mi suerte en este viaje llamado vida.",
      "Amor contigo, aventura asegurada.",
      "Contigo, cada día es un nuevo comienzo.",
      "Tú eres mi sol en los días lluviosos.",
      "Mi amor por ti crece con cada latido.",
      "Eres mi anhelo hecho realidad.",
      "Cada día a tu lado es un regalo.",
      "En tu amor, encuentro mi consuelo.",
      "A tu lado, el amor florece.",
      "Eres la inspiración de mi creatividad.",
      "Gracias por ser mi amor constante.",
      "Contigo, cada día es una aventura.",
      "Tú eres mi mejor mitad.",
      "Eres mi confidente y cómplice.",
      "Amarte es mi mayor privilegio.",
      "Tú y yo, una historia sin fin.",
      "Eres el sueño del que nunca quiero despertar.",
      "Mi amor por ti es imparable.",
      "Contigo, el amor es un viaje asombroso.",
      "Tú eres mi razón para creer en el destino.",
      "Eres mi oasis en el desierto.",
      "Gracias por ser mi roca en momentos difíciles.",
      "A tu lado, cada día es un regalo precioso.",
      "Tú, mi estrella en la noche más oscura.",
      "Eres el motivo de mi gratitud diaria.",
      "Contigo, el amor es un fuego eterno.",
      "Tu amor es mi fuente de energía.",
      "Tú y yo, un equipo perfecto.",
      "En tu amor, encuentro mi paz interior.",
      "Gracias por ser mi amor incondicional.",
      "Eres mi sueño cumplido.",
      "A tu lado, cada día es una celebración.",
      "Tú, mi razón para ser mejor.",
      "Amarte es mi mayor alegría.",
      "Contigo, el amor es un poema sin fin.",
      "Eres mi ancla en las tormentas.",
      "Tú, mi razón para sonreír.",
      "Gracias por hacer mi vida más brillante.",
      "En tus abrazos, encuentro seguridad.",
      "Eres mi sol en el día más nublado.",
      "Contigo, cada día es una nueva página en nuestro libro de amor.",
      "Tú, mi refugio en la tormenta.",
      "Amarte es mi canción favorita.",
      "Eres mi razón para creer en la magia del amor.",
      "A tu lado, la vida es una obra maestra.",
      "Tú, mi mejor decisión.",
      "Gracias por ser mi apoyo incondicional.",
      "Contigo, el amor es un viaje increíble.",
      "Eres mi paz en medio del caos.",
      "Tú, mi amor eterno y verdadero.",
    ];

    var mensajeIndex = Math.floor(Math.random() * mensajes.length);
    var mensajeElegido = mensajes[mensajeIndex];

    document.getElementById("mensaje").innerHTML = mensajeElegido;
    document.getElementById("mensaje").style.display = "block";

    // Change background-color
    const nuevoColor = getRandomPinkColor();
    document.body.style.backgroundColor = nuevoColor;

    // Change images
    const [leftImage, rightImage] = getRandomImages();
    document.getElementById("leftImage").src = leftImage;
    document.getElementById("rightImage").src = rightImage;
    document.getElementById("mensaje").style.display = "block";

    // Set initial opacity to 0
    document.getElementById("leftImage").style.opacity = 0;
    document.getElementById("rightImage").style.opacity = 0;

    // Gradually increase opacity over time
    let opacity = 0;
    const interval = setInterval(function () {
      opacity += 0.01;
      document.getElementById("leftImage").style.opacity = opacity;
      document.getElementById("rightImage").style.opacity = opacity;
      if (opacity >= 1) {
        clearInterval(interval);
      }
    }, 10); // Adjust the interval duration to control the speed of the fading effect
  });

// Change background color function
function getRandomPinkColor() {
  const minRed = 200;
  const maxRed = 255;
  const green = Math.floor(Math.random() * 100) + 100;
  const blue = Math.floor(Math.random() * 100) + 100;
  const red = Math.floor(Math.random() * (maxRed - minRed + 1) + minRed);

  return `rgb(${red}, ${green}, ${blue})`;
}
// Get random images that doesn't repeat function
function getRandomImages() {
  // Add new images here
  const imageNames = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
    "9.jpg",
    "10.jpg",
    "11.jpg",
    "12.jpg",
    "13.jpg",
    "14.jpg",
    "15.jpg",
    "16.jpg",
    "17.jpg",
    "18.jpg",
    "19.jpg",
    "20.jpg",
    "21.jpg",
    "22.jpg",
    "23.jpg",
    "24.jpg",
    "25.jpg",
    "26.jpg",
    "27.jpg",
    "28.jpg",
    "29.jpg",
  ];
  // Pick the first image randomly
  const firstIndex = Math.floor(Math.random() * imageNames.length);
  const firstImagePath = "extras/imgs/" + imageNames[firstIndex];
  // Pick the second image randomly, ensuring it's different from the first
  let secondIndex;
  do {
    secondIndex = Math.floor(Math.random() * imageNames.length);
  } while (secondIndex === firstIndex);
  const secondImagePath = "extras/imgs/" + imageNames[secondIndex];
  return [firstImagePath, secondImagePath];
}

function spinImage(element) {
  element.classList.add("clicked");
  setTimeout(function () {
    element.classList.remove("clicked");
  }, 1000); // Adjust the duration (in milliseconds) as needed
}

