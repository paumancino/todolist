const lista = document.querySelector("ul");
const form = document.querySelector("form");

const nombres = ["Ejemplo: Cocinar muffins"];

function guardarItemStorage(nombre) {
  nombres.push(nombre);
  return nombres.length;
}

function agregarItemLista(nombre, key) {
  const li = document.createElement("li");
  const checkbox = document.createElement("input");
  const div = document.createElement("div");
  const label = document.createElement("label");
  const div2 = document.createElement("div");
  const div3 = document.createElement("div");

  label.setAttribute("class", "toggler-wrapper style-8");
  div2.setAttribute("class", "toggler-slider");
  div3.setAttribute("class", "toggler-knob");
  li.setAttribute("key", "item--" + key);
  checkbox.addEventListener("change", toggleTareaHecha);
  const p = document.createElement("p");
  p.innerText = nombre;
  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("key", "input-" + key);
  p.setAttribute("key", "tarea-" + key);
  p.setAttribute("class", "badge");

  /** Estructura */
  lista.appendChild(li);
  li.appendChild(div);
  li.appendChild(p);
  div.appendChild(label);
  label.appendChild(checkbox);
  label.appendChild(div2);
  div2.appendChild(div3);
}

form.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const dataForm = Object.fromEntries(new FormData(evento.target));
  if (!dataForm.nombre) return alert("❤ No agregaste ninguna tarea ❤");

  const key = guardarItemStorage(dataForm.nombre);
  agregarItemLista(dataForm.nombre, key);
  form.reset();
});

function toggleTareaHecha() {
  const key = this.getAttribute("key").slice(6);
  const p = document.querySelector(`[key=tarea-${key}]`);
  const li = document.querySelector(`[key=item--${key}]`);
  p.classList.toggle("tachado");
  li.classList.toggle("hecho");
}

const button = document.querySelector("#btn-eliminar-tareas");

button.addEventListener("click", (evento) => {
  evento.preventDefault();
  console.log("hice click");
  const tareasHechas = document.querySelectorAll(".hecho");
  console.log(tareasHechas);
  for (let index = 0; index < tareasHechas.length; index++) {
    tareasHechas[index].remove();
  }
})

