//Datos que se requieren obtener
let productos = []

console.warn('Se produjo un error')


const getDatos = async () => {
  try {
    const respuesta = await fetch("productos.json");
    productos = await respuesta.json()
  } catch (error) {
    console.error("Ha ocurrido un")
  }
}



























let cartas = document.getElementById("cartas");

const renderizarProductos = () => {
  productos.map((producto) => {
    const { imagen, titulo, precio } = producto; //Explicar destructuring
  
    const carta = document.createElement("div");
    carta.className = "card col-md-2 container-fluid";
  
    carta.innerHTML = `
        <img class="card-img-top" src=${imagen} alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">${titulo}</h5>
            <p class="card-text">$ ${precio}</p>
            <a href="#" class="btn btn-primary">Comprar</a>
        </div>
    `;
  
    cartas.append(carta);
  });
}
