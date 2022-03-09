let producto = prompt("¿Qué estabas buscando?");
let cantidad = prompt("¿Qué cantidad buscabas?");
function compra(a, b) {
  if (producto == "hamburguesa") {
    alert("Serían $500");
  } else {
    return confirm("No tenemos eso, ino te gustaría buscar otra cosa?");
  }
  if (cantidad < 2) {
    alert("¿Estás seguro?. Tenemos una promoción en la segunda!");
  }
}
compra();
