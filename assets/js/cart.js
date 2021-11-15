const cards = document.querySelector("#cards");
const items = document.querySelector("#items");
const footer = document.querySelector("#footer");
const templateCard = document.getElementById("template-card").content;
const templateFooter = document.getElementById("template-footer").content;
const templateCart = document.getElementById("template-carrito").content;
const fragment = document.createDocumentFragment();
let cart = {};
const btn = document.querySelector(".button");

/* lista de purchased */

document.addEventListener("DOMContentLoaded", () => {
  fetchData();
  if (localStorage.getItem("cart")) {
    cart = JSON.parse(localStorage.getItem("cart"));
    paintCart();
  }
});

cards.addEventListener("click", (e) => {
  addCart(e);
});

items.addEventListener("click", (e) => {
  btnAction(e);
});
const fetchData = async () => {
  try {
    const response = await fetch("api-prueba.json");
    const data = await response.json();
    /* console.log(data) */
    paintCards(data);
  } catch (e) {
    console.log(e);
  }
};

const paintCards = (data) => {
  data.forEach((product) => {
    templateCard.querySelector("h5").textContent = product.title;
    templateCard.querySelector("p").textContent = product.precio;
    templateCard.querySelector("img").setAttribute("src", product.thumbnailUrl);
    templateCard.querySelector(".btn-dark").dataset.id = product.id;

    const clone = templateCard.cloneNode(true);
    fragment.appendChild(clone);
  });
  cards.appendChild(fragment);
};

const addCart = (e) => {
  // console.log(e.target)
  // console.log(e.target.classList.contains('btn-dark'))
  if (e.target.classList.contains("btn-dark")) {
    setCart(e.target.parentElement);
  }
  e.stopPropagation();
};

const setCart = (object) => {
  // console.log(object)
  const product = {
    id: object.querySelector(".btn-dark").dataset.id,
    title: object.querySelector("h5").textContent,
    precio: object.querySelector("p").textContent,
    cantidad: 1,
  };

  if (cart.hasOwnProperty(product.id)) {
    product.cantidad = cart[product.id].cantidad + 1;
  }

  cart[product.id] = { ...product };
  paintCart();
};

const paintCart = () => {
  items.innerHTML = "";
  Object.values(cart).forEach((product) => {
    templateCart.querySelector("th").textContent = product.id;
    templateCart.querySelectorAll("td")[0].textContent = product.title; //innerHtml
    templateCart.querySelectorAll("td")[1].textContent = product.cantidad;
    templateCart.querySelector(".btn-info").dataset.id = product.id;
    templateCart.querySelector(".btn-danger").dataset.id = product.id;
    templateCart.querySelector(".precio").textContent =
      product.cantidad * product.precio;
    const clone = templateCart.cloneNode(true);
    fragment.appendChild(clone);
  });
  items.appendChild(fragment);

  paintFooter();

  localStorage.setItem("cart", JSON.stringify(cart));
};

const paintFooter = () => {
  footer.innerHTML = "";
  if (Object.keys(cart).length === 0) {
    footer.innerHTML = `
        <th scope="row" colspan="5">Carrito vacío - comience a comprar!</th>
        `;
    return;
  }
  const nCantidad = Object.values(cart).reduce(
    (acumulator, { cantidad }) => acumulator + cantidad,
    0
  );
  const nPrecio = Object.values(cart).reduce(
    (acumulator, { cantidad, precio }) => acumulator + cantidad * precio,
    0
  );
  localStorage.setItem("total", JSON.stringify(nPrecio));

  templateFooter.querySelectorAll("td")[0].textContent = nCantidad;
  templateFooter.querySelector(".total").textContent = nPrecio;

  const clone = templateFooter.cloneNode(true);
  fragment.appendChild(clone);
  footer.appendChild(fragment);

  const btnVaciar = document.querySelector("#vaciar-carrito");
  btnVaciar.addEventListener("click", () => {
    cart = {};
    paintCart();
  });
};

const btnAction = (e) => {
  /*    console.log(e.target) */
  /* aumentar */
  if (e.target.classList.contains("btn-info")) {
    /*     console.log(cart[e.target.dataset.id]) */
    /* cart[e.target.dataset.id] */
    const product = cart[e.target.dataset.id];
    product.cantidad = cart[e.target.dataset.id].cantidad + 1;
    cart[e.target.dataset.id] = { ...product };
    paintCart();
  }
  if (e.target.classList.contains("btn-danger")) {
    const product = cart[e.target.dataset.id];
    product.cantidad--;
    if (product.cantidad === 0) {
      delete cart[e.target.dataset.id];
    }
    paintCart();
  }
  e.stopPropagation();
};
