const datos = document.querySelector("#datos")
const boton_nombre = document.querySelector("#nombre")
const boton_email = document.querySelector("#e-mail")
const boton_direccion = document.querySelector("#direccion")
const boton_fecha = document.querySelector("#fecha")
const boton_telefono = document.querySelector("#telefono")
console.log(datos)
boton_nombre.addEventListener("click", function () {
    datos.innerHTML = "Logan Patterson"
})

boton_email.addEventListener("click", function () {
    datos.innerHTML = "logan.patterson@example.com"
})
boton_direccion.addEventListener("click", function () {
    datos.innerHTML = "4225 Eason Rd"
})
boton_fecha.addEventListener("click", function () {
    datos.innerHTML = "9/2/1946"
})
boton_telefono.addEventListener("click", function () {
    datos.innerHTML = "(630) 772-2147"
})