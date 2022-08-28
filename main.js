//Datos que se requieren obtener
let productos = []



//Mostrar Error por consola
console.error("Se produjo un error");

//Mostrar Advertencia por consola
console.warn("Advertencia");

//Funcion que trae datos utilizando fetch y resolviendolo con async y await
const getDatos = async () => {
  try {
    const respuesta = await fetch("productos.json");
    productos = await respuesta.json()
    renderizarProductos()
  } catch (error) {
    console.error(error)
  }
}

getDatos()



//Renderizo en el DOM los productos
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
