const datos = document.querySelector("#datos")
const boton_nombre = document.querySelector("#nombre")
const boton_email = document.querySelector("#e-mail")
const boton_direccion = document.querySelector("#direccion")
const boton_fecha = document.querySelector("#fecha")
const boton_telefono = document.querySelector("#telefono")
const boton_habilidades = document.querySelector("#habilidades")
const boton_experiencia = document.querySelector("#experiencia")
const boton_estudios = document.querySelector("#estudios")
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
boton_habilidades.addEventListener("click",function(){
    datos.innerHTML = "manejo de office<br>Liquidacion de Sueldos e Impuestos"
})
boton_experiencia.addEventListener("click",function(){
    datos.innerHTML = "Encargado General de Hotel<br> Gerente Administracion"
})
boton_estudios.addEventListener("click",function(){
    datos.innerHTML = "primario completo Nuestra Sra.Del Carmen <br> secundario completo Nuestra Sra. Del Carmen<br>Contador En Curso Universidad Nacional MDP "
})