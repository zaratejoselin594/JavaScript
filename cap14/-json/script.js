//esto un json
let obj = {
  "variable1": "pepe",
  "variable2": "pedro"
};
//esto no es un json
let obj2 = {
  variable1: "pepe",
  variable2: "pedro"
};
console.log(`json ${obj}, no json ${obj2}`);

// serializacion: convierte objetos a json a una cadena de texto; si o si con "" sino la coneccion no funciona;
// deserializar lo opuesto a serializar, no lleva comillas;

//convierte a serializado (osea lleva srtings "")
//stringify() convierte todo el json deserializado a uno serializado
const deserializado = ["hola", "pepe", "nashe"];
const serializado = JSON.stringify(deserializado)
console.log(typeof serializado);

//convierte a deserializado (osea le saca strings)
//parse() convierte todo el json serializado a uno deserializado
const serializadoo = '["hola", "pepe", "nashe"]';
const deserializadoo = JSON.parse(serializadoo)
console.log(typeof deserializadoo);

//polifill es una funcion que simula un json para navegadores antiguos que no soportan el json; casi nunca se usa

// ejemplo json modificado con parse()
//json serializado
const jsonText = `{
  "browsers": {
    "firefox": {
      "name": "Firefox",
      "pref_url": "about:config",
      "releases": {
        "1": {
          "release_date": "2004-11-09",
          "status": "retired",
          "engine": "Gecko",
          "engine_version": "1.7"
        }
      }
    }
  }
}`;

console.log(JSON.parse(jsonText));


/*
Para enviar los datos json es muy importante enviarlos serializados para evitar errores
luego los deserializamos para poder manipular el json
*/