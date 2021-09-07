/* obteniendo la unidad de medida del cuadrado*/
const unidadMedida = document.getElementById("longitudCuadrado");
let unidad = unidadMedida.value;
console.log(unidad);

/* evento que modifica el valor de unidad segun la seleccion hecha */
unidadMedida.addEventListener("change", () => {
  unidad = document.getElementById("longitudCuadrado").value;
  return console.log(unidad);
});

/* Perimetro = P | Area = A */
/*
  Cuadrado
  A = a^2
  P = a*4
*/

/* se necesita obtener el valor al momento de hacer el calculo no antes*/
/* const sideA = document.getElementById("ladoCuadrado").value; */
/*
  esto no es necesario, se puede agregar un addEvenetListener directamente
  al tag mediante el id
  */
/* const getArea = document.getElementById("getAreaCuadrado"); */
/* const getPerimetro = document.getElementById("getPerimetroCuadrado"); */

const areaCuadrado = a => {
  const area = a * a;
  console.log(`El area del cuadrado es de ${area} ${unidad}^2`);
};
const perimetroCuadrado = a => {
  const area = a * 4;
  console.log(`El perimetro del cuadrado es de ${area} ${unidad}`);
};

getAreaCuadrado.addEventListener("click", () => {
  const sideA = document.getElementById("ladoCuadrado").value;
  areaCuadrado(sideA);
  console.log(sideA);
});
getPerimetroCuadrado.addEventListener("click", () => {
  const sideA = document.getElementById("ladoCuadrado").value;
  perimetroCuadrado(sideA);
});
