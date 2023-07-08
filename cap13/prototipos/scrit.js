let proto = "hola";
console.log("a");
console.log(proto.__proto__);
console.log("1");
console.log(proto.prototype);

let prototipo = function () { };
console.log("b");
console.log(prototipo.prototype);
console.log("2");
console.log(prototipo.__proto__);
