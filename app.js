// Guardamos los nombres aquí
let amigos = [];

// Agregar un amigo a la lista
function agregarAmigo() {
  let input = document.getElementById("amigo");
  let nombre = input.value.trim();

  if (nombre === "") {
    alert("Por favor escribe un nombre válido");
    return;
  }

  // Añadimos el nombre al arreglo
  amigos.push(nombre);

  // Mostramos la lista en pantalla
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = ""; // Limpiar lista antes de volver a pintarla

  for (let i = 0; i < amigos.length; i++) {
    let li = document.createElement("li");
    li.textContent = amigos[i];
    lista.appendChild(li);
  }

  // Limpiamos el campo
  input.value = "";
}

// Sortear un amigo al azar
function sortearAmigo() {
  if (amigos.length === 0) {
    alert("Primero debes agregar al menos un nombre");
    return;
  }

  // Número aleatorio entre 0 y la cantidad de amigos - 1
  let indice = Math.floor(Math.random() * amigos.length);
  let amigoSecreto = amigos[indice];

  // Mostramos el resultado
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = " El amigo secreto es: " + amigoSecreto;
}