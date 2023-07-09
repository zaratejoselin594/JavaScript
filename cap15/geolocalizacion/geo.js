"use strict";

const geo = navigator.geolocation;
const posicion = (pos) => {
  console.log(pos);
  console.log(pos.coords.latitude);
  console.log(pos.coords.longitude);
}
const err = (e) => {
  console.log(e)
}
const options = {
  maximumAge: 0,
  timeout: 1000,
  enableHightAccuracy: true
}
 
geo.getCurrentPosition(posicion, err, options)

//wachPosition() trabaja con la localizacion en tiempo real