/* obteniendo la unidad de medida del cuadrado*/
const unidadMedida = document.getElementById("longitudCuadrado");
let unidad = unidadMedida.value;
console.log(unidad);

/* evento que modifica el valor de unidad segun la seleccion hecha */
unidadMedida.addEventListener("change", () => {
  unidad = document.getElementById("longitudCuadrado").value;
  return console.log(unidad);
});

/* obteniendo la unidad de medida del triangulo */
const unidadMedidaT = document.getElementById("longitudTriangulo");
let unidadT = unidadMedidaT.value;
console.log(unidadT);

/* evento que modifica el valor de unidad segun la seleccion hecha */
unidadMedidaT.addEventListener("change", () => {
  unidadT = document.getElementById("longitudTriangulo").value;
  return console.log(unidadT);
});

/* obteniendo la unidad de medida del circulo */
const unidadMedidaC = document.getElementById("longitudCirculo");
let unidadC = unidadMedidaC.value;
console.log(unidadC);

/* evento que modifica el valor de unidad segun la seleccion hecha */
unidadMedidaC.addEventListener("change", () => {
  unidadC = document.getElementById("longitudCirculo").value;
  return console.log(unidadC);
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

/*
  Triangulo
  A = (b*h) / 2
  P = a+b+c
*/
const areaTriangulo = (b, h) => {
  const area = (b * h) / 2;
  console.log(`El area del triangulo es de ${area} ${unidad}^2`);
};
const perimetroTriangulo = (a, b, c) => {
  const area = a + b + c;
  console.log(`El perimetro del triangulo es de ${area} ${unidad}`);
};
getAreaTriangulo.addEventListener("click", () => {
  const sideB = document.getElementById("ladoTrianguloB").value;
  const height = document.getElementById("ladoTrianguloB").value;
  areaTriangulo(sideB, height);
});
getPerimetroTriangulo.addEventListener("click", () => {
  const sideA = document.getElementById("ladoTrianguloA").value;
  const sideB = document.getElementById("ladoTrianguloB").value;
  const sideC = document.getElementById("ladoTrianguloC").value;
  perimetroTriangulo(sideA, sideB, sideC);
});

/*
  altura isosceles
  h = √((a^2)-(b^2/4))
*/
const alturaIsosceles = (a, b, c) => {
  if (a === c && c !== b && b > 0) {
    const h = Math.sqrt([a ** 2] - [b ** 2 / 4]).toFixed(1);
    console.log(h);
  } else {
    console.log("estas no son las medidas de un triangulo isosceles");
  }
};

/*
  cicurlo
  A = Pi*r^2
  P = 2*Pi*r
*/
const areaCirculo = r => {
  const area = Math.floor(Math.PI * (r * r));
  console.log(`El area del circulo es de ${area} ${unidad}^2`);
};
const perimetroCirculo = r => {
  const area = Math.floor(2 * Math.PI * r);
  console.log(`El perimetro del circulo es de ${area} ${unidad}`);
};

getAreaCirculo.addEventListener("click", () => {
  const radio = document.getElementById("radioCirculo").value;
  areaCirculo(radio);
});
getPerimetroCirculo.addEventListener("click", () => {
  const radio = document.getElementById("radioCirculo").value;
  perimetroCirculo(radio);
});
