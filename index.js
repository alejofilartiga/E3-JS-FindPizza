const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "./img/muzzarella.png",
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "./img/cebolla.png",
  },

  {
    id: 3,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
    imagen: "./img/4quesos.png",
  },

  {
    id: 4,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
    imagen: "./img/especial.png",
  },

  {
    id: 5,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
    imagen: "./img/anana.png",
  },
];


const formulario = document.getElementById("formulario");
    const resultado = document.getElementById("resultado");

    function buscarPizza(id) {
      const pizza = pizzas.find((pizza) => pizza.id === id);
      if (pizza) {
        resultado.innerHTML = `
          <div class="tarjeta">
            <h2>${pizza.nombre}</h2>
            <img src="${pizza.imagen}" alt="${pizza.nombre}">
            <p>Precio: $${pizza.precio}</p>
          </div>
        `;
        localStorage.setItem("ultimaPizza", JSON.stringify(pizza));
      } else {
        resultado.innerHTML = "<p class='error'>No se encontró ninguna pizza con ese ID.</p>";
      }
    }

    function cargarUltimaPizza() {
      const ultimaPizza = localStorage.getItem("ultimaPizza");
      if (ultimaPizza) {
        buscarPizza(JSON.parse(ultimaPizza).id);
      }
    }

    formulario.addEventListener("submit", (event) => {
      event.preventDefault();
      const id = parseInt(event.target.id.value);
      if (isNaN(id)) {
        resultado.innerHTML = "<p class='error'>Por favor, ingrese un número válido.</p>";
      } else {
        buscarPizza(id);
      }
    });

    cargarUltimaPizza();