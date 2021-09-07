/* const data = document.getElementById("data"); */
/* const showData = document.getElementById("showData"); */
/* const getPromedio = document.getElementById("getPromedio"); */
/* const getMediana = document.getElementById("getMediana"); */
/* const getModa = document.getElementById("getModa"); */
/* const showResult = document.getElementById("showResult"); */
const arrOriginal = [];
const arrOrderly = [];
let l;

data.addEventListener("keypress", ({ key }) => {
  /* console.log(key); */
  if (key == "Enter" && data.value != "") {
    arrOriginal.push(parseFloat(data.value));
    arrOrderly.push(parseFloat(data.value));
    showData.innerText = `[${arrOriginal}]`;
    arrOrderly.sort((a, b) => a - b);
    l = arrOrderly.length;
    data.value = "";
    console.log(arrOriginal);
    console.log(arrOrderly);
  }
});

/* Funciones de los conceptos estatisticos */
const Promedio = () => {
  const reducer = (a, e) => a + e;
  const result = l > 0 ? arrOrderly.reduce(reducer) / l : 0;
  /* showResult.innerText = result; */
  return result.toFixed(2);
};

const Mediana = () => {
  const modulo = l % 2;
  /*
  el total de elementos del array se /2 y se le -1 para que apunte al index del elemento antes de la mitad
  */
  let indexParA = l / 2 - 1;
  /* elemento despues de la mitad */
  let indexParB = l / 2;
  /*
  al total de elementos del array se le -1 para que al /2 apunte al index del elemento central
  */
  let indexInpar = (l - 1) / 2;
  /* let indexOfMediana = 0; = modulo === 0 ? l / 2 - 1 + l / 2 / 2 : (l - 1) / 2;
    if (modulo === 0) {
      indexOfMediana = l / 2 - 1 + l / 2 / 2;
      console.log(indexOfMediana);
      console.log(arrOrderly[indexOfMediana]);
    } else {
      indexOfMediana = (l - 1) / 2;
      console.log(arrOrderly[indexOfMediana]);
    } */
  /* modulo === 0 ? l / 2 - 1 + l / 2 / 2 : (l - 1) / 2; */
  /* console.log("elemento" + (l / 2 - 1) + "elemento" + l / 2) */
  const result = [
    modulo === 0
      ? (arrOrderly[indexParA] + arrOrderly[indexParB]) / 2
      : arrOrderly[indexInpar],
  ];
  console.log(result);
  console.log(indexParA);
  console.log(indexParB);
  console.log(indexInpar);
  return result;
};

/* dic = frecuencia de los datos {dato:frecuencia} */
let dic = {};
const Moda = () => {
  /* operacion para mapear la frecuencia de los datos */
  arrOriginal.map(e => {
    console.log(e);
    if (e in dic) {
      ++dic[e];
    } else {
      dic[e] = 1;
    }
  });

  /* verificacion de la moda */
  /*  */
  let result = [];
  /* se inicializa en 0 porque aun no se ha iterado ningun elemento */
  let anterior = 0;
  for (const v in dic) {
    /* compara si la frecuencia del dato es mas alta que la del dato anterior.
         Asigna el dato a result y el valor (frecuencia) a anterior */
    if (dic[v] > anterior) {
      result = [v];
      anterior = dic[v];
    } else if (dic[v] === anterior) {
      /* si la frecuencia del dato es === anterior. agrega el dato a result */
      result.push(v);
    }
  }
  /* console.log(dic); */
  return result;
};

/* inyectar resultado al html */
/* ope = operation (promedio,mediana,moda) */
const result = (result, ope) => {
  console.log("dicionario length" + Object.keys(dic).length);
  console.log("result" + result);
  console.log("result length    " + result.length);
  let typeOfMode = "";
  let withoutMode = false;
  let showMode;
  const lengthResult = result.length;
  /* verificacion de tipo de moda con if y operador ternario (conditional(ternary)operator) */
  if (ope == "Moda") {
    lengthResult ===
    Object.keys(dic).length /* si todos los datos tienen la misma se ejecuta */
      ? (withoutMode = true)
      : lengthResult === 1
      ? console.log((typeOfMode = "unimodal"))
      : lengthResult === 2
      ? (typeOfMode = "bimodal")
      : (typeOfMode = "multimodal");
    console.log(
      "ejecutaaaa",
      (result = result.toString().replace(/,/gi, " - "))
    );
  }
  /* cambia el resultado en caso de que los datos no tengan moda */
  withoutMode /* si es true se ejecuta */
    ? (showMode = "Sin moda")
    : (showMode = `${ope} ${typeOfMode} : ${result}`);
  /* ope == "moda" && result.length > 1
      ? (result = result.toString().replace(/,/gi, " - "))
      : result; */
  showResult.innerText = showMode;
  /* ope == "promedio"
      ? (showResult.innerText = `el promedio del conjunto de datos es : ${result}`)
      : result.length === 1
      ? (showResult.innerText = `la ${ope} del conjunto de datos corresponde ha : ${result} `)
      : (showResult.innerText = `las ${ope}s del conjunto de datos corresponden ha : ${result[0]} y ${result[1]}`); */
};

/* eventos */

getPromedio.addEventListener("click", () => {
  console.log("aplicar promedio");
  result(Promedio(), getPromedio.innerText);
});
getMediana.addEventListener("click", () => {
  console.log("aplicar mediana");
  result(Mediana(), getMediana.innerText);
});
getModa.addEventListener("click", () => {
  console.log("aplicar moda");
  result(Moda(), getModa.innerText);
});
