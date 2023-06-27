const logregBox = document.querySelector('.logreg-box');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

registerLink.addEventListener('click', () => {
  logregBox.classList.add('active');
});

loginLink.addEventListener('click', () => {
  logregBox.classList.remove('active');
});

// Función para mostrar el mensaje condicional
function mostrarMensajeCondicional() {
  // Obtener los campos de entrada requeridos
  var nombreInput = document.getElementById("correo");
  var correoInput = document.getElementById("contraseña");

  // Verificar si los campos requeridos están completados
  if (nombreInput.checkValidity() && correoInput.checkValidity()) {
    // Crear un elemento de mensaje
    var mensajeContainer = document.createElement("div");
    mensajeContainer.className = "mensaje-container";
  
    var mensaje = document.createElement("p");
    mensaje.textContent = "Inicio de sesión exitoso. Redirigiendo a Huellitas Salón.";

    // Agregar el mensaje al contenedor
    mensajeContainer.appendChild(mensaje);

    // Agregar el contenedor al cuerpo de la página
    document.body.appendChild(mensajeContainer);
    
    // Redirigir a otro archivo HTML después de 3 segundos
  setTimeout(function() {
    window.location.replace("../index.html"); // Cambia el nombre del archivo HTML al que deseas redirigir
  }, 2000); // 2000 milisegundos = 2 segundo
  }
}

// Obtener el botón por su ID
var btnMostrar = document.getElementById("btnMostrar");

// Agregar un listener para el evento 'click' del botón
btnMostrar.addEventListener("click", mostrarMensajeCondicional);
